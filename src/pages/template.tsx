import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { CosyState } from "../state/cosy";

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

const mapStateToProps = (state: CosyState) => ({
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
})

export const Template = connect<StateProps, DispatchProps, ComponentProps, CosyState>(mapStateToProps, mapDispatchToProps)(TemplateUnc);
