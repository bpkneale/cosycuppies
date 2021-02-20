import React from "react"
import { connect } from "react-redux";
import Preview from "../components/preview";
import { CupcakePreviews } from "../data/cupcakes"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Cupcakes extends React.Component<Props> {
    render() {
        return <div className="preview-container">
            {CupcakePreviews.map(p => <Preview key={p.imageSrc} prev={p} />)}
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Cupcakes);
