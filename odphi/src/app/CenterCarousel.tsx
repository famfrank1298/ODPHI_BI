
import { useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import { Plus_Jakarta_Sans, Manrope } from "next/font/google";
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });
import "./Carousel.css"

export default function CenterCarousel() {
    const images = useMemo (() => [
        // 'homeScreen/hs-center1.JPG',
        // 'homeScreen/hs-center2.JPG',
        'homeScreen/hs-center3.jpg',
        'homeScreen/hs-center4.jpg',
        'homeScreen/hs-center5.JPG',
        'homeScreen/hs-center6.JPG',
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
        <div className={`hs-carousel ${fade ? 'fade' : ''}`}>
            <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        </div>
    );
}

// 'use client';
// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';

// import { Autoplay, Parallax, Navigation } from 'swiper/modules';
// import { Manrope, Plus_Jakarta_Sans } from 'next/font/google';
// const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
// const inter = Manrope({ subsets: ["latin"] });
// import "./gallery/Gallery.css";

// interface CarouselProps {
//     slides: string[];
// }

// const Carousel: React.FC<CarouselProps> = ({ slides }) => {
//     return (
//         <Swiper
//             speed={1000}
//             autoplay={{
//                 delay: 2500,
//                 disableOnInteraction: false,
//             }}
//             loop={true}
//             parallax={true}
//             navigation={true}
//             modules={[Autoplay, Parallax, Navigation]}
//             className="swiper-container"
//         >
//             {slides.map((backgroundImage, index) => (
//                 <SwiperSlide
//                     key={index}
//                     className="parallax-bg"
//                     style={{ backgroundImage }}
//                     data-swiper-parallax="-23%"
                    
//                 >
//                     <img className="slide-img" src={backgroundImage} alt={`Image ${index + 1}`} />
//                     <div className="slide-number">
//                         {String(index + 1)} / {slides.length}
//                     </div>
//                 </SwiperSlide>
//             ))}
//         </Swiper>
//     );
// };

// export default Carousel;
