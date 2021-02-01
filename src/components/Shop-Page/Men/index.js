// Dependencies
import React, { Component } from 'react'
import NavBar from 'components/Base-Layout/Nav-Bar'
import Header from 'components/Base-Layout/Header'
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Shop-Page/Men/index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <div className="container">
                    <h2 className="text-center">Men</h2>
                </div>
                <Footer />
            </div>
        )
    }
}
