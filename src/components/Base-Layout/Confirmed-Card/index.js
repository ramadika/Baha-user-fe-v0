// Dependencies
import React from 'react'
import { NavLink } from 'react-router-dom'
import { TiTickOutline } from 'react-icons/ti'
// Internals
import 'components/Base-Layout/Confirmed-Card/index.css'

export default function f() {
    return (
        <div>
            <div className="container">
                <div className="d-flex justify-content-center confirmed">
                    <h2 className="text-center">
                        <span><TiTickOutline size={150} className="tick-confirmed"/></span>
                        <span className="brand-confirmed">Arnawa</span>
                        <span>Thank you</span>
                        <span className="message-confirmed">We are started on your order right away and you will receive an order confirmation email shortly to JohnNewman@gmail.com. 
                            In the meantime, explore the latest fashion and get inspired by new trends, 
                            just head over to <NavLink to="/shop">Arnawa</NavLink></span>
                    </h2>
                </div>
            </div>
        </div>
    )
}
