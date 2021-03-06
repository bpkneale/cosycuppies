import React from "react"
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BasePage } from "./base";
import { getVisitorInfo } from "../utils/analytics";
import "./home.css"
import { ApiClient } from "../api/client";
import { CosyState } from "../state/cosy";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class HomePage extends BasePage<Props> {

    render() {
        return <div className="home base-page" ref={ref => this.container = ref}>
            <div className="carousel-container">
                <Carousel className="carousel" autoPlay={true} infiniteLoop={true} interval={5000}>
                    <div>
                        <img src="/assets/cupcakes/forest/1.jpg" />
                        <p>Bespoke hand-made cupcakes for any occasion</p>
                    </div>
                    <div>
                        <img src="/assets/carousel/5.jpg" />
                        <p>Customisable flavours, swirls, and more</p>
                    </div>
                    <div>
                        <img src="/assets/cupcakes/valentines/4.jpg" />
                        <p>Made with care in The Vines, Perth</p>
                    </div>
                    <div>
                        <img src="/assets/carousel/4.jpg" />
                        <p>Perfect for birthdays, celebrations, and more</p>
                    </div>
                    <div>
                        <img src="/assets/cakes/blue.jpg" />
                        <p>Not just cupcakes!</p>
                    </div>
                </Carousel>
            </div>
        </div>
    }
}

const mapStateToProps = (state: CosyState) => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
