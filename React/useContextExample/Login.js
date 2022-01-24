import React, { useContext } from 'react'
import { AppContext } from './UseContextExample'

const Login = () => {

    const { setUsername } = useContext(AppContext)

    return (
        <>
            <input 
                onChange={(e) => {
                    setUsername(e.target.value)
                }}
            />
        </>
    )
}

export default Login
