import React from 'react'
import { createContext } from 'react'
import SinglePage from '../pages/page1/SinglePage'
import SinglePage2 from '../pages/page2/SinglePage2'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const ProductsContext = () => {

    let [state, setState] = useState([])
    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/`)
            .then((res) => setState(res.data.products))
    }, []);

    const ProductContext = createContext(null)

    return (
        <ProductContext.Provider value={state}>
            <SinglePage />
            <SinglePage2 />
        </ProductContext.Provider>
    )
}

export default ProductsContext;