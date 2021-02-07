import { submitCart, cartSlice } from "../actions/api";
import DatePicker from "react-datepicker";
import { CartSubmit } from "../api/client";
import { DateTime } from "luxon";
import { AppDispatch, useAppDispatch, useAppState } from "../store/index";

type Props = {};

export const SubmitCart = (props: Props) => {
    const cartContents = useAppState().cart;
    const dispatch = useAppDispatch();

    const onSubmit = () => {
        const cart: CartSubmit = {
            email: "",
            requiredBy: DateTime.local(),
            cart: cartContents
        }
        dispatch(submitCart(cart) as any)
    }

    return <div className="submit-cart">
        <p>To submit enquiry, please fill in below:</p>
        <label>
            E-mail Address
            <input type="text" />
        </label>
        <label>
            Date Required
            {/* <DatePicker /> */}
        </label>
        <label>
            
            <input type="checkbox" />
        </label>
        <button type="submit" onClick={onSubmit}>Submit Enquiry</button>
    </div>
}
