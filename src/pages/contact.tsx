import React from "react"
import { connect } from "react-redux";
import "./contact.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Contact extends React.Component<Props> {
    render() {
        return <div className="contact text-page">
            <section>
                <h2>Contact</h2>
                <p>For all enquiries please contact Stephanie</p>
                <p>stephanie@cosycuppies.com.au</p>
                <h2>ABN</h2>
                <p>88 239 232 322</p>
            </section>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
