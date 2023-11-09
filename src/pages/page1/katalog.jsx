import {
    Box,
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

const Katalog = () => {

    let [state, setState] = useState([])
    useEffect(() => {
        axios
            .get('https://jsonplaceholder.typicode.com/photos')
            .then((res) => setState(res.data))
    }, []);
    let navigate = useNavigate('')

    return (
        <Box mt={'50px'}>
            <Heading>Каталогu</Heading>
            <Grid mt={'30px'} gap={'10px'} templateColumns={{ base: 'repeat(1,1fr)', sm: 'repeat(2,1fr)', md: 'repeat(3,1fr)', lg: 'repeat(4,1fr)', }}>
                {
                    state.slice(0, 8).map((item) => {
                        return <GridItem
                            onClick={() => navigate(`/products/${item.id}`)}
                            key={item.id}
                            borderRadius={'15px'}
                            bg={'white'}
                        >
                            <Image w={'100%'} objectFit={'cover'} borderRadius={'15px 15px 15px 15px'} src={item.url} />
                            <Text textAlign={'center'}>{item.title}</Text>
                        </GridItem>
                    })
                }
            </Grid>
        </Box>
    )
}

export default Katalog