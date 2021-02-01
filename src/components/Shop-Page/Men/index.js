// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import NavBar from 'components/Base-Layout/Nav-Bar'
import Header from 'components/Base-Layout/Header'
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Shop-Page/Men/index.css'
import { DataContext } from 'components/context'

export default class index extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div>
                <NavBar />
                <div className="header-men">
                    <Header />
                </div>
                <div className="container mt-3">
                    <div className="product">
                    {
                        products.map(product =>(
                            <div className="card-product" key={product._id}>
                                <NavLink to={`/selectProduct/${product._id}`}>
                                    <img src={product.src} alt=""/>
                                </NavLink>
                                <div className="content">
                                    <h3>
                                        <NavLink to={`/selectProduct/${product._id}`}>{product.title}</NavLink>
                                    </h3>
                                    <span>${product.price}</span>
                                    <p>{product.description}</p>
                                    <button onClick={()=> addCart(product._id)}>Add to cart</button>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
