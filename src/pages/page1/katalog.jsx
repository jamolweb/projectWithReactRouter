import {
    Box,
    Button,
    Grid,
    GridItem,
    Heading,
    Image,
    Text
} from "@chakra-ui/react"
import axios from 'axios'
import { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Products } from "../../context/CartProducts"
import { useContext } from "react"

const Katalog = () => {

    let [state, setState] = useState([])

    const { Product, setProduct } = useContext(Products);

    let toCart = (product) => {
        setProduct([...Product, product])
        setAdded('added to card')
        // console.log(added);
    }

    let [added , setAdded] = useState('+ add to cart');

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((res) => setState(res.data.products))
    }, []);
    let navigate = useNavigate('')
    return (
        <Box mt={'50px'}>
            <Heading>Каталогu</Heading>
            <Grid ml={'30px'} gap={'10px'} templateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)', }}>
                {
                    state.slice(0, 12).map((item) => {
                        return <GridItem
                            key={item.id}
                            borderRadius={'15px'}
                            bg={'white'}
                            p={'10px'}
                        >

                            <Image onClick={() => navigate(`/products/${item.id}`)} w={'100%'} objectFit={'cover'} borderRadius={'15px 15px 15px 15px'} h={'300px'} src={item.images[0]} />
                            <Text onClick={() => navigate(`/products/${item.id}`)}>{item.title}</Text>
                            <Text onClick={() => navigate(`/products/${item.id}`)}> $ {item.price}</Text>
                                <Button colorScheme="facebook" onClick={() => toCart(item)}> + add to cart</Button>
                        </GridItem>

                    })
                }
            </Grid>
        </Box>
    )
}

export default Katalog