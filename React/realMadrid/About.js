import React from 'react'
import Club from './img/club_of_the_century.JPG'
import Adidas from './img/adidas.png'
import FlyEmirates from './img/fly_emirates.png'

const About = () => {

    const imgStyle ={
        margin: '50px',
        width: '200px'
    }

    return (
        <div className='about-page'>
            <h1 className='page-title'>About</h1>
            <img src={Club} style={imgStyle} />
            <h3>The Best Club of the 20th Century FIFA</h3>
            <div>
                <img src={Adidas} style={imgStyle} />
                <img src={FlyEmirates} style={imgStyle} />
            </div>
        </div>
    )
}

export default About
