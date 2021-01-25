// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/Checkout-Page/Review/index.css'
import imgItem1 from "assets/images/he-s-her-lobster-nKK32qJheBY-unsplash.jpg";
import imgItem2 from "assets/images/sirio-HXaMrVsIrVI-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div className="sumOrder-custom mr-5">
              <h5 className="text-left mt-3 mr-5 ml-3">Order Summary</h5>
              <table className="mr-5 text-left container table noBorder-custom">
                <tr>
                  <th scope="col">2 items in cart</th>
                </tr>
                <tr>
                  <th scope="col">
                    <img src={imgItem1} alt="item1" width="40"></img>
                  </th>
                  <th scope="col">Hand Bag</th>
                  <th scope="col">10000 IDR</th>
                </tr>
                <tr>
                  <th scope="col">
                    <img src={imgItem2} alt="item1" width="40"></img>
                  </th>
                  <th scope="col">
                    Neklace
                  </th>
                  <th scope="col">720000 IDR</th>
                </tr>
              </table>
            </div>
        )
    }
}
