import { Helmet } from "react-helmet";
import { connect } from "react-redux";
import { Cake } from "../components/cake";
import { GetInContact } from "../components/get-in-contact";
import * as Data from "../data/cakes";
import { BasePage } from "./base";
import "./cakes.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Cakes extends BasePage<Props> {
    render() {
        return <div className="base-page cake-page" ref={ref => this.container = ref}>
            <Helmet title="Cakes - Cosy Cuppies" />
            <h2 className="centre">Custom designed cakes for your special occasion</h2>
            <div className="cake-list">
                {Data.Cakes.slice(1).map(cake => <Cake key={cake.link} cake={cake} />)}
            </div>
            <GetInContact message="to design your perfect cake order" />
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Cakes);
