// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Checkout-Page/Shipping/index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <div className="container shipping">
                    <h6 className="text-center">Arnawa</h6>
                    <h2 className="text-center">Shipping</h2>
                    <hr />
                    <form className="form-shipping mt-2">
                        <div className="form-group row">
                            <label className="col align-self-center">Name</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col align-self-center">Province</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col align-self-center">City</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col align-self-center">Address</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col align-self-center">ZIP Code</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col align-self-center">Phone Number</label>
                            <input type="text" value="" id="phoneNumber" className= "col form-control text-center"></input>
                        </div>
                        <div className="d-flex justify-content-center">
                            {/* <button type="submit" className="btn">Save</button> */}
                            <button type="submit" className="btn"><NavLink to="/checkOut" className="aEditShip">Save</NavLink></button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        )
    }
}
