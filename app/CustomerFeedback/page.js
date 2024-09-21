"use client";
import React from 'react'
import Image from 'next/image';
import { motion } from "framer-motion";
import customerImage from '@/image/Profile.svg';  // Replace with your image path
import chefImage from '@/image/Cheif.svg';  // Replace with your chef image path
import chefBg from '@/image/Cheif-bg.svg';  // Replace with your chef image path

function CustomerFeedback () {
  return (
    <div className="bg-white pt-16 ">
      <div className="container mx-auto px-6 flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between lg:px-40 relative">
        
        {/* Left side: Feedback content */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 text-left mb-12 mt-10 md:mt-0 lg:mb-0">
          <h2 className="text-4xl font-bold mb-4">
            Customer <span className="text-red-600">Feedback</span>
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            I recently dined at your restaurant and wanted to share my experience.
            The food was absolutely delicious, and I was impressed by the freshness
            of the ingredients. Each dish was bursting with flavor, and the portion
            sizes were perfect. The service was quick and efficient, and the staff
            was incredibly friendly and welcoming.
          </p>

          {/* Customer details */}
          <div className="flex items-center space-x-4">
            <Image
              src={customerImage}
              alt="Customer"
              className="rounded-full"
              width={60}
              height={60}
            />
            <div>
              <h3 className="text-xl font-bold text-gray-800">Tayyab Sohail</h3>
              <p className="text-sm text-gray-500">UX/UI Designer</p>
            </div>
          </div>

          {/* Carousel indicator */}
          <div className="flex mt-6 space-x-2">
            <span className="h-3 w-3 bg-red-600 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
            <span className="h-3 w-3 bg-gray-300 rounded-full"></span>
          </div>
        </motion.div>

        {/* Right side: Chef image with background shape */}
        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 400 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 relative">
          {/* Red background shape */}
          <Image
              src={chefBg}
              alt="Chef"
              width={400}
              height={400}
              className="object-contain absolute bottom-10 right-24  z-0  transform translate-x-20 translate-y-10"
            />
          
          {/* Chef Image */}
          <div className="relative z-10">
            <Image
              src={chefImage}
              alt="Chef"
              width={600}
              height={600}
              className="object-contain"
            />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CustomerFeedback