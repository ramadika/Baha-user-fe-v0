// Dependencies
import React, { Component } from 'react'
import NavBar from 'components/Base-Layout/Nav-Bar'
import Header from 'components/Base-Layout/Header'
import Banner from 'components/Base-Layout/Banner'
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Shop-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <Banner />
                <div className="container shop">
                    <h2>Shop</h2>
                </div>
                <Footer />
            </div>
        )
    }
}
