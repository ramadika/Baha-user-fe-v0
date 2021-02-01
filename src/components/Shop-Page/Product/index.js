// Dependencies
import React, { Component } from 'react'
import { NavLink } from "react-router-dom";
// Internals
import 'components/Shop-Page/Product/index.css'
import { DataContext } from 'components/context'

export default class index extends Component {

    static contextType = DataContext;

    render() {
        const {products,addCart} = this.context;
        return (
            <div className="product">
               {
                   products.map(product =>(
                       <div className="card" key={product._id}>
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
        )
    }
}
