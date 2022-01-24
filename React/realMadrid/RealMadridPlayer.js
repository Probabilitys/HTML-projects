import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Players from './Players'
import Header from './Header'
import About from './About'
import Footer from './Footer'
import './realmadrid.css'
import Honours from './Honours'

const RealMadridPlayer = () => {

    return (
        <Router>
            <Header />
            <Nav />
            <div className='rm-container'>
                <Routes>
                    <Route path="/" exact element={<Home />} />
                    <Route path="/honours" exact element={<Honours />} />
                    <Route path="/about" exact element={<About />} />
                    <Route path="/players" exact element={<Players />} />
                </Routes>       
            </div>
            <Footer />
        </Router>
    )
}

export default RealMadridPlayer
