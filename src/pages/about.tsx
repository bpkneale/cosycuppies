import { DateTime } from "luxon";
import React from "react"
import { connect } from "react-redux";
import "./common.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

const ExternalLink = (href: string) => <a href={href}>{href}</a>

class AboutPage extends React.Component<Props> {
    render() {
        return <div className="text-page">
            <h2>About</h2>
            <section>
                <h3>Stephanie's Cosy Cuppies</h3>
                <p>Stephanie is a home baker passionate about making beautiful cupcakes that taste as great as they look</p>
            </section>
            <section>
                <h3>Socials</h3>
                <p>For updates please follow me on instagram! {ExternalLink("https://www.instagram.com/cosycuppies")}</p>
            </section>
            <section>
                <h3>Website</h3>
                <p>Website designed by Cosy Designs. Copyright {DateTime.local().year}, all rights reserved</p>
                <p>This website makes use of free icons and images from {ExternalLink("https://www.stockio.com")}</p>
            </section>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
