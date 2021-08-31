import React from "react"
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { BasePage } from "./base";
import "./home.css"
import { CosyState } from "../state/cosy";
import { isMobileDevice } from "../utils/device";
import { Helmet } from "react-helmet";
import { CupcakePreviews, CupcakeLinks } from "../data/cupcakes"
import { Cakes, CakeIds } from "../data/cakes"

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
    alt?: string;
    height?: string;
    width?: string;
}

const DisplayItems: DisplayItem[] = [
    {
        src: "/assets/cupcakes/forest/1.jpg",
        text: "Bespoke hand-made cupcakes for any occasion",
        alt: CupcakePreviews.find(p => p.link === CupcakeLinks.EnchantedForest)?.imageAlt
    },
    {
        src: "/assets/carousel/8.jpg",
        text: "Available for delivery",
        alt: CupcakePreviews.find(p => p.link === CupcakeLinks.EnchantedForest)?.imageAlt
    },
    {
        src: "/assets/carousel/6.jpg",
        text: "Add a Wow factor to your next celebration",
        alt: "72 cupcakes in deep purple and skin colour themed for a 30th birthday with toppers",
        width: "1980",
        height: "786"
    },
    {
        src: "/assets/carousel/9.jpg",
        text: "Made with care in The Vines, Perth",
        alt: "6 cupcakes with various swirls and pastel colours and sprinkles"
    },
    {
        src: "/assets/carousel/11.jpg",
        text: "Customisable flavours, swirls, toppers, and more",
        alt: "A series of cupcakes with ombre swirls and butterflies"
    },
    {
        src: "/assets/carousel/5.jpg",
        text: "Get in touch with your occasion or idea",
        alt: CupcakePreviews.find(p => p.link === CupcakeLinks.Mouse)?.imageAlt
    },
    {
        src: "/assets/carousel/12.jpg",
        text: "Perfect for birthdays, celebrations, and more",
        alt: "Dusty coloured cupcake with butterfly decorations"
    },
    {
        src: "/assets/carousel/4.jpg",
        text: "Ready for your next occasion",
        alt: "A boxed set of cupcakes ready for for the customer"
    },
    {
        src: "/assets/cakes/4.jpg",
        text: "Not just cupcakes!",
        alt: Cakes.find(p => p.link === CakeIds.PinkBirthday)?.imageAlt
    }
]

class HomePage extends BasePage<Props> {

    renderMobile() {
        return <div className="home base-page" ref={ref => this.container = ref}>
            <p>Beautiful hand-made cupcakes and more, made fresh in The Vines, Perth. Delivery available!</p>
            <div className="mobile-container">
                {DisplayItems.map(i => (
                    <div key={i.src}>
                        <img height={i.height ?? "1000"} width={i.width ?? "1500"} src={i.src} alt={i.alt} />
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
                            <img height={i.height ?? "1000"} width={i.width ?? "1500"} src={i.src} alt={i.alt} />
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
