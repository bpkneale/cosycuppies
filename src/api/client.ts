import axios, { AxiosInstance } from "axios"
import luxon from "luxon";
import { CartContents } from "../state/cosy"

const DefaultApiBase = "https://api.cosycuppies.com.au";

export type CartSubmit = {
    email: string;
    name: string;
    requiredBy: luxon.DateTime;
    delivery: boolean;
    deliveryAddress: string;
    estimatedCost: string;
    cart: CartContents;
}

export type Reply = {
    success?: boolean;
    status?: string;
    extra?: string;
}

export class ApiClient {

    apiBase: string;
    io: AxiosInstance;

    constructor(apiBase: string = DefaultApiBase, io: AxiosInstance = axios) {
        this.apiBase = apiBase;
        this.io = io ?? axios;
    }

    async submitCart(cart: CartSubmit): Promise<Reply> {
        const send = {
            enquiry: {
                ...cart,
                email: cart.email,
                requiredBy: cart.requiredBy.toISO(),
                cart: cart.cart
            }
        }
        let reply: Reply = {};
        try {
            const resp = await this.io.post<Reply>(`${this.apiBase}/cart/submit`, send);
            reply = resp.data;

        } catch(err) {
            reply = {
                success: false,
                status: "API call failed",
                extra: err
            }
        }
        return reply;
    }
    
}
