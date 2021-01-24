import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { FrostingFlavour, FrostingFlavours } from "../data/frostingflavours"
import { CupcakeFlavour, CupcakeFlavours } from "../data/cupcakeflavours"
import { addToCart as addToCartAction } from "../actions/cosy"
import "./cupcakeconfiguration.css"
import { CartItem, CupcakeOrder } from "../state/cosy";

type ComponentProps = {
    id: string;
}

type StateProps = {
}

type DispatchProps = {
    addToCart: (item: CartItem) => void;
}

type Props = ComponentProps & StateProps & DispatchProps;

type State = {
    amount: number;
    cupcakeFlavour: CupcakeFlavour;
    frostingFlavour: FrostingFlavour;
    box: boolean;
}

class CupcakeConfigurationUnc extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = CupcakeConfigurationUnc.defaultState();
    }

    static defaultState() {
        return {
            amount: 12,
            cupcakeFlavour: CupcakeFlavours[0],
            frostingFlavour: FrostingFlavours[0],
            box: false
        }
    }

    onSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const { id, addToCart } = this.props;
        event.preventDefault();
        const item = { ...this.state }
        const order = {
            cupcake: {
                id,
                ...item
            }
        }
        addToCart(order)
        this.setState(CupcakeConfigurationUnc.defaultState())
    }

    render() {
        const { amount, frostingFlavour, cupcakeFlavour, box } = this.state;
        return <div className="cupcake-conf">
            <form>
                <p>Cupcake options</p>
                <div className="amount">
                    <select id="amount" value={amount} onChange={a => this.setState({amount: parseInt(a.target.value)})}>
                        <option value={6}>6</option>
                        <option value={12}>12</option>
                        <option value={24}>24</option>
                        <option value={36}>36</option>
                    </select>
                    <label htmlFor="amount">Cupcake quantity</label>
                </div>
                <p>Cupcake flavour</p>
                <div className="flavours">
                    <select id="flavour" value={cupcakeFlavour.id} onChange={a => {
                            const val = CupcakeFlavours.find(f => f.id === a.target.value);
                            this.setState({cupcakeFlavour: val ?? CupcakeFlavours[0]})}
                        }>
                        {CupcakeFlavours.map(f => <option key={f.id} value={f.id}>{f.flavour}</option>)}
                    </select>
                </div>
                <p>Frosting flavour</p>
                <div className="flavours">
                    <select id="flavour" value={frostingFlavour.id} onChange={a => this.setState({frostingFlavour: FrostingFlavours.find(f => f.id === a.target.value) ?? FrostingFlavours[0]})}>
                        {FrostingFlavours.map(f => <option key={f.id} value={f.id}>{f.flavour}</option>)}
                    </select>
                </div>
                <p>Other</p>
                <div className="box">
                    <input id="box" type="checkbox" checked={box} onChange={() => this.setState({box: !box})} />
                    <label htmlFor="box">Cupcake box(es)</label>
                </div>
                <div>
                    <button type="submit" onClick={this.onSubmit.bind(this)}>Add to cart</button>
                </div>
            </form>
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    addToCart: (item: CartItem) => dispatch(addToCartAction(item))
})

export const CupcakeConfiguration = connect<StateProps, DispatchProps, ComponentProps>(mapStateToProps, mapDispatchToProps)(CupcakeConfigurationUnc);
