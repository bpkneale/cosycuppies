import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import * as States from "../state/cosy";
import { CupcakePreviews } from "../data/cupcakes";
import { removeCartItem as removeCartItemAction } from "../actions/cosy";
import "./cartitem.css"

type ComponentProps = {
    item: States.CartItem;
    index: number;
}

type StateProps = {
}

type DispatchProps = {
    removeCartItem: (index: number) => void;
}

type Props = ComponentProps & StateProps & DispatchProps;

const CupcakeCartItem = (item: States.CupcakeOrder) => {
    const cc = CupcakePreviews.find(c => c.link === item.id);
    if(!cc) {
        return <p>Unable to display item with ID: {item.id}</p>
    }
    return <React.Fragment>
        <img src={cc.imageSrc} />
        <div>
            <p>{cc.title}</p>
            <p>Amount: {item.amount}</p>
            <p>Cupcake: {item.cupcakeFlavour.flavour}</p>
            <p>Frosting: {item.frostingFlavour.flavour}</p>
            <p>{item.box ? "Box" : "No box"}</p>
        </div>
    </React.Fragment>
}

class CartItemUnc extends React.Component<Props> {
    render() {
        const { item, removeCartItem, index } = this.props;
        return <div className="cart-item">
            {item.cupcake ? CupcakeCartItem(item.cupcake) : null}
            <div>
                <p onClick={() => removeCartItem(index)}>X Remove</p>
            </div>
        </div>
    }
}

const mapStateToProps = (state: States.CosyState) => ({
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    removeCartItem: (index: number) => dispatch(removeCartItemAction(index))
})

export const CartItem = connect<StateProps, DispatchProps, ComponentProps, States.CosyState>(mapStateToProps, mapDispatchToProps)(CartItemUnc);
