"use client";
import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import Image from 'next/image';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const logos = [
    {
        name: 'React',
        image: '/images/react.svg',
    },
    {
        name: 'Next.js',
        image: '/images/nextjs.svg',
    },
    {
        name: 'Angular',
        image: '/images/angular.svg',
    },
    {
        name: 'Laravel',
        image: '/images/laravel.svg',
    },
    {
        name: 'Node.js',
        image: '/images/nodejs.svg',
    },
    {
        name: 'Tailwind CSS',
        image: '/images/tailwind.svg',
    },
    
]
const LogoSlider = () => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={4}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      modules={[Autoplay]}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      speed={1000}
      direction="horizontal"
      loop={true}
    >
      {logos.map((logo) => (
        <SwiperSlide key={logo.name}>
          <div className="flex flex-row items-center h-full">
            <Image width="50" height="50" src={logo.image} alt={logo.name} />
          </div>
        </SwiperSlide>
      ))}
      ...
    </Swiper>
  );
}

export default LogoSlider