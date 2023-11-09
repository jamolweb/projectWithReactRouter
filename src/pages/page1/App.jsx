import {
  Box,
  Heading
} from '@chakra-ui/react'
import Swiper from '../../header/header-carousel/header-carousel'
import Katalog from './katalog'
import WeWorkWith from './card2'
import AboutUs from './aboutUs'

function App() {

  return (
    <>
        <Swiper />
        {/* <Box textAlign={'center'} padding={{ base: '80px', sm: '100px' }} w={'100%'} h={{ base: '200px', sm: '230px', md: '260px', lg: '280px', xl: '300px' }} bg={'violet'}><Heading> Banner </Heading></Box> */}
        <Katalog />
        < WeWorkWith />
        <AboutUs />
    </>
  )
}

export default App
