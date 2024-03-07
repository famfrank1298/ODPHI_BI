'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Parallax, Navigation } from 'swiper/modules';
import { Manrope, Plus_Jakarta_Sans } from 'next/font/google';
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });
const inter = Manrope({ subsets: ["latin"] });

interface CarouselProps {
    slides: string[];
}

const Carousel: React.FC<CarouselProps> = ({ slides }) => {
    return (
        <Swiper
            speed={1000}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            loop={true}
            parallax={true}
            navigation={true}
            modules={[Autoplay, Parallax, Navigation]}
            className="swiper-container"
        >
            {slides.map((backgroundImage, index) => (
                <SwiperSlide
                    key={index}
                    className="parallax-bg"
                    style={{ backgroundImage }}
                    data-swiper-parallax="-23%"
                    
                >
                    <img className="slide-img" src={backgroundImage} alt={`Image ${index + 1}`} />
                    <div className="slide-number">
                        {String(index + 1)} / {slides.length}
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default Carousel;
