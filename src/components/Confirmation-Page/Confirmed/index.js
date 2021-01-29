// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from 'components/Base-Layout/Footer'
import { TiTickOutline } from 'react-icons/ti'
// Internals
import 'components/Confirmation-Page/Confirmed/index.css'
import imgItem1 from "assets/images/he-s-her-lobster-nKK32qJheBY-unsplash.jpg";
import imgItem2 from "assets/images/sirio-HXaMrVsIrVI-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="container d-flex justify-content-center confirmed">
                    <h2 className="text-center">
                        <span><TiTickOutline size={150} className="tick-confirmed"/></span>
                        <span className="brand-confirmed">Arnawa</span>
                        <span>Thank you</span>
                        <span className="message-confirmed">We are started on your order right away and you will receive an order. 
                            In the meantime, explore the latest fashion and get inspired by new trends, 
                            just head over to <NavLink to="/shop">Arnawa</NavLink></span>
                    </h2>
                </div>
                <div className="container d-flex justify-content-center summary-confirmed">
                    <div className="row">
                        <div className="col mr-5">
                            <h4>Order Summary - 17834509</h4>
                            <div className="table-responsive">
                                <table className="table ">
                                    <tr>
                                        <th scope="row">
                                            <img src={imgItem1} alt="item1" width="75"></img>
                                        </th>
                                        <td>1</td>
                                        <td>Hand Bag</td>
                                        <td>10000 IDR</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">
                                            <img src={imgItem2} alt="item2" width="75"></img>
                                        </th>
                                        <td>1</td>
                                        <td>Neklace</td>
                                        <td>720000 IDR</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <div className="col ml-5">
                            <h4>Order Details</h4>

                            <h5>Shipping Address</h5>
                            <h6 className="ml-3">John Newman</h6>
                            <h6 className="ml-3">Sacramento, CA 942032</h6>
                            <hr />

                            <h5>Payment Method</h5>
                            <input type="radio" value="option1" checked={true} className="ml-3"/>
                            <label className="rdCheck-custom ml-3">Tranfer Bank</label>
                            <h6 className="ml-3">a.n Samsons Jackson</h6>
                            <h6 className="ml-3">BANK FIRST INCOME</h6>
                            <h6 className="ml-3">100 456 8932</h6>
                            <hr />
                            
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
