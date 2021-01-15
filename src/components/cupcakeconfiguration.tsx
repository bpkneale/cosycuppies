import React from "react"
import { connect } from "react-redux";
import { FrostingFlavour, FrostingFlavours } from "../data/frostingflavours"
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
    flavour: FrostingFlavour;
    box: boolean;
}

const FrostingFlavourDisp = (flavour: FrostingFlavour, curr: FrostingFlavour, onSelect: (f: FrostingFlavour) => void) => {
    return <div key={flavour.flavour}>
        <input id={`flavour-inp-${flavour.flavour}`} type="radio" checked={curr === flavour} onChange={() => onSelect(flavour)} />
        <label htmlFor={`flavour-inp-${flavour.flavour}`}>{flavour.flavour}</label>
    </div>
}

class CupcakeConfigurationUnc extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            amount: 12,
            flavour: FrostingFlavours[0],
            box: false
        }
    }

    render() {
        const { amount, flavour, box } = this.state;
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
                <p>Frosting flavour</p>
                <div className="frosting-flavours">
                    {FrostingFlavours.map(f => FrostingFlavourDisp(f, flavour, f => this.setState({flavour: f})))}
                </div>
                <p>Other</p>
                <div className="box">
                    <input id="box" type="checkbox" onChange={() => this.setState({box: !box})} />
                    <label htmlFor="box">Cupcake box</label>
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
