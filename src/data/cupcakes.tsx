import { PreviewProps } from "../components/preview";

enum CupcakeLinks {
    BabyBlue = "baby-blue",
    Nude = "nude",
    Lavender = "lavender",
    Christmas = "christmas"
}

export type CupcakePreview = PreviewProps & {
    description: string;
}

export const CupcakePreviews: CupcakePreview[] = [
    {
        title: "Baby Blue",
        imageSrc: "/assets/cupcakes/box-babyblue.jpg",
        link: CupcakeLinks.BabyBlue,
        description: "Deep blue cupcake with swirls"
    },
    {
        title: "Nude",
        imageSrc: "/assets/cupcakes/box-nude.jpg",
        link: CupcakeLinks.Nude,
        description: "Skin tone"
    },
    {
        title: "Lavender",
        imageSrc: "/assets/cupcakes/box-lavender.jpg",
        link: CupcakeLinks.Lavender,
        description: "Deep lavender colour with rose swirl"
    },
    {
        title: "Christmas",
        imageSrc: "/assets/cupcakes/box-christmas.jpg",
        link: CupcakeLinks.Christmas,
        description: "Festive red and green with beautiful sprinkles"
    }
]

export const Lookup = (link: string): CupcakePreview | undefined => {
    return CupcakePreviews.find(p => p.link === link);
}
