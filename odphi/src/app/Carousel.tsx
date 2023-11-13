import { useEffect, useMemo, useState } from 'react';
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
import Image from 'next/image';
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function Carousel() {
    const images = useMemo (() => [
        '/carousel/img1.png',
        '/carousel/img2.png',
        '/carousel/img3.png',
    ], []);

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => {
            setFade(true); // Start the fading effect
            setTimeout(() => {
              setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
              setFade(false); // Reset the fading effect
            }, 500); // Wait for 500ms before changing the image
          }, 5000);

        return () => {
        clearInterval(timer);
        };
    }, [images]);

    return (
        <div className={`image-carousel ${fade ? 'fade' : ''}`}>
            <Image src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        </div>
    );
}