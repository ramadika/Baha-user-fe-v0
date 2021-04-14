// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Footer from 'components/Base-Layout/Footer'
import Summary from 'components/Checkout-Page/Summary'
import Review from 'components/Checkout-Page/Review'
// Internals
import 'components/Checkout-Page/index.css'
import imgAds from "assets/images/artem-beliaikin-pPzQP35zh4o-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="container checkout">
                    <h6 className="text-center">Arnawa</h6>
                    <h2 className="text-center">Checkout</h2>
                    <hr />
                    <div className="d-flex justify-content-start mb-4">
                        <NavLink to="/shop">&lt;&lt; Back to Shopping</NavLink>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h5 className="ship-checkout">Shipping Address</h5>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <NavLink to="/shipping">Edit</NavLink>
                                </div>
                            </div>
                            <h6 className="ml-3">John Newman</h6>
                            <h6 className="ml-3">Sacramento, CA 942032</h6>
                            <hr />
                            <h5>Payment Method</h5>
                            <form className=" d-flex justify-content-start">
                                <input type="radio" value="option1" checked={true} className="mt-1 ml-3"/>
                                <label className="align-self-center ml-3">Tranfer Bank</label>
                            </form>
                            <h6 className="ml-3">a.n Samsons Jackson</h6>
                            <h6 className="ml-3">BANK FIRST INCOME</h6>
                            <h6 className="ml-3">100 456 8932</h6>
                            <hr />
                        </div>
                        <div className="col">
                            <Summary />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Review />
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img src={imgAds} alt="item1" width="auto" height="320"></img>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
