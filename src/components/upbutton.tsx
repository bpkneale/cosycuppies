import { useHistory, useLocation } from "react-router-dom";
import "./upbutton.css"

type Props = {
}

export const UpButton = (props: Props) => {
    const history = useHistory();
    const { pathname } = useLocation();

    const onClick = () => {
        const splot = pathname.split("/");
        splot.pop();
        history.push(splot.join("/"))
    }

    return <a className="up-button" onClick={onClick}>Back</a>
}
