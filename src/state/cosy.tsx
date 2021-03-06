import { CupcakeFlavour } from "../data/cupcakeflavours";
import { FrostingFlavour } from "../data/frostingflavours";

export type CartContents = CartItem[];

export type CartItem = {
    cupcake?: CupcakeOrder;
    cake?: CakeOrder;
}

export type BaseOrder = {
    id: string;
    extraInformation: string;
}

export type CupcakeOrder = BaseOrder & {
    amount: number;
    cupcakeFlavour: CupcakeFlavour;
    frostingFlavour: FrostingFlavour;
    box: boolean;
    metallicBase: boolean;
    topper: boolean;
}

export type CakeOrder = BaseOrder & {
    amount: number;
    cupcakeFlavour: CupcakeFlavour;
    frostingFlavour: FrostingFlavour;
    box: boolean;
}

export type AnalyticEvent = {
    action: string;
    data: {[key: string]: any};
}

export type CosyState = {
    cart: CartContents;
    toast?: string;
    analytics: AnalyticEvent[];
}
