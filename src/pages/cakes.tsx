import React from "react"
import { connect } from "react-redux";
import Preview from "../components/preview";
import * as Data from "../data/cakes";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Cakes extends React.Component<Props> {
    render() {
        return <div className="coming-soon">
            <h2 className="centre">Cakes coming soon!</h2>
            <div>
                <img src={Data.Cakes[0].imageSrc} />
            </div>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
