// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// Internals
import 'components/CreateAccount-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div className="container signUp">
            <div className="row">
                <h2>Create Account</h2>
            </div>
            <form className="form-signUp">
                <label>Email</label>
                <input type="email" value="" id="email" placeholder="Email" className="form-control text-center"></input>
                <label>Username</label>
                <input type="text" value="" id="username" placeholder="Username" className="form-control text-center"></input>
                <label>Password</label>
                <input type="password" value="" id="password" placeholder="Password" className="form-control text-center"></input>
                <label>Name</label>
                <input type="text" value="" id="name" placeholder="Name" className="form-control text-center"></input>
                <label>Address</label>
                <input type="text" value="" id="address" placeholder="Address" className="form-control text-center"></input>
                <label>Phone Number</label>
                <input type="text" value="" id="phoneNumber" placeholder="Phone Number" className="form-control text-center"></input>
                {/* <button type="submit" className="btn">Create Account</button> */}
                <button type="submit" className="btn"><NavLink to="/shop">Create Account</NavLink></button>
            </form>
            </div>
        )
    }
}
