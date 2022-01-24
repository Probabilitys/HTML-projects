import React, { useState } from 'react'

const SearchBar = ( { onSearch } ) => {

    const [inputValue, setInputValue] = useState("")

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
        onSearch(e)
    }

    const handleButtonClick = (e) => {
        setInputValue('')
        onSearch(e)
    }

    return (
        <div>
            <input 
            className='search-bar'
            type="text" 
            value={inputValue} 
            onChange={handleInputChange} />
            <button className='search-bar'
            onClick={handleButtonClick}>Clear</button>
        </div>
    )
}

export default SearchBar
