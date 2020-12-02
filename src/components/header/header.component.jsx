import React from 'react'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux'
import CartIcon from '../cart-icon/cart-icon.component'
import Cart from '../cart-dropdown/cart-dropdown.component'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer } from './header.styles'
import CartContainer from '../cart-dropdown/cart-dropdown.container'

function Header({currentUser, hidden}) {
    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='/shop'>
                    SHOP
                </OptionLink>
                <OptionLink to='/shop'>
                    CONTACT
                </OptionLink>
                {
                    currentUser ? 
                    <OptionLink as='div' onClick={()=> auth.signOut()} >
                            SIGN OUT
                    </OptionLink>     :
                    <OptionLink to='/signing'>
                            SIGN IN
                    </OptionLink>
                }
                <CartIcon/>
            </OptionsContainer>
            {
                    hidden ? null :
                    // <Cart/>
                    <CartContainer/>
            }
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector ({  //{ user: {currentUser}, cart: {hidden} }
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header)
