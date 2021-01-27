// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/Checkout-Page/Summary/index.css'

export default class index extends Component {
    render() {
      return (
        <div className="summary">
          <h5>Order Summary</h5>
          <div className="row">
            <div className="col ml-3">
              <h6>Subtotal</h6>
            </div>
            <div className="col d-flex justify-content-end">
              <h6>10000 IDR</h6>
            </div>
          </div>
          <div className="row">
            <div className="col ml-3">
              <h6>Shipping</h6>
            </div>
            <div className="col d-flex justify-content-end">
              <h6>10000 IDR</h6>
            </div>
          </div>
          <div className="row">
            <div className="col ml-3">
              <h6>Tax</h6>
            </div>
            <div className="col d-flex justify-content-end">
              <h6>10000 IDR</h6>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col ml-3">
              <h6>Order Total</h6>
            </div>
            <div className="col d-flex justify-content-end">
              <h6>30000 IDR</h6>
            </div>
          </div>
          <div className="d-flex justify-content-center">
            <button type="submit" className="btn mb-5">PLACE ORDER</button>
          </div>
        </div>
      )
    }
}
