import React from 'react'
import realMadridImage from './img/Real_Madrid.png'

const Header = () => {
    return (
        <div className='header-section'>
            <img src={realMadridImage} alt='Real Madrid' width={'50px'}/>
            <header>Real Madrid</header>
            
        </div>
    )
}

export default Header
