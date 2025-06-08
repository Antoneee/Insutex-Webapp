'use client'

import { useEffect, useState } from 'react';
import Image from 'next/image';

type AutoImageCarouselProps = {
    images: string[]; // An array of image URLs to show in the slideshow
    interval? : number; // (Optional) How many milliseconds to wait before moving to the next image. Default is 5000ms (5 seconds)
}

/*
  AutoImageCarousel is a reusable image slideshow component.
  It takes a list of image URLs and automatically changes the image shown every few seconds.
  You can use this component to display rotating images on a website, like a banner or product preview.
*/
export default function AutoImageCarousel({
    images,
    interval = 5000, // If no interval is provided, default to 5 seconds
}: AutoImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        // This sets up a timer that changes the current image every `interval` milliseconds
        const timer = setInterval(() => {
            // When the timer runs, move to the next image
            // If we’re at the last image, start over from the beginning
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);

        // This cleans up the timer when the component is removed from the page
        // (Prevents memory leaks or multiple timers running)
        return () => clearInterval(timer);
    }, [images.length, interval]); // Re-run the effect if the image list or interval changes

    return (
        <div className="relative w-full h-full overflow-hidden">
            {images.map((src, index) => (
                <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}>
                    <Image
                        src={src}
                        alt={`Slide ${index + 1}`}
                        fill
                        quality={100}
                        className="object-cover"
                    />
                </div>
            ))}
        </div>
    );
}