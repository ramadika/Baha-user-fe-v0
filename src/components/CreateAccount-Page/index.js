// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import { IoMdArrowRoundBack } from 'react-icons/io'
// Internals
import 'components/CreateAccount-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div className="container signUp">
                <div className="row">
                    <h6>Arnawa</h6>
                </div>
                <div className="row">
                    <h2>Create Account</h2>
                </div>
                <hr />
                <form className="form-signUp mt-2">
                    <div className="form-group row">
                        <label className="col">Email</label>
                        <input type="email" value="" id="email" className= "col form-control text-center"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col">Username</label>
                        <input type="text" value="" id="username" className= "col form-control text-center"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col">Password</label>
                        <input type="password" value="" id="password" className= "col form-control text-center"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col">Name</label>
                        <input type="text" value="" id="name" className= "col form-control text-center"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col">Address</label>
                        <input type="text" value="" id="address" className= "col form-control text-center"></input>
                    </div>
                    <div className="form-group row">
                        <label className="col">Phone Number</label>
                        <input type="text" value="" id="phoneNumber" className= "col form-control text-center"></input>
                    </div>
                    {/* <button type="submit" className="btn">Create Account</button> */}
                    <button type="submit" className="btn"><NavLink to="/login" className="aCreate">Create Account</NavLink></button>
                </form>
                <NavLink to="/shop"><IoMdArrowRoundBack />Back to Shopping</NavLink>
            </div>
        )
    }
}
