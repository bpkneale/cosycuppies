import React from "react"
import Redux from "redux";
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import { Redirect } from "react-router";
import { CupcakeConfiguration } from "../components/cupcakeconfiguration";
import { UpButton } from "../components/upbutton";
import { CupcakePreview, Lookup } from "../data/cupcakes";
import { AnalyticEvent } from "../state/cosy";
import { getTopLocation } from "../utils/location"
import { BasePage } from "./base";
import "./cupcake.css"
import { addAnalytic } from "../actions/cosy";
import { DateTime } from "luxon";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
    addAnalyticEvent: (event: AnalyticEvent) => void;
}

type Props = ComponentProps & StateProps & DispatchProps;

class CupcakeUnc extends BasePage<Props> {
    componentDidMount() {
        const { addAnalyticEvent } = this.props;
        const cc = Lookup(getTopLocation())
        addAnalyticEvent({
            action: "preview",
            data: {
                timestamp: DateTime.local().toISO(),
                title: cc?.title,
                link: cc?.link
            }
        })
    }

    renderCupcakeImages(cc: CupcakePreview) {
        if(cc.carousel) {
            return ( 
                <div className="carousel-container">
                    <Carousel className="carousel" autoPlay={true} infiniteLoop={true} interval={3000}>
                        {cc.carousel.map(c => <div key={c}>
                            <img src={c} alt={`A cupcake of style ${cc.title}`}></img>
                        </div>)}
                    </Carousel>
                </div>
            )
        } else {
            return <div className="img-container">
                <img src={cc.imageSrc} alt={`A cupcake of style ${cc.title}`}></img>
            </div>
        }
    }

    render() {
        const cc = Lookup(getTopLocation())
        if(!cc) {
            return <Redirect to="/not-found" />
        }
        return <div className="cupcake base-page" ref={ref => this.container = ref}>
            <div className="cupcake-nav">
                <UpButton />
                <h2>{cc.title}</h2>
                <UpButton layoutOnly />
            </div>
            <div className="cupcake-details">
                <section className="cupcake-images">
                    {this.renderCupcakeImages(cc)}
                </section>
                <section className="cupcake-detail">
                    <p>{cc.description}</p>
                    <CupcakeConfiguration id={cc.link} />
                </section>
            </div>
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    addAnalyticEvent: (event: AnalyticEvent) => dispatch(addAnalytic(event))
})

export const Cupcake = connect(mapStateToProps, mapDispatchToProps)(CupcakeUnc);
