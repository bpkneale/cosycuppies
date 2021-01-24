import { CupcakeFlavour } from "../data/cupcakeflavours";
import { FrostingFlavour } from "../data/frostingflavours";

export type CartContents = CartItem[];

export type CartItem = {
    cupcake?: CupcakeOrder;
    cake?: CakeOrder;
}

export type CupcakeOrder = {
    id: string;
    amount: number;
    cupcakeFlavour: CupcakeFlavour;
    frostingFlavour: FrostingFlavour;
    box: boolean;
}

export type CakeOrder = {
    id: string;
    amount: number;
    cupcakeFlavour: CupcakeFlavour;
    frostingFlavour: FrostingFlavour;
    box: boolean;
}

export type CosyState = {
    cart: CartContents;
    toast?: string;
}
