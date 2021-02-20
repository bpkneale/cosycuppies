import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { CosyState } from "../state/cosy";
import { clearToast as clearToastAction } from "../actions/cosy";
import "./toast.css";

type ComponentProps = {
}

type StateProps = {
    toast?: string;
}

type DispatchProps = {
    clearToast: () => void;
}

type Props = ComponentProps & StateProps & DispatchProps;

enum ToastState {
    Show,
    Fade,
    Hidden
}

type OwnState = {
    sm: ToastState;
    message: string;
}

class ToastUnc extends React.Component<Props, OwnState> {
    constructor(props: Props) {
        super(props);
        this.state = { sm: ToastState.Hidden, message: "" }
    }

    componentDidUpdate() {
        const { toast, clearToast } = this.props;
        const { sm } = this.state;
        switch(sm)
        {
            case ToastState.Hidden:
                if(toast !== undefined) {
                    this.setState({sm: ToastState.Show, message: toast})
                    setTimeout(() => this.setState({sm: ToastState.Fade}), 1000)
                }
                break;

            case ToastState.Fade:
                setTimeout(() => {
                    clearToast();
                    this.setState({sm: ToastState.Hidden, message: ""})
                }, 1000)
                break;
        }
    }

    render() {
        const { sm, message } = this.state;
        if(sm === ToastState.Hidden || !message) {
            return null;
        }
        return <div className={`toast primary-light ${sm === ToastState.Fade ? "fading" : ""}`}>
            <p>{message}</p>
        </div>
    }
}

const mapStateToProps = (state: CosyState) => ({
    toast: state.toast
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    clearToast: () => dispatch(clearToastAction())
})

export const Toast = connect<StateProps, DispatchProps, ComponentProps, CosyState>(mapStateToProps, mapDispatchToProps)(ToastUnc);
