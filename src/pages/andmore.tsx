import React from "react"
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { BasePage } from "./base";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class AndMore extends BasePage<Props> {
    render() {
        return <div className="base-page" ref={ref => this.container = ref}>
            <Helmet title="And More - Cosy Cuppies" />
            <h2 className="centre">Macarons and other sweets coming soon!</h2>
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AndMore);
