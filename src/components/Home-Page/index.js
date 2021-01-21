// Dependencies
import React, { Component } from 'react'
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
import Footer from 'components/Base-Layout/Footer'
// Internals
import 'components/Home-Page/index.css'
import FirstSlider from "assets/images/freestocks-_3Q3tsJ01nc-unsplash.jpg";
import SecondSlider from "assets/images/clark-street-mercantile-qnKhZJPKFD8-unsplash.jpg";
import ThirdSlider from "assets/images/parker-burchfield-tvG4WvjgsEY-unsplash.jpg";

export default class index extends Component {
    render() {
        return (
            <div className="home text-center">
                <h2>Arnawa</h2>
                <Carousel className="mt-3 banner" controls={false}>
                    <CarouselItem>
                        <img
                        className="d-block img-fluid img-carousel"
                        src={FirstSlider}
                        alt="First slide"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img
                        className="d-block img-fluid img-carousel"
                        src={SecondSlider}
                        alt="Third slide"
                        />
                    </CarouselItem>
                    <CarouselItem>
                        <img
                        className="d-block img-fluid img-carousel"
                        src={ThirdSlider}
                        alt="Third slide"
                        />
                    </CarouselItem>
                </Carousel>
                <Footer />
            </div>
        )
    }
}
