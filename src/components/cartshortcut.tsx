import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { CartContents, CosyState } from "../state/cosy";
import "./cartshortcut.css"

type ComponentProps = {
}

type StateProps = {
    cart: CartContents;
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class CartShortcutUnc extends React.Component<Props> {
    render() {
        const { cart } = this.props;
        return <NavLink to="/cart" className="cart-shortcut">
            {cart.length ? <p>{cart.length}</p> : null}
            <img src="/assets/etc/shopping-cart.svg"></img>
        </NavLink>
    }
}

const mapStateToProps = (state: CosyState) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
})

export const CartShortcut = connect<StateProps, DispatchProps, ComponentProps, CosyState>(mapStateToProps, mapDispatchToProps)(CartShortcutUnc);
