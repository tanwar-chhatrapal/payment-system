import React from 'react'

function Checkout() {
  return (
        <div class="row">
          <div class="col-md-8">
            <div class="table-responsive checkout">
              <table class="table table-hover mt-5">
                <thead class="table-dark border">
                  <tr>
                    <th scope="col" class="text-white">Product Id</th>
                    <th class="text-white text-center">Product Name</th>
                    <th class="text-white text-end">Price (per month)</th>
                  </tr>
                </thead>
                <tbody class="border-top-0 border">
                  <tr>
                    <td class="fw-bold">Serram16</td>
                    <td align="center">16GB RAM SERVER</td>
                    <td align="right"><span class="me-2">$1025.50</span> <small class="position-absolute"><i class="fa fa-times" aria-hidden="true"></i>
                    </small></td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Serram32</td>
                    <td align="center">32GB RAM SERVER</td>
                    <td align="right"><span class="me-2">$2549.99</span> <small class="position-absolute"><i class="fa fa-times" aria-hidden="true"></i>
                    </small></td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Serram8</td>
                    <td align="center">8GB RAM SERVER</td>
                    <td align="right"><span class="me-2">$100</span> <small class="position-absolute"><i class="fa fa-times" aria-hidden="true"></i>
                    </small></td>
                  </tr>
                  <tr>
                    <td colspan="2">
                      <div class="input-group w-75">
                        <input type="text" class="form-control border-dark" placeholder="Coupon code" aria-describedby="button-addon2"/>
                          <button class="btn btn-secondary" type="button" id="button-addon2">Submit</button>
                      </div>
                    </td>
                    <td class="fw-bold" align="right">$10</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="col-md-4">
            <div class="table-responsive checkout">
              <table class="table table-hover mt-5">
                <thead class="table-dark border">
                  <tr>
                    <th colspan="2" class="text-white"><h5>Cart Totals</h5></th>
                  </tr>
                </thead>
                <tbody class="border">
                  <tr>
                    <td class="fw-bold">Discount</td>
                    <td class="fw-bold" align="right">$100</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Shipping</td>
                    <td class="fw-bold" align="right">$100</td>
                  </tr>
                  <tr>
                    <td class="fw-bold">Subtotal</td>
                    <td class="fw-bold" align="right">$500</td>
                  </tr>
                  <tr class="table-dark border">
                    <td class="fw-bold">Total</td>
                    <td class="fw-bold" align="right">$700</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  )
}

export default Checkout