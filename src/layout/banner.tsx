import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { CartShortcut } from "../components/cartshortcut";
import { isMobileDevice } from "../utils/device"
import MenuIcon from '@material-ui/icons/Menu';
import MenuOpenIcon from '@material-ui/icons/MenuOpen';

import "./banner.css"
import { AnalyticEvent } from "../state/cosy";
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

type State = {
    mobile: boolean;
    drawerOpen: boolean;
}

const test: React.MouseEventHandler<HTMLAnchorElement> = (e) => {}

const Links = (onClick?: (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void) => {
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

    onNavClick(e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        const { addAnalyticEvent } = this.props;
        const link = (e.target as any).innerText;
        addAnalyticEvent({
            action: "link",
            data: {
                timestamp: DateTime.local().toISO(),
                link
            }
        })
        this.setState({drawerOpen: false})
    }

    burgerMenu() {
        const { drawerOpen } = this.state;
        return <span className="burger-menu" onClick={() => this.setState({drawerOpen: !drawerOpen})}>
            {drawerOpen ? <MenuOpenIcon /> : <MenuIcon />}
        </span>
    }

    renderMobile(navOpen: boolean) {
        return <div className="primary-light banner">
            {this.burgerMenu()}
            <div>
                <h1>Stephanie's cosy cuppies, and more!</h1>
            </div>
            <div className={`primary-light navigation nav-drawer ${navOpen ? "open" : "closed"}`}>
                {this.burgerMenu()}
                {Links(this.onNavClick.bind(this))}
            </div>
            <CartShortcut />
        </div>
    }

    renderDesktop() {
        return <div className="primary-light banner">
            <img src="/assets/etc/Logo-crop-whitebg.png" alt="Logo"></img>
            <div className="title-nav-container">
                <div>
                    <h1>Stephanie's cosy cuppies, and more!</h1>
                </div>
                <div className="navigation">
                    {Links(this.onNavClick.bind(this))}
                </div>
            </div>
            <CartShortcut />
        </div>
    }

    render() {
        const { mobile, drawerOpen } = this.state;
        const navOpen = drawerOpen || !mobile;
        return mobile ? this.renderMobile(navOpen) : this.renderDesktop();
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
    addAnalyticEvent: (event: AnalyticEvent) => dispatch(addAnalytic(event))
})

export default connect(mapStateToProps, mapDispatchToProps)(Banner);
