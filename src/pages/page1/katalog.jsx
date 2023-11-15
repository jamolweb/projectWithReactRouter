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
// import {data} from "./Data"

const Katalog = () => {

    let [state, setState] = useState([])

    const  {addToLocalStorage}  = useContext(Products);

    let addToBasket = (product)=>{
        addToLocalStorage(product)
    }

    // setState(data);

    useEffect(() => {
        axios
            .get('https://dummyjson.com/products')
            .then((res) => setState(res.data.products))
    }, []);

    state.count = 1
    let navigate = useNavigate('')
    return (
        <Box mt={'50px'}>
            <Heading ml={'10px'}>Каталогu</Heading>
            <Grid gap={'10px'} templateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)', }}>
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
                                <Button colorScheme="facebook" onClick={() => addToBasket(item)}> + add to cart</Button>
                        </GridItem>

                    })
                }
            </Grid>
        </Box>
    )
}

export default Katalog