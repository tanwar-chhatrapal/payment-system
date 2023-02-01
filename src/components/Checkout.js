import React, { useEffect, useState } from 'react'
import { coupans } from '../MockData/Products';

function Checkout() {
  const [cartProduct, setCartProduct] = useState();
  const [coupanAmount, setCoupanAmount] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [couponPercenatge, setCouponPercentage] = useState(0);

  useEffect(() => {
    const cartproduct = JSON.parse(localStorage.getItem('product'));
    setCartProduct(cartproduct);
  }, [])

  const totalAmount = cartProduct && cartProduct.reduce((previousValue, currentValue) => {
    return Number(previousValue) + Number(currentValue.PRICE)
  }, 0)

  let total = totalAmount;

  const setCouponDetail = (c) => {
    total = ((totalAmount * c.value) / 100).toFixed(2)
    setCouponPercentage(c.value)
    setCoupanAmount(total)
  }

  const handleCoupanCode = (e) => {
    e.preventDefault()
    let isValid = false;
    if (coupanAmount > 0) {
      alert('Coupon already applied')
    } else {
      coupans.forEach(c => {
        if (totalAmount > c.minAmount && totalAmount < c?.maxAmount && couponCode === c.code) {
          setCouponDetail(c)
          isValid = true;
        } else if (totalAmount > c.minAmount && couponCode === c.code) {
          setCouponDetail(c)
          isValid = true;
        }
      })
      if (!isValid) {
        alert('INVALID COUPON CODE')
      }
    }
    setCouponCode('')
  }

  let finaAmount = (totalAmount - coupanAmount).toFixed(2);

  return (
    <div className="row">
      <div className="col-md-8">
        <div className="table-responsive checkout">
          <table className="table table-hover mt-5">
            <thead className="table-dark border">
              <tr>
                <th scope="col" className="text-white">Product Id</th>
                <th className="text-white text-center">Product Name</th>
                <th className="text-white text-end">Price (per month)</th>
              </tr>
            </thead>
            <tbody className="border-top-0 border">
              {cartProduct && cartProduct.map((product, index) => {
                return (
                  <tr key={index}>
                    <td className="fw-bold">{product.PRODUCT_ID}</td>
                    <td align="center">{product.PRODUCT_NAME}</td>
                    <td align="center">${product.PRICE}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
      <div className="col-md-4">
        <div className="table-responsive checkout">
          <table className="table table-hover mt-5">
            <thead className="table-dark border">
              <tr>
                <th colSpan="2" className="text-white"><h5>Cart Totals</h5></th>
              </tr>
            </thead>
            <tbody className="border">
              <tr>
                <td className="fw-bold">Sub Total</td>
                <td className="fw-bold" align="right">${totalAmount}</td>
              </tr>
              <tr>
                <td className="fw-bold">Discount</td>
                <td className="fw-bold" align="right">${coupanAmount}({couponPercenatge}%)</td>
              </tr>
              <tr>
                <td>
                  <div className="input-group">
                    <input type="text" value={couponCode} className="form-control border-dark" placeholder='Enter coupon code' aria-describedby="button-addon2" onChange={(e) => { setCouponCode(e.target.value) }} />
                    <button className="btn btn-secondary" type="button" id="button-addon2" onClick={handleCoupanCode}>Apply Promo</button>
                  </div>
                </td>
              </tr>
              <tr className="table-dark border">
                <td className="fw-bold">Total</td>
                <td className="fw-bold" align="right">${finaAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Checkout