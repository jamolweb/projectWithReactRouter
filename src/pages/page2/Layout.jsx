import React from 'react'
import Header from '../../header/header'
import Footer from '../../footer'
import { Outlet } from 'react-router-dom'
import { Box } from '@chakra-ui/react'

const Layout = () => {
    return (
        <>
            <Box
                w={{ base: '98%', md: '95%', xl: '93%', '2xl': '90%' }}
                m={'0 auto'}
            >
                <Header />
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}

export default Layout