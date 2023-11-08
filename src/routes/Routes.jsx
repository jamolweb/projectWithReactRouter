import React from 'react'
import {
    Route,
    Routes
} from 'react-router-dom'
import App from '../pages/page1/App'
import Page2 from '../pages/page2/page2'
import Layout from '../pages/page2/Layout'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route element={<Layout />} >
                    <Route path='/' element={<App />} />
                    <Route path='/page2' element={<Page2 />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Routers