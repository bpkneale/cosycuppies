import React from "react"
import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { BasePage } from "./base";
import "./contact.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

const MailTo = (email: string) => <a href={`mailto:${email}`}>{email}</a>

class Contact extends BasePage<Props> {
    render() {
        return <div className="contact text-page base-page" ref={ref => this.container = ref}>
            <Helmet title="Contact - Cosy Cuppies" />
            <section>
                <h2>Contact</h2>
                <h3>Stephanie</h3>
                <p>For all enquiries please contact Stephanie</p>
                {MailTo("stephanie@cosycuppies.com.au")}
                <h3>ABN</h3>
                <p>88 239 232 322</p>
            </section>
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
