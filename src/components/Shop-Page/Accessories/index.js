// Dependencies
import React, { Component } from 'react'
import NavBar from 'components/Base-Layout/Nav-Bar'
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Shop-Page/Accessories/index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <h2 className="text-center">Accessories</h2>
                </div>
                <Footer />
            </div>
        )
    }
}