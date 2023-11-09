import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";
import { Image } from "@chakra-ui/react";
import Banner from './banner1.png'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            arrow:false,
            dots: true,
            infinite: true,
            speed: 550,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div>
                <Slider marginTop={'30px'} {...settings}>
                    <Image cursor={'pointer'} src={Banner}/>
                    <Image cursor={'pointer'} src={Banner}/>
                    <Image cursor={'pointer'} src={Banner}/>
                    <Image cursor={'pointer'} src={Banner}/>
                    <Image cursor={'pointer'} src={Banner}/>
                    <Image cursor={'pointer'} src={Banner}/>
                </Slider>
            </div>
        );
    }
}