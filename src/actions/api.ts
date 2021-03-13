import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ApiClient, CartSubmit } from "../api/client";

export const submitCart = createAsyncThunk('api/cart/submit', async (cart: CartSubmit) => {
    const client = new ApiClient();
    const response = await client.submitCart(cart);
    return response;
});

enum ApiState {
    None,
    Pending,
    Success,
    Failure
};

export const cartSlice = createSlice({
    name: "cartSubmit",
    initialState: { apiState: ApiState.None, apiReply: {} },
    reducers: {
        
    },
    extraReducers: builder => {
        builder.addCase(submitCart.pending, (state, action) => {
            return {
                apiState: ApiState.Pending,
                apiReply: state.apiReply
            }
        });
        builder.addCase(submitCart.fulfilled, (state, action) => {
            return {
                apiState: ApiState.Success,
                apiReply: action.payload
            }
        });
        builder.addCase(submitCart.rejected, (state, action) => {
            return {
                apiState: ApiState.Failure,
                apiReply: state.apiReply
            }
        });
    }
})
