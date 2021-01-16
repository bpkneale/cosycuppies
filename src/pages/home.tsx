import React from "react"
import { connect } from "react-redux";
import { Carousel } from "react-responsive-carousel"
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "./home.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class HomePage extends React.Component<Props> {
    render() {
        return <div className="home">
            <div className="carousel-container">
                <Carousel className="carousel" autoPlay={true} infiniteLoop={true} interval={5000}>
                    <div>
                        <img src="/assets/carousel/1.jpg" />
                        <p>Bespoke hand-made cupcakes for any occasion</p>
                    </div>
                    <div>
                        <img src="/assets/carousel/2.jpg" />
                        <p>Customisable flavours, swirls, and more</p>
                    </div>
                    <div>
                        <img src="/assets/carousel/3.jpg" />
                        <p>Not just cupcakes!</p>
                    </div>
                </Carousel>
            </div>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
