import React from "react"
import { connect } from "react-redux";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class CartUnc extends React.Component<Props> {
    render() {
        return <div>
            <h2>Shopping Cart</h2>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export const Cart = connect(mapStateToProps, mapDispatchToProps)(CartUnc);
