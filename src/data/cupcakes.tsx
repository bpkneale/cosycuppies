import { PreviewProps } from "../components/preview";

enum CupcakeLinks {
    EnchantedForest = "enchanted-forest",
    BabyBlue = "baby-blue",
    Mouse = "mouse",
    Nude = "nude",
    Lavender = "lavender",
    Bouquet = "bouquet",
    Halloween = "halloween",
    Christmas = "christmas"
}

export type CupcakePreview = PreviewProps & {
    description: string;
}

export const CupcakePreviews: CupcakePreview[] = [
    {
        title: "Enchanted Forest",
        imageSrc: "/assets/cupcakes/forest/1.jpg",
        link: CupcakeLinks.EnchantedForest,
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
        description: "Beautiful mouse themed cupcakes with fondant ears",
        carousel: [
            "/assets/cupcakes/mouse/1.jpg",
            "/assets/cupcakes/mouse/2.jpg",
            "/assets/cupcakes/mouse/3.jpg",
            "/assets/cupcakes/mouse/4.jpg"
        ]
    },
    {
        title: "Bouquet",
        imageSrc: "/assets/cupcakes/bouquet/1.jpg",
        link: CupcakeLinks.Bouquet,
        description: "Arrangement of flower themed cupcakes in a bouquet, perfect for valentines day",
        carousel: [
            "/assets/cupcakes/bouquet/1.jpg",
            "/assets/cupcakes/bouquet/2.jpg",
            "/assets/cupcakes/bouquet/3.jpg",
            "/assets/cupcakes/bouquet/4.jpg",
            "/assets/cupcakes/bouquet/5.jpg"
        ]
    },
    {
        title: "Halloween",
        imageSrc: "/assets/cupcakes/halloween/1.jpg",
        link: CupcakeLinks.Halloween,
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
        description: "Festive red and green with beautiful sprinkles",
        carousel: [
            "/assets/cupcakes/xmas/1.jpg",
            "/assets/cupcakes/xmas/2.jpg",
            "/assets/cupcakes/xmas/3.jpg",
            "/assets/cupcakes/xmas/4.jpg",
            "/assets/cupcakes/xmas/5.jpg"
        ]
    }
]

export const Lookup = (link: string): CupcakePreview | undefined => {
    return CupcakePreviews.find(p => p.link === link);
}
