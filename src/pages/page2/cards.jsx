import {
    Box,
    Flex,
    Grid,
    GridItem,
    Heading,
    Image,
    Text
} from '@chakra-ui/react'
import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const cards = () => {

    let [state, setState] = useState([])
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => setState(res.data))
    }, []);
    let navigate = useNavigate('')


    return (
        <Box p={'10px 0px'} w={'84%'} display={'flex'} >
            <Grid
                templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)', lg: 'repeat(2,1fr)', xl: 'repeat(4,1fr)' }}
                ml={{ base: '0', md: '64px' }}
                gap={'20px'}>
                {
                    state.slice(0, 8).map((item) => {
                        return <GridItem
                            onClick={()=>navigate(`products/${item.id}`)}
                            key={item.id}
                            borderRadius={'8px'}
                            display={'flex'}
                            flexDirection={'column'}
                            justifyContent={'center'}
                            padding={'20px'}
                            bg={'white'}
                        >
                            <Image src={item.url} />
                            <Flex justifyContent={'space-between'} alignItems={'center'}>
                                <Heading fontSize={{ base: '12px', sm: '13px', }} color={'#939393'} >{item.title}</Heading>
                                <Text fontSize={{ base: '8px', sm: '9px', md: '10px', lg: '11px' }}>код : 98098</Text>
                            </Flex>
                            <Flex mt={'6px'} justifyContent={'space-between'} alignItems={'center'}>
                                <Flex alignItems={'center'} w={'70%'} justifyContent={'space-between'}>
                                    <Text fontSize={{ base: '12px', md: '13px', lg: '14px' }}>Площадь:</Text>
                                    <Heading fontSize={'12px'} color={'#4B4B4B'} fontWeight={'bold'}>до 50 м2</Heading>
                                </Flex>
                                <Text color={'#4b4b4b'} fontSize={'13px'} fontWeight={'bold'} fontFamily={'sans-serif'}>309.0₽</Text>
                            </Flex>
                            <Flex mt={'6px'} justifyContent={'space-between'} alignItems={'center'}>
                                <Flex alignItems={'center'} w={'70%'} justifyContent={'space-between'}>
                                    <Text fontSize={{ base: '12px', md: '13px', lg: '14px' }}>Площадь:</Text>
                                    <Heading fontSize={'12px'} color={'#4B4B4B'} fontWeight={'bold'}>до 50 м2</Heading>
                                </Flex>
                                <Text color={'#4b4b4b'} fontSize={'13px'} fontWeight={'bold'} fontFamily={'sans-serif'}>3.999$</Text>
                            </Flex>
                        </GridItem>
                    })
                })
            </Grid>
        </Box>
    )
}

export default cards