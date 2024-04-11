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
