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
                            <label className="col">Name</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col">Province</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col">City</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col">Address</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col">ZIP Code</label>
                            <input type="text" value="" id="address" className= "col form-control text-center"></input>
                        </div>
                        <div className="form-group row">
                            <label className="col">Phone Number</label>
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
