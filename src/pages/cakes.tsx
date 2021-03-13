import React from "react"
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import Preview from "../components/preview";
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
        return <div className="coming-soon base-page" ref={ref => this.container = ref}>
            <Helmet title="Cakes - Cosy Cuppies" />
            <h2 className="centre">Cakes coming soon!</h2>
            <div>
                <img src={Data.Cakes[0].imageSrc} />
            </div>
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
