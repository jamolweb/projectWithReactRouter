import {
  Box,
  Heading
} from '@chakra-ui/react'
import Header from '../../header/header'
import Katalog from './katalog'
import WeWorkWith from './card2'
import AboutUs from './aboutUs'

function App() {

  return (
    <>
        <Box textAlign={'center'} padding={{ base: '80px', sm: '100px' }} w={'100%'} h={{ base: '200px', sm: '230px', md: '260px', lg: '280px', xl: '300px' }} bg={'violet'}><Heading> Banner </Heading></Box>
        <Katalog />
        < WeWorkWith />
        <AboutUs />
    </>
  )
}

export default App
