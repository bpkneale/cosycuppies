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
                <p>All of my cupcakes are baked and prepared from scratch, using free range eggs</p>
                <p>Stephanie bakes delicious treats for any occasion and is based in The Vines, Perth WA</p>
            </section>
            <section>
                <h3>Socials</h3>
                <p>For updates please follow me on instagram! {ExternalLink("https://www.instagram.com/cosycuppies")}</p>
            </section>
            <section>
                <h3>Storage</h3>
                <p>Cupcakes are made fresh for the required delivery date. Once you have received your order you should store the cupcakes in a dark, cool area. I do not recommend storing in a fridge as this affects the texture.</p>
            </section>
            <section>
                <h3>Ingredients</h3>
                <p>The ingredients of each cupcake flavour are listed below. The cupcakes are also made in a kitchen that prepare a variety of food items and I cannot guarantee cupcakes can be free from traces of other ingredients like nuts</p>
                <section>
                    <h4>Vanilla Cupcakes</h4>
                    <ul>
                        <li>Self-raising flour</li>
                        <li>Caster sugar</li>
                        <li>Butter</li>
                        <li>Free range eggs</li>
                        <li>Vanilla paste</li>
                    </ul>
                </section>
                <section>
                    <h4>Buttercream Frosting</h4>
                    <ul>
                        <li>Butter</li>
                        <li>Icing sugar</li>
                        <li>Milk</li>
                    </ul>
                </section>
            </section>
            <section>
                <h3>Website</h3>
                <p>Website designed by Ben Kneale. Copyright {DateTime.local().year}, all rights reserved</p>
                <p>This website makes use of free icons and images from {ExternalLink("https://www.stockio.com")}</p>
            </section>
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);
