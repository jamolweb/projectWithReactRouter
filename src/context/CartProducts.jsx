import { useState } from "react"
import { createContext } from "react"

// CONTEXT CREATE
export const Products = createContext([])

const Context = ({children}) => {

  let [ Product, setProduct ] = useState([])

  return (
    <Products.Provider value={{ Product, setProduct }}>
        { children }
    </Products.Provider>
  )
}

export default Context;