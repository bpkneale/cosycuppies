import React from "react"
import { connect } from "react-redux";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class TemplateUnc extends React.Component<Props> {
    render() {
        return <div>

        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export const Template = connect(mapStateToProps, mapDispatchToProps)(TemplateUnc);
