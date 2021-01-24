import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { CartContents, CosyState } from "../state/cosy";
import { CartItem } from "../components/cartitem";
import "./cart.css"

type ComponentProps = {
}

type StateProps = {
    cart: CartContents;
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class CartUnc extends React.Component<Props> {
    render() {
        const { cart } = this.props;
        return <div className="shopping-cart">
            <h2>Shopping Cart</h2>
            {cart.length === 0 ? <p>No items in cart</p> : null}
            {cart.map((item, index) => <CartItem item={item} index={index} />)}
        </div>
    }
}

const mapStateToProps = (state: CosyState) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
})

export const Cart = connect<StateProps, DispatchProps, ComponentProps, CosyState>(mapStateToProps, mapDispatchToProps)(CartUnc);
