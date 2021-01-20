// Dependencies
import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
// Internals
import 'components/Base-Layout/Nav-Bar/index.css'

export default function index() {
    return (
        <div>
            <Navbar className="justify-content-center Navbar" bg="light" variant="light">
                <Nav className="mr-5 Nav">
                    <NavLink className="NavLink" to="/newArrival">
                        NEW ARRIVAL
                    </NavLink>
                    <NavLink className="NavLink" to="/shop">
                        SHOP
                    </NavLink>
                    <NavLink className="NavLink" to="/sale">
                        SALE
                    </NavLink>
                    <NavLink className="NavLink" to="/customYou">
                        CUSTOMIZE
                    </NavLink>
                    <NavLink className="NavLink" to="/Confirmation">
                        CONFIRMATION
                    </NavLink>
                    <NavLink className="NavLink" to="/about">
                        ABOUT
                    </NavLink>
                    <NavLink className="NavLink" to="/contact">
                        CONTACT
                    </NavLink>
                </Nav>
            </Navbar>
        </div>
    )
}
