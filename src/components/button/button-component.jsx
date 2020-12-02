import React from 'react'
import { CustomButtonContainer } from './custom-button.styles'

const Button = ({children, ...props}) => {
    return (
        <CustomButtonContainer className='button' {...props} >
            {children}
        </CustomButtonContainer>
    )
}

export default Button
