import { Image } from '@chakra-ui/react';
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Example = () => {
    const images = [
        "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
        "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
        "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    ];

    return (
        <Slide>
            <div className="each-slide-effect">
                <Image w={'100%'} h={{base:'200px', sm:'240px', md:'270px', lg:'300px', xl:'340px', '2xl':'370px'}} objectFit={'cover'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTWYenGebfzJCuwiR4WdjzTzI7BdavwbbeHA&usqp=CAU' />
            </div>
            <div className="each-slide-effect">
                <Image w={'100%'} h={{base:'200px', sm:'240px', md:'270px', lg:'300px', xl:'340px', '2xl':'370px'}} objectFit={'cover'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_hGXrY82OE77Fk4mYFcRabjSHexcJRt-p4w&usqp=CAU' />
            </div>
            <div className="each-slide-effect">
                <Image w={'100%'} h={{base:'200px', sm:'240px', md:'270px', lg:'300px', xl:'340px', '2xl':'370px'}} objectFit={'cover'} src=' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS95LYR1YwzavMkK8ZjwDwauhW7vUMU_FFsWg&usqp=CAU' />
            </div>
        </Slide>
    );
};

export default Example;