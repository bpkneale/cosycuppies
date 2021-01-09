import React from "react"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./banner.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Banner extends React.Component<Props> {
    render() {
        return <div className="primary-light banner">
            <div>
                <h1>Stephanie's cosy cuppies, and more!</h1>
            </div>
            <div className="navigation">
                <NavLink exact to="/">Home</NavLink>
                <NavLink to="/cupcakes">Cupcakes</NavLink>
                <NavLink to="/cakes">Cakes</NavLink>
                <NavLink to="/and-more">And More!</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
