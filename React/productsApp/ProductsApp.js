import React, { useState, useEffect } from 'react'
import CountButton from './CountButton/CountButton'
import SearchBar from './SearchBar/SearchBar'


const ProductsApp = () => {

  const [productsState, setProductsState] = useState([])

  useEffect(() => {

    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((productsArray) => {
        const productsState = productsArray.map((product) => {
          return product.title
        })
        setProductsState(productsState)
      })
  }, [])

  const hasProduct = productsState.length > 0

  return (
    <div>
      {/* <CountButton incrementBy={3} background={'green'}/>
      <CountButton incrementBy={60} background={'blue'}/>
      <CountButton incrementBy={800} background={'green'}/> */}

      {hasProduct ? <SearchBar products= {productsState} /> : "loading"}
    </div>
  )
}

export default ProductsApp