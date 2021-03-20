// Dependencies
import React from 'react'
import { HiShoppingCart } from 'react-icons/hi' 
import { NavLink } from 'react-router-dom'
// Internals
import 'components/Base-Layout/Header/index.css'

export default function index() {
    return (
        <div>
            <div className="container">
                <div className="header row my-3">
                    <div className="col d-flex justify-content-start align-self-center">
                        <NavLink to="/login">LOG IN / REGISTER</NavLink>
                    </div>
                    <div className="col d-flex justify-content-center align-self-center">
                        <NavLink to="/"><h1 className="text-center">Arnawa</h1></NavLink>
                    </div>
                    <div className="col d-flex justify-content-end align-self-center">
                        <NavLink to="/cart"><HiShoppingCart size={30} className="icon-header"></HiShoppingCart></NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}
