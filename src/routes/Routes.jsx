import React from 'react'
import {
    Route,
    Routes
} from 'react-router-dom'
import App from '../pages/page1/App'
import Page2 from '../pages/page2/page2'
import Layout from '../Layout'
import SinglePage from '../pages/page1/SinglePage'
import SinglePage2 from '../pages/page2/SinglePage2.jsx'
import Cart from '../pages/cart.jsx'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout />} >
                    <Route path='/' element={<App />} />
                    <Route path='/page2' element={<Page2 />} />
                    <Route path='/products/:id' element={<SinglePage />}/>
                    <Route path='/page2/product/:id' element={<SinglePage2 />} />
                    <Route path='/mycart' element={<Cart />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Routers