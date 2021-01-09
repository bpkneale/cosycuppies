import React from "react"
import { connect } from "react-redux";
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
        return <div className="primary banner">
            <img src="/chicken-logo.jpg"></img>
            <h3>Stephanie's cosy cuppies, and more!</h3>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
