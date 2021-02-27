import { CartItem } from "../state/cosy"
import { Lookup, QuantityDiscount, BoxCost } from "../data/cupcakes"
import Decimal from "decimal.js";

export const EstimateCost = (item: CartItem): Decimal => {
    if(item.cupcake !== undefined) {
        const cupcake = Lookup(item.cupcake.id);
        if(!cupcake) {
            throw new Error("Unable to lookup cupcake")
        }
        let cost = new Decimal(cupcake.basePrice);
        const discount = QuantityDiscount[item.cupcake.amount];
        const boxCost = item.cupcake.box ? BoxCost[item.cupcake.amount] : new Decimal(0)
        if(discount && boxCost) {
            debugger;
            cost = cost.mul(item.cupcake.amount).mul(discount).div(100);
            cost = cost.add(boxCost);
        } else {
            throw new Error("Unable to lookup discount or box cost");
        }
        return cost;
    }
    else {
        throw new Error("Unable to find item")
    }
}