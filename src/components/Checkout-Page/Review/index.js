// Dependencies
import React, { Component } from 'react'
// Internals
import 'components/Checkout-Page/Review/index.css'
import imgItem1 from "assets/images/he-s-her-lobster-nKK32qJheBY-unsplash.jpg";
import imgItem2 from "assets/images/sirio-HXaMrVsIrVI-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div className="review">
              <h5>Review Item</h5>
              <h6 className="ml-3">2 items in cart</h6>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <tr>
                    <th scope="row">
                      <img src={imgItem1} alt="item1" width="55"></img>
                    </th>
                    <td>1</td>
                    <td>Hand Bag</td>
                    <td>10000 IDR</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <img src={imgItem2} alt="item2" width="55"></img>
                    </th>
                    <td>1</td>
                    <td>Neklace</td>
                    <td>720000 IDR</td>
                  </tr>
                </table>
              </div>
            </div>
        )
    }
}
