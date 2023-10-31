"use client";
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import LogoSlider from './LogoSlider';
const Hero = () => {
  return (
    <div
      className="hero min-h-screen bg-base-200"
      style={{
        backgroundImage:
          "url(/images/hero-image.jpg)",
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center">
        <div className="max-w-md">
          <div className="avatar">
            <motion.div className="w-24 rounded-full">
              <Image
                alt="Marco Oliveri"
                src={"/images/profile.jpg"}
                width="200"
                height="200"
              />
            </motion.div>
          </div>
          <div className="flex flex-row container justify-center w-[500px] mx-auto mb-3">
            <LogoSlider />
          </div>
          <h1 className="text-5xl font-bold text-white">Marco Oliveri</h1>
          <h4 className="text-3xl text-white">Front-end Developer</h4>
        </div>
      </div>
    </div>
  );
}

export default Hero