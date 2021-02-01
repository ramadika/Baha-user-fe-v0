// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import NavBar from 'components/Base-Layout/Nav-Bar'
import Footer from 'components/Base-Layout/Footer'
import Product from 'components/Shop-Page/Product'
// Internals
import 'components/NewArrival-Page/index.css'
import ImgCard1 from "assets/images/brandon-erlinger-ford-2wSe9hhfpnM-unsplash-removebg-preview.png";
import ImgCard2 from "assets/images/marie-michele-bouchard-WIAWEPBuHa0-unsplash-removebg-preview.png";
import ImgCard3 from "assets/images/brandon-erlinger-ford-xmrL-yps7gI-unsplash-removebg-preview.png";

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container newArrival">
                    <div className="row d-flex justify-content-center head-newArrival">
                        <div className="col align-self-center">
                            <h4>
                                <span className="motto-newArrival">Whitesmoke</span>
                                <span className="description-newArrival">Lorem Ipsum is simply dummy text of the spring and typesetting
                                    industry. Lorem Ipsum has been the industry's standard dummy text
                                    ever since the 1500s.</span>
                            </h4>
                            <NavLink className="btn" to="/selectProduct/1">Detail</NavLink>
                        </div>
                        <div className="col d-flex justify-content-center">
                            <img src={ImgCard1} alt="imgNew"></img>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center border-newArrival">
                        <h2>enlighten you</h2>
                    </div>
                    <div className="row body-newArrival">
                        <div className="col">
                            <div className="d-flex justify-content-center row">
                                <div className="col d-flex justify-content-center">
                                    <img src={ImgCard2} alt="imgNew"></img>
                                </div>
                                <div className="col align-self-center">
                                    <h4>
                                        <span className="motto-newArrival">Niceblack</span>
                                        <span className="description-newArrival">Lorem Ipsum is simply dummy text of the spring and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever since the 1500s.</span>
                                    </h4>
                                    <NavLink className="btn" to="/selectProduct/2">Detail</NavLink>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="row">
                                <div className="col d-flex justify-content-center">
                                    <img src={ImgCard3} alt="imgNew"></img>
                                </div>
                                <div className="col align-self-center">
                                    <h4>
                                        <span className="motto-newArrival">Color - Me</span>
                                        <span className="description-newArrival">Lorem Ipsum is simply dummy text of the spring and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text
                                            ever since the 1500s.</span>
                                    </h4>
                                    <NavLink className="btn" to="/selectProduct/3">Detail</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Product />
                <Footer />
            </div>
        )
    }
}
