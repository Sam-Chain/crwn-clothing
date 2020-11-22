import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import toggleCartHidden from '../../redux/cart/cart.action'
import { selectCartItemsCount } from '../../redux/cart/cart.selectors'
import './cart-icon.styles.scss'



function CartIcon({toggleCartHidden, itemCount}) {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{itemCount}</span>
        </div>
    )
}

const mapStateToProps = createStructuredSelector ({ // state => ({cart: {cartItems}})
    // itemCount: state.cart.cartItems.reduce((counter, cartItem) => counter + cartItem.quantity, 0)
    itemCount: selectCartItemsCount //using selectors
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)
