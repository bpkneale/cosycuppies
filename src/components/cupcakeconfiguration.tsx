import React from "react"
import { connect } from "react-redux";
import { FrostingFlavour, FrostingFlavours } from "../data/frostingflavours"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

const FrostingFlavourDisp = (flavour: FrostingFlavour) => {
    return <React.Fragment key={flavour.flavour}>
        <input id={`flavour-inp-${flavour.flavour}`} type="radio" />
        <label htmlFor={`flavour-inp-${flavour.flavour}`}>{flavour.flavour}</label>
    </React.Fragment>
}

class CupcakeConfigurationUnc extends React.Component<Props> {
    render() {
        return <div className="cupcake-conf">
            <div className="frosting-flavours">
                <p>Frosting flavour</p>
                {FrostingFlavours.map(FrostingFlavourDisp)}
            </div>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export const CupcakeConfiguration = connect(mapStateToProps, mapDispatchToProps)(CupcakeConfigurationUnc);
