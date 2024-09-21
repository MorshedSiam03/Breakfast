"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import icon1 from '@/image/Badge.svg';  // Replace with your icon image
import icon2 from '@/image/Rocket.svg';  // Replace with your icon image
import icon3 from '@/image/Payment.svg';  // Replace with your icon image
import icon4 from '@/image/OnlinePay.svg';  // Replace with your icon image

function HowItWorks() {
  const steps = [
    { id: 1, icon: icon1, title: "Quality Food", description: "Contrary to popular belief, Lorem Ipsum is not simply random text.", link: "Learn More" },
    { id: 2, icon: icon2, title: "Fast Delivery", description: "Contrary to popular belief, Lorem Ipsum is not simply random text.", link: "Learn More" },
    { id: 3, icon: icon3, title: "Secure Payment", description: "Contrary to popular belief, Lorem Ipsum is not simply random text.", link: "Learn More" },
    { id: 4, icon: icon4, title: "Easy Order", description: "Contrary to popular belief, Lorem Ipsum is not simply random text.", link: "Learn More" }
  ];

  return (
    <div className="bg-white pb-16 pt-96 mt-80 lg:mt-0">
      <div className="container mx-auto text-center px-5 md:px-40">
        <h2 className="text-4xl font-bold mb-8">How does it work</h2>

        <motion.div 
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -200 }}
        transition={{ duration: 1 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {steps.map((step) => (
            <div key={step.id} className="bg-white shadow-md rounded-lg p-6 text-center">
              {/* Icon */}
              <div className="flex justify-center">
                <Image src={step.icon} alt={step.title} width={100} height={100} />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              
              {/* Description */}
              <p className="text-gray-500 mb-4">{step.description}</p>
              
              {/* Learn More Link */}
              <a href="#" className="hover:text-red-500 font-semibold hover:underline">{step.link}</a>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default HowItWorks;
