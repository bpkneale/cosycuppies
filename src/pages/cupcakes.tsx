import React from "react"
import { connect } from "react-redux";
import Preview from "../components/preview";
import { CupcakePreviews } from "../data/cupcakes"
import { BasePage } from "./base";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Cupcakes extends BasePage<Props> {
    render() {
        return <div className="preview-container base-page" ref={ref => this.container = ref}>
            {CupcakePreviews.map(p => <Preview key={p.imageSrc} prev={p} />)}
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Cupcakes);
