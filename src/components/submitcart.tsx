import React from "react";
import { submitCart, cartSlice } from "../actions/api";
import { CartSubmit } from "../api/client";
import { DateTime, Duration } from "luxon";
import { AppDispatch, useAppDispatch, useAppState } from "../store/index";
import { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import "./submitcart.css"

type Props = {};

export const SubmitCart = (props: Props) => {
    const cartContents = useAppState().cart;
    const [email, setEmail] = useState("");
    const [delivery, setDelivery] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [selectedDate, handleDateChange] = useState(DateTime.local())
    const dispatch = useAppDispatch();

    const onSubmit = () => {
        const cart: CartSubmit = {
            email,
            requiredBy: DateTime.local(),
            delivery,
            deliveryAddress,
            cart: cartContents
        }
        setSubmitted(true);
        dispatch(submitCart(cart) as any)
    }

    return <div className="submit-cart">
        <p>To submit enquiry, please fill in below:</p>
        <label>E-mail Address:</label>
        <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
        <label>Date Required:</label>
        <KeyboardDatePicker
            disableToolbar
            variant="inline"
            format="dd/MM/yyyy"
            margin="normal"
            id="date-picker-inline"
            autoOk
            value={selectedDate}
            onChange={e => handleDateChange(e ?? DateTime.local())}
            KeyboardButtonProps={{
                'aria-label': 'change date',
            }}
        />
        <div>
            <input id="delivery" type="checkbox" checked={delivery} onChange={e => setDelivery(e.target.checked)}/>
            <label htmlFor="delivery">Delivery required</label>
        </div>
        {delivery ? 
            <React.Fragment>
                <label>Delivery address</label>
                <input type="text" value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} />
            </React.Fragment>
        : null}
        <button disabled={submitted} type="submit" onClick={onSubmit}>Submit Enquiry</button>
        {submitted ? <p>Enquiry has been submitted, thank you!</p> : null}
    </div>
}
