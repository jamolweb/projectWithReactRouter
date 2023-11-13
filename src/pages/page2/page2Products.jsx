import { Button, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Products } from '../../context/CartProducts';

const page2Products = () => {
    let [state, setState] = useState([])
    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((res) => setState(res.data.products))
    }, []);
    let navigate = useNavigate('')

    const { Product, setProduct } = useContext(Products);

    let toCart = (product) => {
        setProduct([...Product, product]);
        Product.filter((item)=>{
            Product.filter((items)=>{
                return item == items;
                console.log(item);
            })
        })
    }

    return (
        <Grid m={'10px'} gap={'10px'} templateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)', }}>
            {
                state.slice(0, 8).map(item => {
                    return <GridItem
                        
                        key={item.id}
                        borderRadius={'15px'}
                        bg={'white'}
                        p={'10px'}
                    >
                        <Image onClick={() => navigate(`/page2/product/${item.id}`)} w={'100%'} objectFit={'cover'} borderRadius={'15px 15px 15px 15px'} h={'300px'} src={item.images[0]} />
                        <Text onClick={() => navigate(`/page2/product/${item.id}`)}>{item.title}</Text>
                        <Text onClick={() => navigate(`/page2/product/${item.id}`)}> $ {item.price}</Text>
                        <Button
                            colorScheme="facebook"
                            onClick={() => toCart(item)}
                        >+ add to cart</Button>
                    </GridItem>
                })
            }
        </Grid>
    )
}

export default page2Products