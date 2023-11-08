import React from 'react'
import { 
    Route, 
    Routes 
} from 'react-router-dom'
import App from '../pages/page1/App'
import Page2 from '../pages/page2'

const Routers = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<App />}/>
                <Route path='/page2' element={<Page2 />}/>
            </Routes>
        </div>
    )
}

export default Routers