import React from "react"
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { CartShortcut } from "../components/cartshortcut";
import { isMobileDevice } from "../utils/device"

import "./banner.css"

type ComponentProps = {
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

type State = {
    mobile: boolean;
    drawerOpen: boolean;
}

const Links = (onClick?: () => void) => {
    return <React.Fragment>
        <NavLink onClick={onClick} exact to="/">Home</NavLink>
        <NavLink onClick={onClick} to="/cupcakes">Cupcakes</NavLink>
        <NavLink onClick={onClick} to="/cakes">Cakes</NavLink>
        <NavLink onClick={onClick} to="/and-more">And More!</NavLink>
        <NavLink onClick={onClick} to="/cart">Cart</NavLink>
        <NavLink onClick={onClick} to="/about">About</NavLink>
        <NavLink onClick={onClick} to="/contact">Contact</NavLink>
    </React.Fragment>
}

class Banner extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            mobile: isMobileDevice(),
            drawerOpen: false
        }
    }

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this))
    }

    handleResize() {
        this.setState({mobile: isMobileDevice()})
    }

    burgerMenu() {
        const { drawerOpen } = this.state;
        return <span className="burger-menu" onClick={() => this.setState({drawerOpen: !drawerOpen})}>
            <span></span>
            <span className="burgoin"></span>
            <span className="burgoin"></span>
            <span className="burgoin"></span>
            <span></span>
        </span>
    }

    render() {
        const { mobile, drawerOpen } = this.state;
        const navOpen = drawerOpen || !mobile;
        return <div className="primary-light banner">
            {mobile ? this.burgerMenu() : <img src="/assets/etc/Logo-crop-whitebg.png" alt="Logo"></img>}
            <div>
                <h1>Stephanie's cosy cuppies, and more!</h1>
            </div>
            {mobile ?
                <div className={`primary-light navigation nav-drawer ${navOpen ? "open" : "closed"}`}>
                    {this.burgerMenu()}
                    {Links(() => this.setState({drawerOpen: false}))}
                </div>
            :
                <div className="navigation">
                    {Links()}
                </div>
            }
            <CartShortcut />
        </div>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = () => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
