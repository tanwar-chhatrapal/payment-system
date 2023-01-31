import React, { useEffect, useState } from 'react';
import { AllProducts } from '../MockData/Products';

function Dashboard() {
  const [products, setProducts] = useState();

  useEffect(() => {
    setProducts(AllProducts)
  }, [])


  return (
    <div class="main">
    <div class="container-fluid px-5">
      <div class="row">
        <div class="col-md-12">
          <div class="table-responsive checkout">
            <table class="table table-hover mt-5">
              <thead class="table-dark border">
                <tr>
                  <th scope="col" class="text-white">Product Id</th>
                  <th class="text-white text-center">Product Name</th>
                  <th class="text-white text-center">Price (per month)</th>
                  <th class="text-white text-end"><span class="pe-4">Cart</span></th>
                </tr>
              </thead>
              <tbody class="border-top-0 border">
               {products && products.map((product, index) => {
                return (
                  <tr>
                  <td class="fw-bold">{product.PRODUCT_ID}</td>
                  <td align="center">{product.PRODUCT_NAME}</td>
                  <td align="center">{product.PRICE}</td>
                  <td align="right"><button class="btn btn-secondary">Add to cart</button></td>
                </tr>
                )
               })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}


export default Dashboard