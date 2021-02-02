// Dependencies
import React, { Component } from 'react'
import NavBar from 'components/Base-Layout/Nav-Bar'
import Header from 'components/Base-Layout/Header'
import Banner from 'components/Base-Layout/Banner'
import Footer from 'components/Base-Layout/Footer'
import Product from 'components/Shop-Page/Product'
// Internals
import 'components/Sale-Page/index.css'

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Header />
                <Banner />
                <div className="container sale">
                    <div className="d-flex justify-content-center border-sale">
                        <h2>Up to 50%</h2>
                    </div>
                </div>
                <Product />
                <Footer />
            </div>
        )
    }
}
