import React from "react"
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BasePage } from "./base";
import { getVisitorInfo } from "../utils/analytics";
import "./home.css"
import { ApiClient } from "../api/client";
import { CosyState } from "../state/cosy";
import { isMobileDevice } from "../utils/device";
import { Helmet } from "react-helmet";

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

type DisplayItem = {
    src: string;
    text: string;
}

const DisplayItems: DisplayItem[] = [
    {
        src: "/assets/cupcakes/forest/1.jpg",
        text: "Bespoke hand-made cupcakes for any occasion"
    },
    {
        src: "/assets/carousel/6.jpg",
        text: "Add a Wow factor to your next celebration"
    },
    {
        src: "/assets/carousel/5.jpg",
        text: "Customisable flavours, swirls, and more"
    },
    {
        src: "/assets/cupcakes/valentines/4.jpg",
        text: "Made with care in The Vines, Perth"
    },
    {
        src: "/assets/carousel/4.jpg",
        text: "Perfect for birthdays, celebrations, and more"
    },
    {
        src: "/assets/cakes/blue.jpg",
        text: "Not just cupcakes!"
    }
]

class HomePage extends BasePage<Props> {

    renderMobile() {
        return <div className="home base-page" ref={ref => this.container = ref}>
            <p>Beautiful hand-made cupcakes and more, made fresh in The Vines, Perth. Delivery available!</p>
            <div className="mobile-container">
                {DisplayItems.map(i => (
                    <div key={i.src}>
                        <img src={i.src} alt="Cupcake image" />
                        <p>{i.text}</p>
                    </div>
                ))}
            <p>Use the menu on the left for more</p>
            </div>
        </div>
    }

    renderDesktop() {
        return <div className="home base-page" ref={ref => this.container = ref}>
            <Helmet title="Home - Cosy Cuppies" />
            <p>Beautiful hand-made cupcakes and more, made fresh in The Vines, Perth. Delivery available!</p>
            <div className="carousel-container">
                <Carousel className="carousel" autoPlay={true} infiniteLoop={true} interval={5000}>
                    {DisplayItems.map(i => (
                        <div key={i.src}>
                            <img src={i.src} alt="Cupcake image" />
                            <p>{i.text}</p>
                        </div>
                    ))}
                </Carousel>
            </div>
        </div>
    }

    render() {
        const isMobile = isMobileDevice();
        return isMobile ? this.renderMobile() : this.renderDesktop();
    }
}

const mapStateToProps = (state: CosyState) => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
