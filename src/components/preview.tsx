import Decimal from "decimal.js";
import React from "react"
import Redux from "redux"
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import "./preview.css"

export type PreviewProps = {
    imageSrc: string;
    imageAlt: string;
    title: string;
    link: string;
    basePrice: Decimal | null;
    carousel?: string[];
}

type ComponentProps = {
    prev: PreviewProps;
}

type StateProps = {
}

type DispatchProps = {
}

type Props = ComponentProps & StateProps & DispatchProps;

class Preview extends React.Component<Props> {

    render() {
        const { prev } = this.props;
        return <NavLink className="preview" to={`${window.location.pathname}/${prev.link}`}>
            <div className="preview hover-primary-light-bg">
                <h3>{prev.title}</h3>
                <img height="1000" width="1500" src={prev.imageSrc} alt={prev.imageAlt}></img>
            </div>
        </NavLink>
    }
}

const mapStateToProps = () => ({
})

const mapDispatchToProps = (dispatch: Redux.Dispatch) => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
