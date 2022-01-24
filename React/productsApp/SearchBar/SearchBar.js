import React, { useState } from 'react';

const SearchBar = (props) => {

    const [inputValue, setInputValue] = useState("")

    const showButton = inputValue.length > 0

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    
    const handleButtonClick = () => {
        setInputValue("")
    }

    const filteredProducts = props.products.filter((product) => {
        return product.includes(inputValue)
    })

    return <div>
        <input type="text" value={inputValue} onChange={handleInputChange}/>
        {showButton && <button onClick={handleButtonClick}>clear</button>}
        <ul>
            {filteredProducts.map((product) => {
                return <li>{product}</li>
            })}
        </ul>
    </div>
}

export default SearchBar