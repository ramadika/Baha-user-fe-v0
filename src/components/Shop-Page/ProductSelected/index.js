// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
import Header from 'components/Base-Layout/Header'
import NavBar from 'components/Base-Layout/Nav-Bar'
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Shop-Page/ProductSelected/index.css'
import { DataContext } from 'components/context'

export default class index extends Component {
    static contextType = DataContext;
    state = {
        product: []
    }

    getProduct = () =>{
        if(this.props.match.params.id){
            const res = this.context.products;
            const data = res.filter(item =>{
                return item._id === this.props.match.params.id
            })
            this.setState({product: data})
        }
    };

    componentDidMount(){
        this.getProduct();
    }

    render() {
        const {product} = this.state;
        const {addCart} = this.context;
        return (
            <div>
                <NavBar />
                    <Header />
                    <div className="d-flex justify-content-center">
                        <NavLink to="/men" className="btn a-Category">Men</NavLink>
                        <NavLink to="/women" className="btn a-Category">Women</NavLink>
                        <NavLink to="/accessories" className="btn a-Category">Accessories</NavLink>
                    </div>
                {
                    product.map(item =>(
                        <div className="details" key={item._id}>
                            <img src={item.src} alt=""/>
                            <div className="box-details">
                                <div className="row">
                                    <h2>{item.title}</h2>
                                    <span>${item.price}</span>
                                </div>
                                <p>{item.description}</p>
                                <p>{item.content}</p>
                                <NavLink to="/cart" className="cart" onClick={() => addCart(item._id)}>
                                    Add to cart
                                </NavLink>
                            </div>
                        </div>
                    ))
                }
                <Footer />
            </div>
        )
    }
}
