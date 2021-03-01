import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import * as States from "../state/cosy";
import { CupcakePreviews } from "../data/cupcakes";
import { removeCartItem as removeCartItemAction } from "../actions/cosy";
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import "./cartitem.css"
import { Button } from "@material-ui/core";
import { EstimateCost } from "../utils/cost";
import Decimal from "decimal.js";

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

const CupcakeCartItem = (item: States.CupcakeOrder, cartItem: States.CartItem) => {
    const cc = CupcakePreviews.find(c => c.link === item.id);
    if(!cc) {
        return <p>Unable to display item with ID: {item.id}</p>
    }
    let cost = null;
    let costText = "";
    try {
        cost = EstimateCost(cartItem);
        costText = `Estimated: $${cost.toDecimalPlaces(1)}`;
    } catch(err) {
        console.error(err);
    }
    return <React.Fragment>
        <div className="img-container">
            <img src={cc.imageSrc} />
        </div>
        <div className="item-details">
            <p>{cc.title}</p>
            <p>Amount: {item.amount}</p>
            <p>Cupcake: {item.cupcakeFlavour.flavour}</p>
            <p>Frosting: {item.frostingFlavour.flavour}</p>
            <p>{item.box ? "With box" : "No box"}</p>
            <p>{costText}</p>
        </div>
    </React.Fragment>
}

class CartItemUnc extends React.Component<Props> {
    render() {
        const { item, removeCartItem, index } = this.props;
        return <div className="cart-item">
            {item.cupcake ? CupcakeCartItem(item.cupcake, item) : null}
            <div className="cart-actions">
                <div className="cart-remove hover-primary-light-bg" onClick={() => removeCartItem(index)}>
                    <Button variant="contained" color="primary">
                        <RemoveShoppingCartIcon />
                        <span>Remove</span>
                    </Button>
                </div>
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
