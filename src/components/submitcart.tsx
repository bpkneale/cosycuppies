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
    const [name, setName] = useState("");
    const [emailValid, setEmailValid] = useState(true);
    const [addressValid, setAddressValid] = useState(true);
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

    const handleAddressInput = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setDeliveryAddress(e.target.value);
        if(!addressValid) {
            setAddressValid(!delivery || deliveryAddress.length > 5)
        }
    }

    const handleDeliveryCheckbox = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDelivery(e.target.checked)
        if(!e.target.checked && !addressValid) {
            setAddressValid(true);
        }
    }

    const onSubmit = () => {
        const tempEmailValid = validator.validate(email);
        const tempAddrValid = !delivery || deliveryAddress.length > 5;
        if(tempAddrValid && tempEmailValid) {
            const cart: CartSubmit = {
                email,
                name,
                requiredBy: DateTime.local(),
                delivery,
                deliveryAddress,
                cart: cartContents
            }
            setSubmitted(true);
            dispatch(submitCart(cart) as any)
        } else {
            setAddressValid(tempAddrValid)
            setEmailValid(tempEmailValid);
        }
    }

    return <div className="submit-cart">
        <p>To submit enquiry, please fill in below:</p>
        <TextField color="secondary" value={name} required label="Name" onChange={e => setName(e.target.value)} />
        <FormControl color="secondary">
            <TextField color="secondary" value={email} required label="E-mail Address" onChange={handleEmailInput} />
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
            disablePast
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
                    onChange={handleDeliveryCheckbox}
                    color="secondary"
                />
            }
            label="Delivery (may occur additional charge)"
        />
        {delivery ? 
            <FormControl color="secondary">
                <TextField color="secondary" required label="Delivery address" value={deliveryAddress} onChange={handleAddressInput} />    
                {addressValid ? null : <FormHelperText error>Please enter a valid delivery address</FormHelperText>}
            </FormControl>
        : null}
        <Button disabled={submitted} onClick={onSubmit} variant="contained" color="primary">
            <PublishIcon/>
            <span>Submit Enquiry</span>
        </Button>
        {submitted ? <p>Enquiry has been submitted, thank you!</p> : null}
    </div>
}
