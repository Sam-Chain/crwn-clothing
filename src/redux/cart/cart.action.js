import CartActionTypes  from './cart.types'

const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN,
})

const addItem = item => ({
    type: CartActionTypes.ADD_ITEM,
    payload: item
})

const removeItem = item => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: item
})

const ClearItemFromCart = item => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: item
})

export {addItem, removeItem, ClearItemFromCart}
export default toggleCartHidden
