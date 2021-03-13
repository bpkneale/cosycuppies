import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { CartContents, CosyState } from "../state/cosy";
import { CartItem } from "../components/cartitem";
import "./cart.css"
import { SubmitCart } from "../components/submitcart";
import Decimal from "decimal.js";
import { EstimateCost } from "../utils/cost";
import { BasePage } from "./base";
import { Helmet } from "react-helmet";

type ComponentProps = {
}

type StateProps = {
    cart: CartContents;
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class CartUnc extends BasePage<Props> {
    estimatedTotal(): Decimal | null {
        const { cart } = this.props;
        let cost = new Decimal(0);
        for(const item of cart) {
            try {
                const itemCost = EstimateCost(item);
                cost = cost.plus(itemCost);
            } catch(err) {
                console.error(err);
                return null;
            }
        }
        return cost;
    }

    render() {
        const { cart } = this.props;
        const total = this.estimatedTotal();
        return <div className="shopping-cart base-page" ref={ref => this.container = ref}>
            <Helmet title="Cart - Cosy Cuppies" />
            <h2>Shopping Cart</h2>
            <div className="cart-container">
                {cart.length === 0 ? 
                    <p>No items in cart</p> : 
                <React.Fragment>
                    <SubmitCart totalCost={total} />
                    <div>
                        {/* <p>{total ? `Estimated total cost: $${total.toDecimalPlaces(1)}. ` : ``}Cart items:</p> */}
                        {cart.map((item, index) => <CartItem item={item} index={index} />)}
                    </div>
                </React.Fragment>
                }
            </div>
        </div>
    }
}

const mapStateToProps = (state: CosyState) => ({
    cart: state.cart
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
})

export const Cart = connect<StateProps, DispatchProps, ComponentProps, CosyState>(mapStateToProps, mapDispatchToProps)(CartUnc);
