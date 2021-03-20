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
            <Navbar className="Navbar" bg="light" variant="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-center" id="basic-navbar-nav" >
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
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}
