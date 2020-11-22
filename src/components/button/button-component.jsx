import React from 'react'
import './button-styles.scss'

const Button = ({children, isGoogleSignIn,inverted, ...props}) => {
    return (
        <button 
            className={`
                ${inverted ? 'inverted' : ''} 
                ${isGoogleSignIn ? 'google-sign-in' : ''} 
                button
            `} 
            {...props} 
        >
            {children}
        </button>
    )
}

export default Button
