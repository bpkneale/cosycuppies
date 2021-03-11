import axios, { AxiosInstance } from "axios"
import luxon from "luxon";
import { CartContents } from "../state/cosy"
import 'react-native-get-random-values';

const DefaultApiBase = "https://api.cosycuppies.com.au";
let UniqueId: string;

try {
    const { v4 } = require("uuid");
    UniqueId = v4();
} catch(err) {
    UniqueId = "4"; // Determined by a fair dice roll. Guaranteed to be unique
}

export type Analytics = {
    payload: {
        id: string;
        host: string;
        action: string;
        [key: string]: any;
    }
}

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

    async submitAnalytics(action: string, data: {[key: string]: any}): Promise<any> {
        const analytics: Analytics = {
            payload: {
                id: UniqueId,
                host: window.location.host,
                action,
                ...data
            }
        }
        try {
            const resp = await this.io.post(`${this.apiBase}/analytics`, analytics);
            console.info({resp});
        } catch(err) {
            console.error({err});
        }
        return {};
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
