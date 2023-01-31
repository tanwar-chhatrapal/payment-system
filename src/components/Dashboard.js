import React, { useEffect, useState } from 'react';
import { AllProducts } from '../MockData/Products';

function Dashboard() {
  const [products, setProducts] = useState();
  const [cartProduct, setcartProduct] = useState([])

  useEffect(() => {
    setProducts(AllProducts)
    localStorage.setItem('product', JSON.stringify(cartProduct))
  }, [cartProduct])
  
  const addToCart = (product) => {
    setcartProduct([...cartProduct, product])
  }
    
  return (
    <div className="row">
      <div className="col-md-12">
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
                    <td align="center">{product.PRICE}</td>
                    <td align="right"><button className="btn btn-secondary" onClick={() => addToCart(product)}>Add to cart</button></td>
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