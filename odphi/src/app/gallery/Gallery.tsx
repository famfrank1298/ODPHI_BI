// "use client"

// import { useEffect, useState } from 'react';
// import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
// import Image from 'next/image';
// const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
// const inter = Manrope({ subsets: ["latin"] });

// export default function Gallery(props: { images: string[]; }) {

//     const [currentImageIndex, setCurrentImageIndex] = useState(0);
//     const [fade, setFade] = useState(false);

//     useEffect(() => {
//         const timer = setInterval(() => {
//             setFade(true); // Start the fading effect
//             setTimeout(() => {
//               setCurrentImageIndex((prevIndex) => (prevIndex + 1) % props.images.length);
//               setFade(false); // Reset the fading effect
//             }, 500); // Wait for 300ms before changing the image
//           }, 2000);

//         return () => {
//         clearInterval(timer);
//         };
//     }, [props.images]);

//     return (
//         <div className={`gallery ${fade ? 'fade' : ''}`}>
//             <img className="galleryImg" src={props.images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
//         </div>
//     );
// }

'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import './Gallery.css';

import { Autoplay, Parallax, Navigation } from 'swiper/modules';
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

interface CarouselProps {
    images: string[];
}

const Carousel: React.FC<CarouselProps> = ({ images }) => {
    return (
        <div className='swiperClass'>
        <Swiper
            speed={1000}
            autoplay={{
                delay: 2000,
                disableOnInteraction: false,
            }}
            loop={true}
            parallax={true}
            navigation={true}
            modules={[Autoplay, Parallax, Navigation]}
            className="swiper-container"
        >
            {images.map((backgroundImage, index) => (
                <SwiperSlide
                    key={index}
                    className="parallax-bg"
                    style={{ backgroundImage }}
                    data-swiper-parallax="-23%"
                    
                >
                    <img className="slide-img" src={backgroundImage} alt={`Image ${index + 1}`} />
                    <div className="slide-number">
                        {String(index + 1)} / {images.length}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
        </div>
    );
};

export default Carousel;
