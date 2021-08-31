import Decimal from "decimal.js";
import { PreviewProps } from "../components/preview";

export enum CakeIds {
    Blue = "blue",
    Bluey = "bluey",
    PinkBirthday = "pink-birthday"
}

export type CakePreview = PreviewProps & {
    description: string;
};

export const Cakes: CakePreview[] = [
    {
        imageSrc: "/assets/cakes/blue.jpg",
        imageAlt: "Blue and black themed tall cake topped with swirls and decorated with butterflies and silver",
        title: "Blue",
        link: CakeIds.Blue,
        basePrice: new Decimal(50),
        description: ""
    },
    {
        imageSrc: "/assets/cakes/3.jpg",
        imageAlt: "Bluey themed cake",
        title: "Childrens birthdays",
        link: CakeIds.Bluey,
        basePrice: new Decimal(50),
        description: "Cute and cosy cakes for childrens birthdays"
    },
    {
        imageSrc: "/assets/cakes/4.jpg",
        imageAlt: "Pink birthday cake",
        title: "Adult birthdays",
        link: CakeIds.PinkBirthday,
        basePrice: new Decimal(50),
        description: "Bespoke and beautiful cakes made to your specification"
    }
]