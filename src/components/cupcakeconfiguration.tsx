import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { FrostingFlavour, FrostingFlavours } from "../data/frostingflavours"
import { CupcakeFlavour, CupcakeFlavours } from "../data/cupcakeflavours"
import { addToCart as addToCartAction } from "../actions/cosy"
import "./cupcakeconfiguration.css"
import { CartItem, CupcakeOrder } from "../state/cosy";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Button from '@material-ui/core/Button';
import { Checkbox, FormControl, FormControlLabel, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@material-ui/core';



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
        const { amount, frostingFlavour, cupcakeFlavour, box, extraInformation } = this.state;
        return <div className="cupcake-conf">
            <form>
                <p>Cupcake options</p>
                <FormControl color="secondary">
                    <InputLabel id="cupcake-quantity-label">Cupcake quantity</InputLabel>
                    <Select
                        labelId="cupcake-quantity-label"
                        value={amount}
                        onChange={a => this.setState({amount: parseInt(a.target.value as string)})}
                    >
                        <MenuItem value={6}>6</MenuItem>
                        <MenuItem value={12}>12</MenuItem>
                        <MenuItem value={24}>24</MenuItem>
                        <MenuItem value={36}>36</MenuItem>
                        <MenuItem value={48}>48</MenuItem>
                        <MenuItem value={72}>72</MenuItem>
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
                
                <FormControl color="secondary">
                    <TextField 
                        label="Extra information"
                        color="secondary" 
                        variant="filled" 
                        multiline 
                        value={extraInformation} 
                        onChange={e => this.setState({extraInformation: e.target.value})} />
                    <FormHelperText>Toppers, notes, customisations, etc</FormHelperText>
                </FormControl>
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
