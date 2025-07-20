'use client'

import { useCallback, useEffect, useRef, useState } from 'react';
import Image from 'next/image';

type ImageCarouselProps = {
    images: string[]; // An array of image URLs to show in the slideshow
    interval? : number; // (Optional) How many milliseconds to wait before moving to the next image. Default is 5000ms (5 seconds)
}

/*
  AutoImageCarousel is a reusable image slideshow component.
  It takes a list of image URLs and automatically changes the image shown every few seconds.
  You can use this component to display rotating images on a website, like a banner or product preview.
*/
export default function ImageCarousel({
    images,
    interval = 5000, // If no interval is provided, default to 5 seconds
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const resetTimer = useCallback(() => {
        if (timerRef.current) clearInterval(timerRef.current);
        timerRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, interval);
    }, [interval, images.length]);

    useEffect(() => {
        resetTimer();
        return () => {
            if (timerRef.current) clearInterval(timerRef.current);
        };
    }, [resetTimer]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
        resetTimer();
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        resetTimer();
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        resetTimer();
    };

    return (
        <div className="relative w-full h-full overflow-hidden rounded-lg">
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

            {/* Left Arrow */}
            <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-20"
                aria-label="Previous Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
            </button>

            {/* Right Arrow */}
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 p-2 rounded-full text-white z-20"
                aria-label="Next Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-colors ${
                            index === currentIndex
                                ? 'bg-white'
                                : 'bg-white/50 hover:bg-white/80'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
