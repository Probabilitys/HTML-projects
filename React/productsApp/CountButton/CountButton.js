import React, { useState } from 'react';
import "./CountButton.css"

const CountButton = (props) => {

    const [counter, setCounter] = useState(0)

    const buttonStyle = {
        background: props.background
    }

    const handleClick = () => { 
        setCounter(counter + props.incrementBy)
    }

    return (
        <div >
            <button style={buttonStyle}
            onClick={handleClick}>+{props.incrementBy}</button>
            <div className={'count-display'}>{counter}</div>
        </div>
    )
}

export default CountButton