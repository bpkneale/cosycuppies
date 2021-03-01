import Decimal from "decimal.js";
import { PreviewProps } from "../components/preview";

enum CupcakeLinks {
    Custom = "custom",
    EnchantedForest = "enchanted-forest",
    BabyBlue = "baby-blue",
    Mouse = "mouse",
    Nude = "nude",
    Lavender = "lavender",
    Bouquet = "bouquet",
    Halloween = "halloween",
    Christmas = "christmas",
    Valentines = "valentines"
}

export const Quantities = [
    4,
    6,
    12,
    24,
    32,
    48,
    72
]

export const QuantityDiscount: Record<number, Decimal | undefined> = {
    4: new Decimal(110),
    6: new Decimal(105),
    12: new Decimal(100),
    24: new Decimal(95),
    32: new Decimal(90),
    48: new Decimal(85),
    72: new Decimal(80)
}

export const BoxCost: Record<number, Decimal | undefined> = {
    4: new Decimal(2),
    6: new Decimal(2),
    12: new Decimal(3.1),
    24: new Decimal(4.5),
    32: new Decimal(7.6),
    48: new Decimal(9),
    72: new Decimal(13.5)
}

export const CakeTopperPriceFrom = new Decimal(1);
export const MetallicBase = new Decimal(0.125);

export type CupcakePreview = PreviewProps & {
    description: string;
    hasTopper?: boolean;
}

const DefaultBasePrice = new Decimal(2.7);
const ComplexSwirlPrice = new Decimal(3.94);
export const ChocolateCostEa = new Decimal(0.3);

export const CupcakePreviews: CupcakePreview[] = [
    {
        title: "Custom",
        imageSrc: "/assets/etc/custom.png",
        link: CupcakeLinks.Custom,
        basePrice: null,
        description: "Have something in mind or seen a design you like? Let me know"
    },
    {
        title: "Enchanted Forest",
        imageSrc: "/assets/cupcakes/forest/1.jpg",
        link: CupcakeLinks.EnchantedForest,
        basePrice: ComplexSwirlPrice,
        description: "A whimsical mix of colours and butterflies",
        carousel: [
            "/assets/cupcakes/forest/1.jpg",
            "/assets/cupcakes/forest/2.jpg",
            "/assets/cupcakes/forest/3.jpg"
        ]
    },
    {
        title: "Mouse",
        imageSrc: "/assets/cupcakes/mouse/2.jpg",
        link: CupcakeLinks.Mouse,
        basePrice: ComplexSwirlPrice,
        description: "Beautiful mouse themed cupcakes with fondant ears",
        carousel: [
            "/assets/cupcakes/mouse/1.jpg",
            "/assets/cupcakes/mouse/2.jpg",
            "/assets/cupcakes/mouse/3.jpg",
            "/assets/cupcakes/mouse/4.jpg"
        ]
    },
    {
        title: "Valentines",
        imageSrc: "/assets/cupcakes/valentines/4.jpg",
        link: CupcakeLinks.Valentines,
        hasTopper: true,
        basePrice: ComplexSwirlPrice.plus(1.4),
        description: "Delicate and bespoke cupcakes, the perfect gift for your special someone. Includes cake toppers as pictured",
        carousel: [
            "/assets/cupcakes/valentines/1.jpg",
            "/assets/cupcakes/valentines/2.jpg",
            "/assets/cupcakes/valentines/3.jpg",
            "/assets/cupcakes/valentines/4.jpg",
            "/assets/cupcakes/valentines/5.jpg"
        ]
    },
    {
        title: "Halloween",
        imageSrc: "/assets/cupcakes/halloween/1.jpg",
        link: CupcakeLinks.Halloween,
        basePrice: DefaultBasePrice,
        description: "Spooky and scary cupcakes for a halloween celebration",
        carousel: [
            "/assets/cupcakes/halloween/1.jpg",
            "/assets/cupcakes/halloween/2.jpg",
            "/assets/cupcakes/halloween/3.jpg",
            "/assets/cupcakes/halloween/4.jpg"
        ]
    },
    {
        title: "Nude",
        imageSrc: "/assets/cupcakes/box-nude.jpg",
        link: CupcakeLinks.Nude,
        basePrice: DefaultBasePrice,
        description: "A naturally beautiful and classic colour",
        carousel: [
            "/assets/cupcakes/nude/1.jpg",
            "/assets/cupcakes/nude/2.jpg",
            "/assets/cupcakes/nude/3.jpg",
            "/assets/cupcakes/nude/4.jpg"
        ]
    },
    {
        title: "Lavender",
        imageSrc: "/assets/cupcakes/lavender/1.jpg",
        link: CupcakeLinks.Lavender,
        basePrice: DefaultBasePrice,
        description: "Deep lavender colour with rose swirl",
        carousel: [
            "/assets/cupcakes/lavender/1.jpg",
            "/assets/cupcakes/lavender/2.jpg",
            "/assets/cupcakes/lavender/3.jpg",
            "/assets/cupcakes/lavender/4.jpg"
        ]
    },
    {
        title: "Christmas",
        imageSrc: "/assets/cupcakes/xmas/1.jpg",
        link: CupcakeLinks.Christmas,
        basePrice: ComplexSwirlPrice,
        description: "Festive red and green with beautiful sprinkles",
        carousel: [
            "/assets/cupcakes/xmas/1.jpg",
            "/assets/cupcakes/xmas/2.jpg",
            "/assets/cupcakes/xmas/3.jpg",
            "/assets/cupcakes/xmas/4.jpg",
            "/assets/cupcakes/xmas/5.jpg"
        ]
    },
    {
        title: "Bouquet",
        imageSrc: "/assets/cupcakes/bouquet/1.jpg",
        link: CupcakeLinks.Bouquet,
        basePrice: DefaultBasePrice,
        description: "Arrangement of flower themed cupcakes in a bouquet, perfect for valentines day",
        carousel: [
            "/assets/cupcakes/bouquet/1.jpg",
            "/assets/cupcakes/bouquet/2.jpg",
            "/assets/cupcakes/bouquet/3.jpg",
            "/assets/cupcakes/bouquet/4.jpg",
            "/assets/cupcakes/bouquet/5.jpg"
        ]
    },
]

export const Lookup = (link: string): CupcakePreview | undefined => {
    return CupcakePreviews.find(p => p.link === link);
}
