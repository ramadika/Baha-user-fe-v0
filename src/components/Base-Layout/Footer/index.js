// Dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaTwitter, FaPinterest } from 'react-icons/fa'
// Internals
import 'components/Base-Layout/Footer/index.css'

export default function index() {
    return (
        <div>
            <footer className="page-footer font-small indigo">
                <div className="container foot-custom">
                    <h2>Product</h2>
                    <div className="row text-center d-flex justify-content-center py-4">
                    <div className="col-md-2 mb-0">
                        <h6 className="text-uppercase font-weight-bold">
                        <NavLink to="/">About Us</NavLink>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-0">
                        <h6 className="text-uppercase font-weight-bold">
                        <NavLink to="/">Terms of Use</NavLink>
                        </h6>
                    </div>
                    <div className="col-md-2 mb-0">
                        <h6 className="text-uppercase font-weight-bold">
                        <NavLink to="/">Contact</NavLink>
                        </h6>
                    </div>
                    </div>
                    <div className="row justify-content-center ">
                    <NavLink className="NavLink" to="/">
                        <FaFacebookF size={25} className="mr-5"></FaFacebookF>
                    </NavLink>
                    <NavLink className="NavLink" to="/">
                        <FaTwitter size={25} className="mr-5"></FaTwitter>
                    </NavLink>
                    <NavLink className="NavLink" to="/">
                        <FaInstagram size={25} className="mr-5"></FaInstagram>
                    </NavLink>
                    <NavLink className="NavLink" to="/">
                        <FaPinterest size={25} className="mr-5"></FaPinterest>
                    </NavLink>
                    </div>
                </div>
        
                <div className="footer-copyright text-center py-3 mt-3">© 2020 Arnawa</div>
            </footer>
        </div>
    )
}
