import {
    Box,
    Button,
    Flex,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Text
} from "@chakra-ui/react"
import { BiSolidPhoneCall } from 'react-icons/bi'
import { GrLocation } from 'react-icons/gr'
import { AiOutlineSearch } from 'react-icons/ai'
import Burger from './Burger.jsx'
import {
    Link, NavLink
} from 'react-router-dom'
import { useState } from "react"
import { Products } from "../context/CartProducts.jsx"
import { useContext } from "react"


export default () => {
    let [state, setState] = useState('')

    const { Product } = useContext(Products);


    return (
        <Box bg={'#f9f9f9'} h={'200px'} as="header" w={'100%'}>
            <Flex
                color={'#4B4B4B'}
                alignItems={'center'}
                justifyContent={'space-between'}
                py={'20px'}
                m={'0 auto'}>
                <Heading fontSize={{ base: '23px', sm: '23px', md: '26px', lg: '28px', xl: '32px', '2xl': '35px' }}>
                    CompanyName
                </Heading>
                <Flex display={{ base: 'none', '2xl': 'flex' }} h={'100%'} gap={'50px'}>
                    <Flex gap={'15px'} alignItems={'center'}>
                        <BiSolidPhoneCall fontSize={'35px'} />
                        <Box>
                            <Heading size={'md'}>+7 (977) 837-12-45</Heading>
                            <Text mt={'5px'}>mail@mail.ru</Text>
                            <Text textDecoration={'underline'} color={'green'}>Заказать звонок</Text>
                        </Box>
                    </Flex>
                    <Flex gap={'15px'} alignItems={'center'}>
                        <GrLocation fontSize={'35px'} />
                        <Box>
                            <Heading size={'md'}>Москва, Павловская 16</Heading>
                            <Text>пн-пт 9:00-20:00</Text>
                        </Box>
                    </Flex>
                </Flex>
                <Flex gap={'35px'}>
                    <InputGroup  display={{ base: 'none', md: 'flex' }} w={{ base: '200px', sm: '240px', md: '290px', lg: '300px' }}>
                        <Input  placeholder="Поиск " />
                        <InputRightElement>
                            <AiOutlineSearch fontSize={'20px'} />
                        </InputRightElement>
                    </InputGroup>
                    <NavLink to={'/mycart'} style={{marginTop:'10px', color:'green', fontWeight:'900'}} >My Cart{Product.lentgh}</NavLink>
                </Flex>
            </Flex>
            <Flex
                color={'#4B4B4B'}
                alignItems={'center'}
                gap={'20px'}
                py={'20px'}
                m={'0 auto'}
            >
                <NavLink to={'/'} style={({isActive})=>{
                    return isActive ? {color:'blue', fontWeight:'900px', borderBottom:'2px solid blue'} : {}
                }}>HOME</NavLink>
            </Flex>
        </Box>
    )
}