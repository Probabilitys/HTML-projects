import React from 'react'


const Input = ({ onKeyDown, type, placeholder }, ref) => {
    return (
        <>
            <input 
                ref={ref} 
                onKeyDown={onKeyDown}
                type={type} 
                placeholder={placeholder}
             />
        </>
    )
}

const forwardInput = React.forwardRef(Input)

export default forwardInput
