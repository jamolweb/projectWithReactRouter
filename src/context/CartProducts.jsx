import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"

// CONTEXT CREATE
export const Products = createContext([])

const Context = ({ children }) => {

  const storage = localStorage.getItem('myBasket')

  let [Product, setProduct] = useState(JSON.parse(storage) || [])

  let addToLocalStorage = (product) => {
    const data = Product.some((item) => item?.id === product?.id)
    if (!data) {
      setProduct([...Product, product])
    }
  }

  useEffect(() => {
    localStorage.setItem('myBasket', JSON.stringify(Product));
  }, [Product])

  return (
    <Products.Provider value={{ addToLocalStorage, Product, setProduct }}>
      {children}
    </Products.Provider>
  )
}

export default Context;