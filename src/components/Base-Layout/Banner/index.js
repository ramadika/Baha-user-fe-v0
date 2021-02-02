// Dependencies
import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import CarouselItem from "react-bootstrap/CarouselItem";
// Internals
import 'components/Base-Layout/Banner/index.css'
import FirstSlider from "assets/images/mike-petrucci-c9FQyqIECds-unsplash.jpg";
import SecondSlider from "assets/images/artem-beliaikin-pPzQP35zh4o-unsplash.jpg";
import ThirdSlider from "assets/images/markus-spiske-5UJbKYUjFCk-unsplash.jpg";


export default function index() {
    return (
        <div className="banner">
            <Carousel controls={false}>
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
        </div>
    )
}
