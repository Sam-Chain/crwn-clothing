import { withRouter } from "react-router-dom"
import { compose } from "redux"
import Cart from "./cart-dropdown.component"

const CartContainer = compose(
    withRouter
)(Cart)

export default CartContainer