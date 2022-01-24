import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {


    return (
        <div>
            <hr />
            <ul className='rm-menu'>

                <NavLink to='/' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>Home</li>
                </NavLink>
                
                <NavLink to='/players' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>Players</li>                
                </NavLink>

                <NavLink to='/honours' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>Honours</li>                
                </NavLink>

                <NavLink to='/about' className={({ isActive }) => 
                `link-style ${isActive ? 'link-active' : ''}`} >
                    <li>About</li>                
                </NavLink>
            </ul>
        </div>
    )
}

export default Nav
