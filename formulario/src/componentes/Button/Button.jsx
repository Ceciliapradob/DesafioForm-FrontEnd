import React from 'react'
import './Button.css'

function Button({handleClick, children}) {
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default Button
