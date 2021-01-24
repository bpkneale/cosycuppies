import React from "react"
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import "./cartshortcut.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class CartShortcutUnc extends React.Component<Props> {
    render() {
        return <NavLink to="/cart" className="cart-shortcut">
            <img src="/assets/etc/shopping-cart.svg"></img>
        </NavLink>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export const CartShortcut = connect(mapStateToProps, mapDispatchToProps)(CartShortcutUnc);
