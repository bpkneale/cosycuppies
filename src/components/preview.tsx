import React from "react"
import { connect } from "react-redux";
import "./preview.css"

export type PreviewProps = {
    imageSrc: string;
    title: string;
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
        return <div className="preview hover-primary-light-bg">
            <h3>{prev.title}</h3>
            <img src={prev.imageSrc}></img>
        </div>
    }
}

const mapStateToProps = () => {
}

const mapDispatchToProps = () => {
}

export default connect(mapStateToProps, mapDispatchToProps)(Preview);
