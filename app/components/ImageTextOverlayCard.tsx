import type { StaticImageData } from 'next/image';
import Image from 'next/image';
import clsx from "clsx";

type ImageTextOverlayCardProps = {
    overlayText: string;
    overlayTextClassName?: string;
    overlayTextPosition?: "center" | "bottom-left" | "bottom-right" | "top-left" | "top-right";
    backgroundImg: StaticImageData;
    alt: string;
}

export default function ImageTextOverlayCard({ 
    overlayText,
    overlayTextClassName = "",
    overlayTextPosition = "bottom-left",
    backgroundImg,
    alt,
}: ImageTextOverlayCardProps) {
    const overlayTextPositionClasses = {
        center: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        "bottom-left": "bottom-8 left-8",
        "bottom-right": "bottom-8 right-8",
        "top-left": "top-8 left-8",
        "top-right": "top-8 right-8",
    };

    return (
        <div className="aspect-square relative">
            <Image src={backgroundImg} alt={alt} className="object-cover w-full h-full"/>
            <h3 className={clsx("absolute", overlayTextPositionClasses[overlayTextPosition], overlayTextClassName)}>
                {overlayText}
            </h3>
        </div>
    )
}