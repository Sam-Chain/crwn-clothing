import React from 'react'
import './cart-dropdown.styles.scss'

import Button from '../button/button-component'
import { connect } from 'react-redux'
import CartItem from '../cart-item/cart-item.component'
import { selectCartItems } from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter } from 'react-router-dom'
import toggleCartHidden from '../../redux/cart/cart.action'

function Cart({cartItems, history, dispatch}) {
    return (
        <div className='cart-dropdown'>
            <div className="cart-items">
                {
                    cartItems.length ?
                    cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}/> )
                    :
                    <span className="empty-message"> Your cart is empty</span>
                }
            </div>
            <Button onClick={()=>{
                    history.push('/checkout')
                    dispatch(toggleCartHidden() )
                }}
            >OG TO CHECKOUT</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({ // state => ({cart: {cartItems}})
    // cartItems: state.cart.cartItems // cartItems
    cartItems: selectCartItems // (state) using selectors
})

export default withRouter(connect(mapStateToProps)(Cart))
