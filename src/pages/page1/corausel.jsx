import {
    Box,
    Heading
} from "@chakra-ui/react";
import React, { Component } from "react";
import Slider from "react-slick";

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <Box>
                <Slider {...settings}>
                    <Box textAlign={'center'} padding={{base:'80px',sm:'100px'}} w={'100%'} h={{base:'200px', sm:'230px'}} bg={'violet'}>
                        <Heading>Banner1</Heading>
                    </Box>
                    <Box textAlign={'center'} padding={{base:'80px',sm:'100px'}} w={'100%'} h={{base:'200px', sm:'230px'}} bg={'violet'}>
                        <Heading>Banner2</Heading>
                    </Box>
                    <Box textAlign={'center'} padding={{base:'80px',sm:'100px'}} w={'100%'} h={{base:'200px', sm:'230px'}} bg={'violet'}>
                        <Heading>Banner3</Heading>
                    </Box>
                    <Box textAlign={'center'} padding={{base:'80px',sm:'100px'}} w={'100%'} h={{base:'200px', sm:'230px'}} bg={'violet'}>
                        <Heading>Banner4</Heading>
                    </Box>
                    <Box textAlign={'center'} padding={{base:'80px',sm:'100px'}} w={'100%'} h={{base:'200px', sm:'230px'}} bg={'violet'}>
                        <Heading>Banner5</Heading>
                    </Box>
                    <Box textAlign={'center'} padding={{base:'80px',sm:'100px'}} w={'100%'} h={{base:'200px', sm:'230px'}} bg={'violet'}>
                        <Heading>Banner6</Heading>
                    </Box>
                </Slider>
            </Box>
        );
    }
}