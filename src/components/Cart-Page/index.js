// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// import NavBar from 'components/Base-Layout/Nav-Bar'
import Footer from 'components/Base-Layout/Footer'
import { AiOutlineShoppingCart } from 'react-icons/ai'
// Internals
import 'components/Cart-Page/index.css'
import imgItem1 from "assets/images/he-s-her-lobster-nKK32qJheBY-unsplash.jpg";
import imgItem2 from "assets/images/sirio-HXaMrVsIrVI-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div className="bigCart">
                {/* <NavBar /> */}
                <div className="container cart">
                    <div className="row d-flex justify-content-center">
                        <h2>Shopping Cart</h2>
                    </div> 
                    <hr />
                    <div className="table-responsive">
                        <table className="table table-borderless">
                        <tr>
                            <th scope="row">
                            <img src={imgItem1} alt="item1" width="65"></img>
                            </th>
                            <td>1</td>
                            <td>Hand Bag</td>
                            <td>10000 IDR</td>
                        </tr>
                        <tr>
                            <th scope="row">
                            <img src={imgItem2} alt="item2" width="65"></img>
                            </th>
                            <td>1</td>
                            <td>Neklace</td>
                            <td>720000 IDR</td>
                        </tr>
                        </table>
                    </div>
                    <div className="d-flex justify-content-center">
                        {/* <button type="submit" className="btn mb-5"><AiOutlineShoppingCart className="mr-2" /> Checkout</button> */}
                        <button type="submit" className="btn mb-3"><NavLink to="/checkOut" className="aCheck d-flex align-items-center"><AiOutlineShoppingCart className="mr-2" /> Checkout</NavLink></button>
                    </div>
                    <div className="d-flex justify-content-center">
                        <NavLink to="/shop">&lt;&lt; Back to Shopping</NavLink>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
