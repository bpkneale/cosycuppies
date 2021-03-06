import React from "react"
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import * as Data from "../data/cakes";
import { BasePage } from "./base";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Cakes extends BasePage<Props> {
    render() {
        const cake = Data.Cakes[0];
        return <div className="coming-soon base-page" ref={ref => this.container = ref}>
            <Helmet title="Cakes - Cosy Cuppies" />
            <h2 className="centre">Cakes coming soon!</h2>
            <div>
                <img alt={cake.imageAlt} src={cake.imageSrc} />
            </div>
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
