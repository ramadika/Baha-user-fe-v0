// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import NavBar from 'components/Base-Layout/Nav-Bar'
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Confirmation-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container confirm">
                    <h6 className="text-center">Arnawa</h6>
                    <h2 className="text-center">Payment Confirmation</h2>
                    <hr />
                    <div className="row d-flex justify-content-center">
                        <form className="form-confirm mt-2">
                            <div className="form-group row">
                                <label className="col align-self-center">Order No</label>
                                <input type="text" value="" id="orderNo" className= "col form-control text-center"></input>
                            </div>
                            <div className="form-group row">
                                <label className="col align-self-center">Email</label>
                                <input type="email" value="" id="email" className= "col form-control text-center"></input>
                            </div>
                            <div className="form-group row">
                                <label className="col align-self-center">Destination Bank</label>
                                <input type="text" value="" id="name" className= "col form-control text-center"></input>
                            </div>
                            <div className="form-group row">
                                <label className="col align-self-center">Payment Amount</label>
                                <select className="form-control">
                                    <option selected value="bca">Bank BCA</option>
                                    <option value="mandiri">Bank Mandiri</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <label className="col align-self-center">Upload File</label>
                                <input type="file" value="" id="uploadConfrim" className="col"></input>
                            </div>
                            {/* <button type="submit" className="btn">Confirm Payment</button> */}
                            <button type="submit" className="btn d-flex justify-content-center"><NavLink to="/confirmed" className="aPayment">Confirm Payment</NavLink></button>
                        </form>
                    </div>
                    <div className="row img-confirm"></div>
                </div>
                <Footer />
            </div>
        )
    }
}
