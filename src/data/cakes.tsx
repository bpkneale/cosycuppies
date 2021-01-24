import { PreviewProps } from "../components/preview";

enum CakeIds {
    Blue = "blue"
}

export type CakePreview = PreviewProps;

export const Cakes: CakePreview[] = [
    {
        imageSrc: "/assets/cakes/blue.jpg",
        title: "Blue",
        link: CakeIds.Blue
    }
]