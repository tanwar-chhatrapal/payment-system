import React, { useEffect, useState } from 'react'

function Checkout() {
  const [cartProduct, setCartProduct] = useState();
  const [coupanAmount, setCoupanAmount] = useState(0);
  const coupans = [{ code: 'PLSD123', value: 10 }, { code: 'PLSD456', value: 15 }];

  useEffect(() => {
    const cartproduct = JSON.parse(localStorage.getItem('product'));
    setCartProduct(cartproduct);
  }, [])

  const totalAmount = cartProduct && cartProduct.reduce((previousValue, currentValue) => {
    return Number(previousValue) + Number(currentValue.PRICE)
  }, 0)

  let coupanCode = '';
  let total = totalAmount;
  if (totalAmount > 5000 && totalAmount < 10000) coupanCode = coupans[0].code;
  if (totalAmount > 10000) coupanCode = coupans[1].code;

  const handleCoupanCode = (e) => {
    e.preventDefault()
    coupans.forEach(c => {
      if (c.code === coupanCode) total = ((totalAmount * c.value) / 100).toFixed(2)
    })
    setCoupanAmount(total)
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
              {coupanCode.length > 0 ?
                (<tr>
                  {coupanAmount === 0 ?
                    (
                      <td>
                        <div className="input-group w-75">
                          <input type="text" className="form-control border-dark" placeholder={coupanCode} aria-describedby="button-addon2" />
                          <button className="btn btn-secondary" type="button" id="button-addon2" onClick={handleCoupanCode}>Apply Promo</button>
                        </div>
                      </td>
                    )
                    :
                    <td className="fw-bold">Discount</td>
                  }
                  <td className="fw-bold" align="right">${coupanAmount}</td>
                </tr>
                )
                :
                null
              }
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