// Dependencies
import React from 'react'
// import { NavLink } from 'react-router-dom'
// import { FaFacebook } from 'react-icons/fa'
// import { AiFillTwitterCircle, AiFillInstagram } from 'react-icons/ai'
// import { GrPinterest } from 'react-icons/gr'
// Internals
import 'components/Base-Layout/Footer/index.css'

export default function index() {
    return (
        <div>
            <footer className="footer font-small indigo">
                <div className="container text-center">
                    {/* <h2>Arnawa</h2> */}
                    {/* <div className="row justify-content-center mt-3">
                        <NavLink className="NavLink" to="/">
                            <FaFacebook size={25} className="mr-5"></FaFacebook>
                        </NavLink>
                        <NavLink className="NavLink" to="/">
                            <AiFillTwitterCircle size={30} className="mr-5"></AiFillTwitterCircle>
                        </NavLink>
                        <NavLink className="NavLink" to="/">
                            <AiFillInstagram size={30} className="mr-5"></AiFillInstagram>
                        </NavLink>
                        <NavLink className="NavLink" to="/">
                            <GrPinterest size={25} className=""></GrPinterest>
                        </NavLink>
                    </div> */}
                    <h5>© 2020 Arnawa All rights reserved</h5>
                </div>
            </footer>
        </div>
    )
}
