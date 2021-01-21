// Dependencies
import React from 'react'
import NavBar from 'components/Base-Layout/Nav-Bar'
import { HiShoppingCart } from 'react-icons/hi'
import { NavLink } from 'react-router-dom'
// Internals
import 'components/Base-Layout/Header/index.css'

export default function index() {
    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <div className="header row mt-3">
                    <div className="col d-flex justify-content-start align-self-center">
                        <NavLink to="/">LOG IN / REGISTER</NavLink>
                    </div>
                    <div className="col">
                        <h1 className="text-center">Arnawa</h1>
                    </div>
                    <div className="col d-flex justify-content-end align-self-center">
                        <NavLink to="/cart"><HiShoppingCart className="cart" size={30}></HiShoppingCart></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
