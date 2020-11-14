import React from 'react'
import './button-styles.scss'

const Button = ({children, isGoogleSignIn,...props}) => {
    return (
        <button className={`${isGoogleSignIn ? 'google-sign-in' : ''} button`} {...props} >
            {children}
        </button>
    )
}

export default Button
