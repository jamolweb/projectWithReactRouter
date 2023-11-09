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
      .get(`https://jsonplaceholder.typicode.com/photos/${params.id}`)
      .then((res) => setState(res.data))
  }, [params.id]);

  return (
    <Grid rowGap={'40px'} templateColumns={{ base: 'repeat(1,1fr)', md: 'repeat(2,1fr)' }} >
      <GridItem>
        <Image w={{base:'100%', md:'80%'}} h={'auto'} minH={'300px'} src={state.url} />
      </GridItem>
      <GridItem display={'flex'} flexDirection={'column'} >
        <Heading fontSize={{ base: '17px', sm: '19px', md: '21px', lg: '23px', xl: '25px', '2xl': '27px' }}>{state.title}</Heading>
        <Text>Tovar kodi : 357890</Text>
        <Heading mt={"10px"} size={'sm'}>Harakteristika</Heading>
        <Box mt={'5px'}>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>Площадь:</Text>
            <Text>до 50 м2</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>Площадь:</Text>
            <Text>до 50 м2</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>Площадь:</Text>
            <Text>до 50 м2</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>Площадь:</Text>
            <Text>до 50 м2</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>Площадь:</Text>
            <Text>до 50 м2</Text>
          </Flex>
          <Flex w={'250px'} justifyContent={'space-between'}>
            <Text>Площадь:</Text>
            <Text>до 50 м2</Text>
          </Flex>
        </Box>
        <Heading mt={'20px'} >10 999 ₽</Heading>
        <Button mt={'20px'} w={'240px'} colorScheme='facebook'>Kupit</Button>
      </GridItem>
    </Grid>
  )
}

export default SinglePage