import { Button } from "@material-ui/core"
import { Link } from "react-router-dom"
import "./get-in-contact.css"

type Props = {
  message?: string
}

export const GetInContact = (props: Props) => {
  return <div className="get-in-contact">
    <Link to="/contact">
      <Button variant="contained" color="primary">
        Get in contact {props.message}
      </Button>
    </Link>
  </div>
}