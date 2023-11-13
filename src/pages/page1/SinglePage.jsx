import { Image } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import { Grid } from '@chakra-ui/react';
import { GridItem } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom'

const SinglePage = () => {
  let params = useParams({})

  let [state, setState] = useState([])
  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${params.id}`)
      .then((res) => setState(res.data))
  }, [params.id]);



  return (
    <Grid rowGap={'40px'} templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }}>
      <GridItem>
        <Image w={{base:'100%', md:'80%'}} h={'auto'} minH={'300px'} src={state.thumbnail} />
      </GridItem>
      <GridItem display={'flex'} flexDirection={'column'} >
        <Heading fontSize={{ base: '17px', sm: '19px', md: '21px', lg: '23px', xl: '25px', '2xl': '27px' }}>{state.title}</Heading>
        <Text>Tovar kodi : 357890</Text>
        <Heading mt={"10px"} size={'sm'}>Harakteristika</Heading>
        <Box mt={'5px'}>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>rating</Text>
            <Text>{state.rating}</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>discountPercentage</Text>
            <Text>{state.discountPercentage}</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>stock</Text>
            <Text>{state.stock}</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>brand</Text>
            <Text>{state.brand}</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>category</Text>
            <Text>{state.category}</Text>
          </Flex>
        </Box>
        <Heading mt={'20px'} > ${state.price}</Heading>
        <Button mt={'20px'} w={'240px'} colorScheme='facebook'>Kupit</Button>
      </GridItem>
    </Grid>
  )
}

export default SinglePage