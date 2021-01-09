import { DateTime } from "luxon";
import React from "react"
import { connect } from "react-redux";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class AboutPage extends React.Component<Props> {
    render() {
        return <div>
            <h2>About</h2>
            <section>
                <h3>Stephanie's Cosy Cuppies</h3>
                <p>Stephanie is a home baker passionate about making beautiful cupcakes that taste as great as they look</p>
            </section>
            <section>
                <h3>Website</h3>
                <p>Website designed by Cosy Designs. Copyright {DateTime.local().year}, all rights reserved</p>
            </section>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
