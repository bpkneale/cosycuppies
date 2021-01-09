import React from "react"
import { connect } from "react-redux";
import { Link } from "react-router-dom";
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
                <Link to="/">Home</Link>
                <Link to="/cupcakes">Cupcakes</Link>
                <Link to="/cakes">Cakes</Link>
                <Link to="/more">And More!</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
