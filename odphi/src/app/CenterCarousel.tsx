
import { useEffect, useState } from 'react';
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

export default function CenterCarousel() {
    const images = [
        'homeScreen/hs-center1.jpg',
        'homeScreen/hs-center2.JPG',
        'homeScreen/hs-center3.jpg',
        'homeScreen/hs-center4.jpg',
        'homeScreen/hs-center5.JPG',
        'homeScreen/hs-center6.JPG',
    ];

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
        <div className={`hs-carousel ${fade ? 'fade' : ''}`}>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} />
        </div>
    );
}