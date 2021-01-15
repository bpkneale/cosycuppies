import React from "react"
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { CupcakeConfiguration } from "../components/cupcakeconfiguration";
import { UpButton } from "../components/upbutton";
import { Lookup } from "../data/cupcakes";
import { getTopLocation } from "../utils/location"
import "./cupcake.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class CupcakeUnc extends React.Component<Props> {
    componentDidMount() {
    }

    render() {
        const cc = Lookup(getTopLocation())
        if(!cc) {
            return <Redirect to="/not-found" />
        }
        return <div className="cupcake">
            <div className="cupcake-nav">
                <UpButton />
                <h2>{cc.title}</h2>
                <span></span>
            </div>
            <div>
                <section className="cupcake-images">
                    <img src={cc.imageSrc} alt={`A cupcake of style ${cc.title}`}></img>
                </section>
                <section className="cupcake-detail">
                    <p>{cc.description}</p>
                    <CupcakeConfiguration />
                </section>
            </div>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export const Cupcake = connect(mapStateToProps, mapDispatchToProps)(CupcakeUnc);
