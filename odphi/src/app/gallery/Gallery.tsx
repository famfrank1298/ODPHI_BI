"use client"

import { useEffect, useState } from 'react';
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import Image from 'next/image';
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function Gallery(props: { images: string[]; }) {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(true); // Start the fading effect
            setTimeout(() => {
              setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
              setFade(false); // Reset the fading effect
            }, 500); // Wait for 300ms before changing the image
          }, 2000);

        return () => {
        clearInterval(timer);
        };
    }, [props.images]);

    return (
        <div className={`gallery ${fade ? 'fade' : ''}`}>
            <Image src={props.images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        </div>
    );
}