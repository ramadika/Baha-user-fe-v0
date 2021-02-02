// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Card from "react-bootstrap/Card";
import NavBar from 'components/Base-Layout/Nav-Bar'
import Header from 'components/Base-Layout/Header'
import Footer from 'components/Base-Layout/Footer'
import Product from 'components/Shop-Page/Product'
// Internals
import 'components/Shop-Page/index.css'
import ImgCard1 from "assets/images/nimble-made-2yJFGX0tB-U-unsplash.jpg";
import ImgCard2 from "assets/images/markus-spiske-5UJbKYUjFCk-unsplash.jpg";
import ImgCard3 from "assets/images/nikola-duza-TSh8D8KutWU-unsplash.jpg";

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
                            <NavLink to="/newArrival">
                                <Card>
                                    <Card.Img variant="top" src={ImgCard1} />
                                    <Card.ImgOverlay>
                                        <Card.Title>New Arrival</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </NavLink>
                        </div>
                        <div className="col">
                            <NavLink to="/sale">
                                <Card>
                                    <Card.Img variant="top" src={ImgCard2} />
                                    <Card.ImgOverlay>
                                        <Card.Title>Sale</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </NavLink>
                        </div>
                        <div className="col">
                            <NavLink to="/customYou">
                                <Card>
                                    <Card.Img variant="top" src={ImgCard3} />
                                    <Card.ImgOverlay>
                                        <Card.Title>Make Your Own Style</Card.Title>
                                    </Card.ImgOverlay>
                                </Card>
                            </NavLink>
                        </div>
                    </div>
                </div>
                <Product />
                <Footer />
            </div>
        )
    }
}
