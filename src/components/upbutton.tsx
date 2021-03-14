import { useHistory, useLocation } from "react-router-dom";
import "./upbutton.css"
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Button } from "@material-ui/core";

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

    if(props.layoutOnly) {
        return <div className="up-button layout"></div>
    } else {
        return <Button aria-label="Go back"
            onClick={onClick} variant="contained" color="primary">
            <ArrowBackIcon />
        </Button>
    }

}
