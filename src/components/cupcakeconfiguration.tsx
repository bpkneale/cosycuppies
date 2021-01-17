import React from "react"
import { connect } from "react-redux";
import { FrostingFlavour, FrostingFlavours } from "../data/frostingflavours"
import { CupcakeFlavour, CupcakeFlavours } from "../data/cupcakeflavours"
import "./cupcakeconfiguration.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

type State = {
    amount: number;
    cupcakeFlavour: CupcakeFlavour | undefined;
    frostingFlavour: FrostingFlavour | undefined;
    box: boolean;
}

class CupcakeConfigurationUnc extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            amount: 12,
            cupcakeFlavour: CupcakeFlavours[0],
            frostingFlavour: FrostingFlavours[0],
            box: false
        }
    }

    onSubmit(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
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
                    <select id="flavour" value={cupcakeFlavour?.flavour} onChange={a => this.setState({cupcakeFlavour: CupcakeFlavours.find(f => f.id === a.target.value)})}>
                        {CupcakeFlavours.map(f => <option value={f.id}>{f.flavour}</option>)}
                    </select>
                </div>
                <p>Frosting flavour</p>
                <div className="flavours">
                    <select id="flavour" value={frostingFlavour?.flavour} onChange={a => this.setState({frostingFlavour: FrostingFlavours.find(f => f.id === a.target.value)})}>
                        {FrostingFlavours.map(f => <option value={f.id}>{f.flavour}</option>)}
                    </select>
                </div>
                <p>Other</p>
                <div className="box">
                    <input id="box" type="checkbox" onChange={() => this.setState({box: !box})} />
                    <label htmlFor="box">Cupcake box(es)</label>
                </div>
                <div>
                    <button type="submit" onClick={this.onSubmit.bind(this)}>Add to cart</button>
                </div>
            </form>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export const CupcakeConfiguration = connect(mapStateToProps, mapDispatchToProps)(CupcakeConfigurationUnc);
