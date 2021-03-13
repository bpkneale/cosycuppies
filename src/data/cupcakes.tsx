import Decimal from "decimal.js";
import { PreviewProps } from "../components/preview";

export enum CupcakeLinks {
    Custom = "custom",
    EnchantedForest = "enchanted-forest",
    BabyBlue = "baby-blue",
    BabyShower = "baby-shower",
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
        imageAlt: "Placeholder for a custom cupcake",
        link: CupcakeLinks.Custom,
        basePrice: null,
        description: "Have something in mind or seen a design you like? Let me know"
    },
    {
        title: "Enchanted Forest",
        imageSrc: "/assets/cupcakes/forest/thumb.jpg",
        imageAlt: "Cupcake with turqoise and pink swirls decorated with butterflies and sprinkles",
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
        title: "Baby Shower",
        imageSrc: "/assets/cupcakes/baby-shower/thumb.jpg",
        imageAlt: "Cupcake with assortment of swirls of baby blue, yellow, purple and pink, decorated with sprinkles and `oh baby` toppers",
        link: CupcakeLinks.BabyShower,
        hasTopper: true,
        basePrice: ComplexSwirlPrice.plus(1.4),
        description: "Gorgeous colours and swirls to celebrate a baby shower. Includes `Oh Baby` toppers.",
        carousel: [
            "/assets/cupcakes/baby-shower/1.jpg",
            "/assets/cupcakes/baby-shower/2.jpg",
            "/assets/cupcakes/baby-shower/3.jpg",
            "/assets/cupcakes/baby-shower/4.jpg",
            "/assets/cupcakes/baby-shower/5.jpg"
        ]
    },
    {
        title: "Mouse",
        imageSrc: "/assets/cupcakes/mouse/thumb.jpg",
        imageAlt: "Pink and white, and yellow and red cupcakes with fondant mouse ears",
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
        imageSrc: "/assets/cupcakes/valentines/thumb.jpg",
        imageAlt: "Valentines themed cupcakes with pink, red, and white swirls and love heart toppers",
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
        imageSrc: "/assets/cupcakes/halloween/thumb.jpg",
        imageAlt: "Green and black, and pink and black swirl cupcakes with colourful sprinkles and edible eyes",
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
        imageSrc: "/assets/cupcakes/nude/thumb.jpg",
        imageAlt: "Cupcake with a natural skin tone colour swirl",
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
        imageSrc: "/assets/cupcakes/lavender/thumb.jpg",
        imageAlt: "Cupcake with a deep lavender tone colour swirl",
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
        imageSrc: "/assets/cupcakes/xmas/thumb.jpg",
        imageAlt: "Red and green swirl cupcakes with christmas sprinkles. Swirl shapes such as christmas tree, bon bons, and mixed",
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
        imageSrc: "/assets/cupcakes/bouquet/thumb.jpg",
        imageAlt: "Cupcakes with flower coloured and shaped swirls, arranged like a bouquet of flowers.",
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
