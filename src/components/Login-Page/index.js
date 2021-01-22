// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// Internals
import 'components/Login-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div className="container login">
                <div className="row">
                    <h2>Sign In</h2>
                </div>
                <form className="form-login">
                    <input type="text" value="" id="username" placeholder="Username/Email" className="form-control text-center"></input>
                    <input type="password" value="" id="password" placeholder="Password" className="form-control text-center"></input>
                    {/* <button type="submit" className="btn btn-success">Sign In</button> */}
                    <button type="submit" className="btn"><NavLink to="/home">Sign In</NavLink></button>
                </form>
                <h4 className="mt-5 ml-5"> You are new?{" "} <NavLink to="/createAccount"><b>Create New</b></NavLink></h4>
            </div>
        )
    }
}
