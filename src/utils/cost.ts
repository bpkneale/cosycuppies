import { CartItem } from "../state/cosy"
import { Lookup, QuantityDiscount, BoxCost, MetallicBase, CakeTopperPriceFrom, ChocolateCostEa } from "../data/cupcakes"
import Decimal from "decimal.js";

export const EstimateCost = (item: CartItem): Decimal => {
    if(item.cupcake !== undefined) {
        const cupcake = Lookup(item.cupcake.id);
        if(!cupcake) {
            throw new Error("Unable to lookup cupcake")
        }
        let cost = new Decimal(cupcake.basePrice);
        const discount = QuantityDiscount[item.cupcake.amount];
        const boxCost = item.cupcake.box ? BoxCost[item.cupcake.amount] : new Decimal(0);
        const cupCost = item.cupcake.metallicBase ? MetallicBase : new Decimal(0);
        const topperCost = item.cupcake.topper ? CakeTopperPriceFrom : new Decimal(0);
        const chocCost = item.cupcake.cupcakeFlavour.id === "chocolate" ? ChocolateCostEa : new Decimal(0);
        if(discount && boxCost) {
            const cupCostQty = cupCost.mul(item.cupcake.amount);
            const topperCostQty = topperCost.mul(item.cupcake.amount / 2);
            cost = cost.plus(chocCost).mul(item.cupcake.amount).mul(discount).div(100);
            cost = cost.add(boxCost);
            cost = cost.add(cupCostQty);
            cost = cost.add(topperCostQty);
        } else {
            throw new Error("Unable to lookup discount or box cost");
        }
        return cost;
    }
    else {
        throw new Error("Unable to find item")
    }
}