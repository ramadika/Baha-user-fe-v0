// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// Internals
import 'components/Custom-Page/ProductCustom/index.css'
import { DataContext } from 'components/context'

export default class index extends Component {

    static contextType = DataContext;

    render() {
        const {productsCustom,addCart} = this.context;
        return (
            <div className="productCustom mb-1">
               {
                   productsCustom.map(product =>(
                       <div className="card-productCustom" key={product._id}>
                           <NavLink to={`/selectProduct/${product._id}`}>
                               <img src={product.src} alt=""/>
                           </NavLink>
                           <div className="contentCustom">
                               <h3 className="text-center"> 
                                    <NavLink to={`/selectProduct/${product._id}`}>{product.title}</NavLink>
                                    <span> - ${product.price}</span>
                               </h3>
                               {/* <span>${product.price}</span> */}
                               {/* <p>{product.description}</p> */}
                               <button onClick={()=> addCart(product._id)}>Add to cart</button>
                           </div>
                       </div>
                   ))
               }
            </div>
        )
    }
}
