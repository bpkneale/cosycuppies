import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { FrostingFlavour, FrostingFlavours } from "../data/frostingflavours"
import { CupcakeFlavour, CupcakeFlavours } from "../data/cupcakeflavours"
import { addToCart as addToCartAction } from "../actions/cosy"
import { Quantities } from "../data/cupcakes"
import "./cupcakeconfiguration.css"
import { CartItem, CupcakeOrder } from "../state/cosy";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';
import { EstimateCost } from "../utils/cost"


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
    extraInformation: string;
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
            box: false,
            extraInformation: ""
        }
    }

    asCartItem() {
        const { id } = this.props;
        const item = { ...this.state }
        const order = {
            cupcake: {
                id,
                ...item
            }
        }
        return order;
    }

    onSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        const { addToCart } = this.props;
        event.preventDefault();
        const order = this.asCartItem();
        addToCart(order)
        this.setState(CupcakeConfigurationUnc.defaultState())
    }

    render() {
        const { amount, frostingFlavour, cupcakeFlavour, box, extraInformation } = this.state;
        const item = this.asCartItem();
        let cost = null;
        try {
            cost = EstimateCost(item);
        } catch(err) {
            console.error(err);
        }
        return <div className="cupcake-conf">
            <form>
                <p>Cupcake options</p>
                <FormControl color="secondary">
                    <InputLabel id="cupcake-quantity-label">Cupcake quantity</InputLabel>
                    <Select
                        labelId="cupcake-quantity-label"
                        value={amount}
                        onChange={a => this.setState({amount: parseInt(a.target.value as string)})}>
                        {Quantities.map(q => <MenuItem key={q} value={q}>{q}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControl color="secondary">
                    <InputLabel id="cupcake-flavours-label">Cupcake flavour</InputLabel>
                    <Select
                        labelId="cupcake-flavours-label"
                        value={cupcakeFlavour.id}
                        onChange={a => this.setState({cupcakeFlavour: CupcakeFlavours.find(f => f.id === a.target.value) ?? CupcakeFlavours[0]})}
                    >
                        {CupcakeFlavours.map(f => <MenuItem value={f.id} key={f.id}>{f.flavour}</MenuItem>)}
                    </Select>
                    <FormHelperText>See ingredients list in about page</FormHelperText>
                </FormControl>
                <FormControl color="secondary">
                    <InputLabel id="frosting-flavours-label">Frosting flavour</InputLabel>
                    <Select
                        labelId="frosting-flavours-label"
                        value={frostingFlavour.id}
                        onChange={a => this.setState({frostingFlavour: FrostingFlavours.find(f => f.id === a.target.value) ?? FrostingFlavours[0]})}
                    >
                        {FrostingFlavours.map(f => <MenuItem value={f.id} key={f.id}>{f.flavour}</MenuItem>)}
                    </Select>
                </FormControl>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={box}
                            onChange={() => this.setState({box: !box})}
                            color="secondary"
                        />
                    }
                    label="Cupcake box(es)"
                />
                
                <FormControl className="large" color="secondary">
                    <TextField 
                        label="Extra information"
                        color="secondary" 
                        variant="filled" 
                        multiline 
                        value={extraInformation} 
                        onChange={e => this.setState({extraInformation: e.target.value})} />
                    <FormHelperText>Toppers, notes, customisations, etc</FormHelperText>
                </FormControl>
                <p>{cost ? `Estimated cost: $${cost.toDecimalPlaces(1)}0` : `Unable to estimate cost`}</p>
                <Button onClick={this.onSubmit.bind(this)} variant="contained" color="primary">
                    <AddShoppingCartIcon />
                    <span>Add to cart</span>
                </Button>
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
