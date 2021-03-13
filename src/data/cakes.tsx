import Decimal from "decimal.js";
import { PreviewProps } from "../components/preview";

export enum CakeIds {
    Blue = "blue"
}

export type CakePreview = PreviewProps;

export const Cakes: CakePreview[] = [
    {
        imageSrc: "/assets/cakes/blue.jpg",
        imageAlt: "Blue and black themed tall cake topped with swirls and decorated with butterflies and silver",
        title: "Blue",
        link: CakeIds.Blue,
        basePrice: new Decimal(50)
    }
]