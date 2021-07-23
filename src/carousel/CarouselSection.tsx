import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'
import Slider from './sliders/Slider'

const CarouselSection = (): JSX.Element => {
    return (
        <Carousel>
            <Slider />
            <Slider />
            <Slider />
        </Carousel>
    )
}

export default CarouselSection