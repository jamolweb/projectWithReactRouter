import react, { useContext } from "react"
import Context, { Products } from "../context/CartProducts.jsx";
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
import { useState } from "react";
const Cart = () => {

    const { Product, setProduct,  } = useContext(Products);

    let remove = (id) => {
        let newData = Product.filter(item => item.id !== id)
        setProduct(newData)
    }

    let [state, setState] = useState('')

    // countes

    let arr = [];


    let decCrease = (id) => {
        // for (let i = 0; i < arr.length; i++) {
        //     console.log(arr[i]);
        // }

        setState(arr)

        setState((state)=> {
        return state.map((product)=>{
            if(product.id===id){
                return {
                    ...product,
                    count:++product.count
                }
            }
        })
        })
    }



    return (
        <>
            <Heading>My card</Heading>
            <Context>
                <Grid>
                    {
                        Product.map(item => {
                            let obj = {
                                id: item.id,
                                price: item.price,
                                count: 1,
                                totalPrice: item.price,
                            }
                            arr.push(obj)

                            let {id, price, count, totalPrice} = obj
                            return (
                                <Box mt={'10px'} flexWrap={'wrap'} border={'1px solid grey !important'} key={item.id}>
                                    <GridItem gap={'40px'} padding={'20px'} display={{ base: "block", lg: 'flex' }} >
                                        <Image w={{ base: '100px', lg: '150px' }} h={'220px'} objectFit={'cover'} src={item?.thumbnail} />
                                        <Flex w={'100%'} alignItems={'center'} justifyContent={'space-between'}>
                                            <Heading>
                                                {item.title}
                                            </Heading>
                                            <Flex gap={'20px'} justifyContent={'center'}>
                                                <Button>-</Button>
                                                <Heading size={'lg'}>
                                                    {
                                                        count
                                                    }
                                                </Heading>
                                                <Button onClick={() => decCrease(item.id)}>+</Button>
                                            </Flex>
                                            <Heading size={'lg'}>$ {item.price}</Heading>
                                            <Button
                                                onClick={() => remove(item.id)}
                                                w={'30'}
                                                color={'grey'}
                                            >x</Button>
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