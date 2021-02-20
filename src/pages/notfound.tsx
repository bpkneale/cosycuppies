import React from "react"
import { connect } from "react-redux";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class NotFoundUnc extends React.Component<Props> {
    render() {
        return <div>
            <h2>Location not found</h2>
            <p>Could not find that page on this server</p>
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export const NotFound = connect(mapStateToProps, mapDispatchToProps)(NotFoundUnc);
