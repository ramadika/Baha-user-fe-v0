// Dependencies
import React from 'react'
import NavBar from 'components/Base-Layout/Nav-Bar'
import { HiShoppingCart } from 'react-icons/hi'
// Internals
import 'components/Base-Layout/Header/index.css'

export default function index() {
    return (
        <div>
            <NavBar />
            <div className="container mt-4">
                <div className="row">
                    <div className="col login mt-3">
                        LOG IN / REGISTER
                    </div>
                    <div className="col">
                        <h1 className="title text-center">Mavelin</h1>
                    </div>
                    <div className="col mt-3">
                        <HiShoppingCart className="cart" size={30}></HiShoppingCart>
                    </div>
                </div>
            </div>
        </div>
    )
}
