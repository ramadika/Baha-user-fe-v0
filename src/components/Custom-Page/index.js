// Dependencies
import React, { Component } from 'react'
import NavBar from 'components/Base-Layout/Nav-Bar'
import Footer from 'components/Base-Layout/Footer'
import ProductCustom from 'components/Custom-Page/ProductCustom'
// Internals
import 'components/Custom-Page/index.css'
import ImgCard1 from "assets/images/alp-duran-SwMgX1d0Kmw-unsplash_-removebg-preview.png";

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container d-flex justify-content-center custom">
                    <div className="col align-self-center">
                        <img src={ImgCard1} alt="imgFitting"></img>
                    </div>
                    <div className="col text-center product-custom">
                        <h6>Arnawa</h6>
                        <h2>Make Your Own Style</h2>
                        <hr />
                        <ProductCustom />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
