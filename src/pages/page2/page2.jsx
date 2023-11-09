import {
  Box,
  Flex,
  Heading
} from "@chakra-ui/react";
import Sidebar from "./sidebar";
import SidebarBurger from './sidebarBurger'
import Cards from "./cards";

const Contact = () => {
  return (
    <>
        <Flex alignItems={'end'}>
          <SidebarBurger />
          <Heading fontSize={'43px'} >Радиаторы</Heading>
          <Flex display={{ base: 'none', xl: 'flex' }} gap={'20px'} ml={'100px'}>
            <Heading color={'green'} size={'sm'}>ТРУБЧАТЫЕ</Heading>
            <Heading size={'sm'}>БИМЕТАЛЛИЧЕСКИЕ</Heading>
            <Heading size={'sm'}>АлюминиЕВЫЕ</Heading>
            <Heading size={'sm'}>Панельные</Heading>
            <Heading size={'sm'}>ДИЗАЙН</Heading>
          </Flex>
        </Flex>
        <Flex mt={'40px'}>
          <Sidebar />
          <Cards />
        </Flex>
    </>
  )
};

export default Contact;