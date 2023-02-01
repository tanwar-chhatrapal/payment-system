import React, { useEffect, useState } from 'react';
import { AllProducts } from '../MockData/Products';
import { Link } from 'react-router-dom'

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [cartProduct, setcartProduct] = useState([])

  useEffect(() => {
    setProducts(AllProducts)
    const CartItem = JSON.parse(localStorage.getItem('product'))
    setcartProduct(CartItem)
  }, [AllProducts])

  useEffect(() => {
    localStorage.setItem('product', JSON.stringify(cartProduct))
  }, [cartProduct])

  const handleCartItem = (product) => {
    let tempA = []
    let tempB = []
    products.map(value => { 
      if (value?.PRODUCT_ID === product?.PRODUCT_ID && !product.isAdded) {
        tempA = [...tempA, { ...value, isAdded: true }]
      }
      else if (value?.PRODUCT_ID === product?.PRODUCT_ID && product.isAdded) {
        tempA = [...tempA, { ...value, isAdded: false }]
      }
      else tempA.push(value)
      setProducts(tempA)
    })
    tempA.map(p => p.isAdded && tempB.push(p))
    setcartProduct(tempB)
  }
  return (
    <div className="row">
      <div className="col-md-12">
       {cartProduct.length> 0 ?
       ( <div className='mt-5'>
          <Link to='/checkout'>Go To Cart</Link>
        </div>
        ) :
        null }
        <div className="table-responsive checkout">
          <table className="table table-hover mt-5">
            <thead className="table-dark border">
              <tr>
                <th scope="col" className="text-white">Product Id</th>
                <th className="text-white text-center">Product Name</th>
                <th className="text-white text-center">Price (per month)</th>
                <th className="text-white text-end"><span className="pe-4">Cart</span></th>
              </tr>
            </thead>
            <tbody className="border-top-0 border">
              {products && products.map((product, index) => {
                return (
                  <tr key={index}>
                    <td className="fw-bold">{product.PRODUCT_ID}</td>
                    <td align="center">{product.PRODUCT_NAME}</td>
                    <td align="center">${product.PRICE}</td>
                    <td align="right"><button className="btn btn-secondary" onClick={() => handleCartItem(product)}>{product?.isAdded ? 'Remove to cart' : 'Add to Cart'}</button></td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Dashboard