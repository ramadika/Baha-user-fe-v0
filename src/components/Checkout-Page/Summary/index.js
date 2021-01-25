// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/Checkout-Page/Summary/index.css'

export default class index extends Component {
    render() {
        return (
            <div className="summary mt-3">
              <h5 className="text-left ml-3 mt-3">Order Summary</h5>
              <table className="container table noBorder-custom">
                <tr>
                  <th scope="col">Subtotal</th>
                  <th scope="col">10000 IDR</th>
                </tr>
                <tr>
                  <th scope="col">Shipping</th>
                  <th scope="col">10000 IDR</th>
                </tr>
                <tr>
                  <th scope="col">Tax</th>
                  <th scope="col">10000 IDR</th>
                </tr>
              </table>
              <hr className="hrCheck-custom mx-3"></hr>
              <table className="container table noBorder-custom orderTotal-custom">
                <tr className="text-center">
                  <th scope="col">Order Total</th>
                  <th scope="col">10000 IDR</th>
                </tr>
              </table>
              <input
                className="mb-3 btnConf-custom"
                type="button"
                value="PLACE ORDER"
              ></input>
            </div>
        )
    }
}
