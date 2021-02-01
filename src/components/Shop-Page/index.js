// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardImg from "react-bootstrap/CardImg";
import NavBar from 'components/Base-Layout/Nav-Bar'
import Header from 'components/Base-Layout/Header'
import Footer from 'components/Base-Layout/Footer'
import Product from 'components/Shop-Page/Product'
// Internals
import 'components/Shop-Page/index.css'
import ImgCard1 from "assets/images/artem-beliaikin-pPzQP35zh4o-unsplash.jpg";
import ImgCard2 from "assets/images/markus-spiske-5UJbKYUjFCk-unsplash.jpg";
import ImgCard3 from "assets/images/markus-spiske-zVdAkU4s9lI-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="header-shop">
                    <Header />
                    <div className="d-flex justify-content-center">
                        <NavLink to="/men" className="btn aCategory">Men</NavLink>
                        <NavLink to="/women" className="btn aCategory">Women</NavLink>
                        <NavLink to="/accessories" className="btn aCategory">Accessories</NavLink>
                    </div>
                </div>
                <div className="container shop">
                    <div className="row d-flex justify-content-center mt-3">
                        <div className="col">
                            <Card>
                                <CardImg variant="top" src={ImgCard1} />
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <CardImg variant="top" src={ImgCard2} />
                            </Card>
                        </div>
                        <div className="col">
                            <Card>
                                <CardImg variant="top" src={ImgCard3} />
                            </Card>
                        </div>
                    </div>
                </div>
                <Product />
                <Footer />
            </div>
        )
    }
}
