// Dependencies
import React, { Component } from 'react'
import NavBar from 'components/Base-Layout/Nav-Bar'
import Footer from 'components/Base-Layout/Footer'
import { GoLocation } from "react-icons/go";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoIosCall } from "react-icons/io";
// Internals
import 'components/Contact-Page/index.css'
import imgItem2 from "assets/images/photo-1535902267401-2a253d753d1a.jpg";

export default class index extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="container contact text-center">
                    <div className="row">
                        <div className="col">
                            <img src={imgItem2} alt="" className=""></img>
                        </div>
                        <div className="col">
                            <h6>Arnawa</h6>
                            <h3>Contact Information</h3>
                            <hr />
                            <GoLocation className="icon-contact"></GoLocation>
                            <h4>
                                <span><b>Our Office</b></span>
                                <span>
                                    <a target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/?q=-6.958070,107.639450">
                                        Buah Batu JL. Terusan Buah Batu 102
                                    </a>
                                </span>
                            </h4>
                            <HiOutlineMailOpen className="icon-contact"></HiOutlineMailOpen>
                            <h4>
                                <span><b>Mail</b></span>
                                <span>product@baha.com</span>
                            </h4>
                            <IoIosCall className="icon-contact"></IoIosCall>
                            <h4>
                                <span><b>Call Center</b></span>
                                <span>+621 789 567</span>
                            </h4>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
