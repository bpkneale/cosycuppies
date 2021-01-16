import React from "react"
import { connect } from "react-redux";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class AndMore extends React.Component<Props> {
    render() {
        return <div>
            <h2 className="centre">Macarons and other sweets coming soon!</h2>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(AndMore);
