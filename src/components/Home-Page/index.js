// Dependencies
import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Home-Page/index.css'

export default class index extends Component {
    render() {
        return (
                <div className="home text-center">
                    <div className="container">
                        <div className="row">
                            <h2 className="text-center">Arnawa</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <h6>
                                Amet consectetur adipiscing elit pellentesque habitant morbi.
                                Fermentum et sollicitudin ac orci phasellus. Dolor sit amet
                                consectetur adipiscing elit duis. 
                            </h6>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <NavLink to="/shop">Shop</NavLink>
                        </div>
                    </div>
                    <Footer />
                </div>
        )
    }
}
