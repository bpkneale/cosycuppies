import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { CosyState } from "../state/cosy";
import DatePicker from "react-datepicker";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class SubmitCartUnc extends React.Component<Props> {
    render() {
        return <div className="submit-cart">
            <p>To submit enquiry, please fill in below:</p>
            <label>
                E-mail Address
                <input type="text" />
            </label>
            <label>
                Date Required
                {/* <DatePicker /> */}
            </label>
            <label>
                
                <input type="checkbox" />
            </label>
            <button type="submit">Submit Enquiry</button>
        </div>
    }
}

const mapStateToProps = (state: CosyState) => ({
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
})

export const SubmitCart = connect<StateProps, DispatchProps, ComponentProps, CosyState>(mapStateToProps, mapDispatchToProps)(SubmitCartUnc);
