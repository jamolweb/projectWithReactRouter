import { useContext } from "react"
import Context, { Products } from "../context/CartProducts";
import {
    Flex,
    Image,
    Text,
    Box,
    Heading,
    Button,
    Grid,
    GridItem
} from "@chakra-ui/react";
const Cart = () => {

    const { Product, setProduct } = useContext(Products)
    let remove = (id) => {
        let newData = Product.filter(item => item.id != id)
        setProduct(newData)
    }

    return (
        <>
            <Heading>My card</Heading>
            <Context>
                <Grid>
                    {
                        Product.length < 1 && <Heading fontSize={'xl'} color={'red'} fontWeight={'900'} mt={'30px'}>You dont have products in your cart..........</Heading>
                    }
                    {
                        Product.length >= 1 && Product.map(item => {
                            return (
                                <Box mt={'10px'} flexWrap={'wrap'} border={'1px solid grey !important'} key={item.id}>
                                    <GridItem padding={'20px'} display={{ base: "block", lg: 'flex' }}>
                                        <Image w={{ base: '100%', lg: '300px' }} h={'350px'} objectFit={'cover'} src={item.images[0]} />
                                        <Flex mt={{ base: '20px', lg: '0' }} ml={{ base: '0', lg: '200px' }} flexDirection={'column'}>
                                            <Heading>{item.title}</Heading>
                                            <Flex w={{base:'100%', lg:'250px'}} justifyContent={'space-between'}>
                                                <Text>rating</Text>
                                                <Text>{item.rating}</Text>
                                            </Flex>
                                            <Flex w={{base:'100%', lg:'250px'}} justifyContent={'space-between'}>
                                                <Text>discountPercentage</Text>
                                                <Text>{item.discountPercentage}</Text>
                                            </Flex>
                                            <Flex w={{base:'100%', lg:'250px'}} justifyContent={'space-between'}>
                                                <Text>stock</Text>
                                                <Text>{item.stock}</Text>
                                            </Flex>
                                            <Flex w={{base:'100%', lg:'250px'}} justifyContent={'space-between'}>
                                                <Text>brand</Text>
                                                <Text>{item.brand}</Text>
                                            </Flex>
                                            <Flex w={{base:'100%', lg:'250px'}} justifyContent={'space-between'}>
                                                <Text>category</Text>
                                                <Text>{item.category}</Text>
                                            </Flex>
                                            <Text fontWeight={'bold'} fontSize={'30px'}> $ {item.price}</Text>
                                            <Button w={{ base: '' }}>Buy</Button>
                                            <Button colorScheme="red" mt={'14px'} w={{ base: '' }} onClick={() => remove(item.id)}>Remove</Button>
                                        </Flex>
                                    </GridItem>
                                </Box>
                            )
                        })
                    }
                </Grid>
            </Context>
        </>
    )
}

export default Cart;