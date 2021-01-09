import React from "react"
import { connect } from "react-redux";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Contact extends React.Component<Props> {
    render() {
        return <div>
            <section>
                <h2>Contact</h2>
                <p>For all enquiries please contact Stephanie</p>
                <p>stephanie@cosycuppies.com.au</p>
            </section>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
