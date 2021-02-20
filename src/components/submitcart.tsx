import React from "react";
import { submitCart, cartSlice } from "../actions/api";
import { CartSubmit } from "../api/client";
import { DateTime, Duration } from "luxon";
import { AppDispatch, useAppDispatch, useAppState } from "../store/index";
import { useState } from "react";
import { KeyboardDatePicker } from "@material-ui/pickers";
import "./submitcart.css"
import { Button, FormControl, FormHelperText, TextField } from "@material-ui/core";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import PublishIcon from '@material-ui/icons/Publish';
import validator from "email-validator"

type Props = {};

export const SubmitCart = (props: Props) => {
    const cartContents = useAppState().cart;
    const [email, setEmail] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [delivery, setDelivery] = useState(false);
    const [deliveryAddress, setDeliveryAddress] = useState("");
    const [submitted, setSubmitted] = useState(false);
    const [selectedDate, handleDateChange] = useState(DateTime.local())
    const dispatch = useAppDispatch();

    const handleEmailInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setEmail(e.target.value);
        if(!emailValid) {
            setEmailValid(validator.validate(e.target.value))
        }
    }

    const onSubmit = () => {
        if(validator.validate(email)) {
            const cart: CartSubmit = {
                email,
                requiredBy: DateTime.local(),
                delivery,
                deliveryAddress,
                cart: cartContents
            }
            setSubmitted(true);
            dispatch(submitCart(cart) as any)
        } else {
            setEmailValid(false);
        }
    }

    return <div className="submit-cart">
        <p>To submit enquiry, please fill in below:</p>
        <FormControl color="secondary">
            <TextField color="secondary" required label="E-mail Address" onChange={handleEmailInput} />
            {emailValid ? null : <FormHelperText error>Please enter a valid email address</FormHelperText>}
        </FormControl>
        <KeyboardDatePicker
            color="secondary"
            label="Date Required"
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
        <FormControlLabel
            control={
                <Checkbox
                    checked={delivery}
                    onChange={e => setDelivery(e.target.checked)}
                    color="secondary"
                />
            }
            label="Delivery"
        />
        {delivery ? 
            <TextField color="secondary" required label="Delivery address" value={deliveryAddress} onChange={e => setDeliveryAddress(e.target.value)} />
        : null}
        <Button disabled={submitted} onClick={onSubmit} variant="contained" color="primary">
            <PublishIcon/>
            <span>Submit Enquiry</span>
        </Button>
        {submitted ? <p>Enquiry has been submitted, thank you!</p> : null}
    </div>
}
