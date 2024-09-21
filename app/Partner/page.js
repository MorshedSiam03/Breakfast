"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Replace with actual logo images or paths
import logo1 from '@/image/logo1.png';
import logo2 from '@/image/logo2.png';
import logo3 from '@/image/logo3.png';
import logo4 from '@/image/logo4.png';
import logo5 from '@/image/logo5.png';
import logo6 from '@/image/logo6.png';


function PartnersSection() {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6 ];

  // Framer motion animation settings for continuous scrolling
  const marqueeVariants = {
    animate: {
      x: [150, -150], // Move from left (-500px) to original position (0px)
      transition: {
        x: {
          repeat: Infinity, // Infinite loop
          repeatType: "loop",
          duration: 5, // Duration of the scroll
          ease: "linear" // Smooth animation
        }
      }
    }
  };

  return (
    <div className="bg-white py-16 overflow-hidden">
      <div className="container mx-auto text-center px-5 md:px-40">
        {/* Section Title */}
        <p className="text-red-500 font-semibold mb-2 font-miniver">Partners & Clients</p>
        <h2 className="text-4xl font-bold mb-8 font-roboto">We work with the best people</h2>

        {/* Logos Scroll Animation */}
        <motion.div
          className="flex space-x-8 items-center justify-start"
          variants={marqueeVariants}
          animate="animate"
        >
          {logos.map((logo, index) => (
            <div key={index} className="mx-auto grayscale opacity-50 hover:opacity-100 transition-opacity duration-300">
              <Image
                src={logo}
                alt={`Partner logo ${index + 1}`}
                objectFit="contain"
                className="w-60"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default PartnersSection;
