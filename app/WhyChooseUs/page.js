"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import HealthySalad from "@/image/Dish.svg";
import VarietyOfOptions from "@/image/Menu.svg";
import Burger from "@/image/Burger.svg";
import Cycle from "@/image/Cycle.svg";

function WhyChooseUs() {
  return (
    <div className="container mx-auto px-5 md:px-40 py-12">
      <section className="flex flex-col lg:flex-row items-center justify-between">
        {/* Left Side - Image */}
        <motion.div 
        className="lg:w-1/2 mb-8 lg:mb-0"
        whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -200 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={HealthySalad}
            alt="Healthy Salad"
            className="rounded-3xl shadow-lg w-full"
          />
        </motion.div>

        {/* Right Side - Why People Choose Us */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 400 }}
        transition={{ duration: 1 }}
        className="lg:w-1/2 lg:pl-12">
          <h2 className="text-4xl font-semibold mb-8">Why People Choose us?</h2>

          {/* Feature 1 */}
          <div className="flex items-center shadow-md p-4 rounded-lg mb-6">
          <div className="w-40 px-4 py-1 shadow-md rounded-full mr-4">
              <Image
                src={Cycle}
                alt="Eat Burger"
                className="w-28 h-16"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Convenient and Reliable</h3>
              <p className="text-gray-600">
                Whether you dine in, take out, or order delivery, our service is
                convenient, fast, and reliable, making mealtime hassle-free.
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="flex  shadow-md p-4 rounded-lg items-center mb-6">
          <div className="w-40 px-3 py-1 shadow-md rounded-full mr-4">
              <Image
                src={VarietyOfOptions}
                alt="Eat Burger"
                className="w-28 h-16"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Variety of Options</h3>
              <p className="text-gray-600">
                From hearty meals to light snacks, we offer a wide range of
                options to suit every taste and craving.
              </p>
            </div>
          </div>

          {/* Feature 3 */}
          <div className="flex shadow-md p-4 rounded-lg items-center">
            <div className="w-40 px-4 py-1 shadow-md rounded-full mr-4">
              <Image
                src={Burger}
                alt="Eat Burger"
                className="w-28 h-16"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold">Eat Burger</h3>
              <p className="text-gray-600">
                Our burgers are grilled to perfection, with juicy patties and
                flavorful toppings that make every bite a delicious experience.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default WhyChooseUs;
