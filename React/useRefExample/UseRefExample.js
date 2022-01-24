import React, { useEffect, useRef} from 'react'
import Input from './Input'

const UseRefExample = () => {

    const firstNameRef = useRef(null)
    const lastNameRef = useRef(null)
    const buttonRef = useRef(null)

    useEffect(() => {
        // focus on the first textbox when page loaded
        firstNameRef.current.focus()
    }, [])

    function firstKeyDown(e) {
        // focus on the last name textbox when hit Enter
        if (e.key === "Enter") {
            console.log(lastNameRef.current)
            lastNameRef.current.focus()
        }
    }

    function lastKeyDown(e) {
        // focus on the button when hit Enter
        if (e.key === "Enter") {
            buttonRef.current.focus()
        }
    }

    function buttonKeyDown() {
        console.log('Submitted.')
    }

    return (
        <div>
            <header>
                <Input 
                    ref={firstNameRef} 
                    onKeyDown={firstKeyDown}
                    type="text" 
                    placeholder="First Name" 
                />
                <Input 
                    ref={lastNameRef} 
                    onKeyDown={lastKeyDown}
                    type="text" 
                    placeholder="Last Name" 
                />
                <button 
                onKeyDown={buttonKeyDown} ref={buttonRef} 
                >Submit</button>
            </header>
        </div>
    )
}


export default UseRefExample
