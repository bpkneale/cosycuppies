import { useHistory, useLocation } from "react-router-dom";
import "./upbutton.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';

type Props = {
    layoutOnly?: boolean;
}

export const UpButton = (props: Props) => {
    const history = useHistory();
    const { pathname } = useLocation();

    const onClick = () => {
        const splot = pathname.split("/");
        splot.pop();
        history.push(splot.join("/"))
    }

    return <div className={`up-button ${props.layoutOnly ? "layout" : ""}`} onClick={onClick}>
        <ArrowBackIcon />
        <a className="up-button">Back</a>
    </div>
}
