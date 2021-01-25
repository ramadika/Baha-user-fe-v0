// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Footer from 'components/Base-Layout/Footer'
import Summary from 'components/Checkout-Page/Summary'
import Review from 'components/Checkout-Page/Review'
// Internals
import 'components/Checkout-Page/index.css'
// import imgItem1 from "assets/images/he-s-her-lobster-nKK32qJheBY-unsplash.jpg";
// import imgItem2 from "assets/images/sirio-HXaMrVsIrVI-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="container checkout">
                    <h6 className="text-center">Arnawa</h6>
                    <h2 className="text-center">Checkout</h2>
                    <hr />
                    <div className="row">
                        <div className="col">
                            <div className="row">
                                <div className="col">
                                    <h5>Shipping Address</h5>
                                </div>
                                <div className="col d-flex justify-content-end">
                                    <NavLink to="/">Edit</NavLink>
                                </div>
                            </div>
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
                        <div className="col d-flex justify-content-end">
                            <Review />
                        </div>
                    </div>
                    <div className="row">
                        <Summary />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
