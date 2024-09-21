"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
// Import images
import food1 from "@/image/Waffles.png";
import food2 from "@/image/Sandwich.png";
import food3 from "@/image/Nun.png";
import food4 from "@/image/Pancake.png";

const Breakfast = () => {
  const [currentImage, setCurrentImage] = useState(food1);
  const [bgColor, setBgColor] = useState("#880808");
  const [shapeColor, setShapeColor] = useState("#A52A2A");
  const [isChanging, setIsChanging] = useState(false);
  const [opacity, setOpacity] = useState(1); // Initial opacity
  const [selectedFood, setSelectedFood] = useState(food1); // Track selected food

  const handleImageClick = (newImage, newBgColor, newShapeColor) => {
    setIsChanging(true);
    setTimeout(() => {
      setCurrentImage(newImage);
      setBgColor(newBgColor);
      setShapeColor(newShapeColor);
      setIsChanging(false);
      setOpacity(1); // Fade back in
      setSelectedFood(newImage); // Update selected food
    }, 300);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }} // Start hidden
      animate={{ opacity }} // Animate to current opacity
      transition={{ duration: 0.5 }} // Duration of the fade-in
      style={{ backgroundColor: bgColor }}
      className="relative rounded-b-xl flex flex-col items-center justify-center overflow-hidden font-inter min-h-screen lg:max-h-screen p-4"
    >
      {/* Background Circular Shape - Top Left */}
      <div
        style={{ backgroundColor: shapeColor }}
        className="absolute w-[400px] h-[400px] rounded-full top-24 left-24 -translate-x-1/2 -translate-y-1/2 opacity-80 md:w-[800px] md:h-[800px]"
      ></div>

      {/* Background Circular Shape - Bottom Right */}
      <div
        style={{ backgroundColor: shapeColor }}
        className="absolute w-[400px] h-[400px] rounded-full bottom-10 right-10 translate-x-1/2 translate-y-1/2 opacity-80 md:w-[800px] md:h-[800px]"
      ></div>

      {/* "RESTAURANT" text at the top */}
      <h1 className="absolute top-7 left-10 text-2xl font-semibold hidden md:block text-white font-Sanchez">
        RESTAURANT
      </h1>

      <div className="w-full max-w-7xl text-white flex flex-col md:flex-row items-center justify-between relative z-10 space-y-6 md:space-y-0 md:space-x-6">
        {/* Left Content */}
        <div className="md:w-1/2">
          <h1 className="text-5xl md:text-7xl md:mb-4 font-sanchez">BREAKFAST</h1>
          <p className="text-sm md:text-md font-semibold text-justify md:mb-6">
            Breakfast, often referred to as the ‘most important meal of the
            day,’ provides essential nutrients to kick start our day. It
            includes a variety of foods like fruits, cereals, dairy products,
            and proteins that contribute to a balanced diet. Eating a healthy
            breakfast can improve concentration and performance, boost physical
            endurance, and lower cholesterol levels.
          </p>

          {/* Small Food Images */}
          <div className="md:flex space-x-2 md:space-x-4 mt-6 justify-center hidden md:justify-start">
            {[food1, food2, food3, food4].map((food, index) => {
              const foodColors = [
                ["#880808", "#A52A2A"],
                ["#0A4669", "#0A3659"],
                ["#953553", "#A95C68"],
                ["#006666", "#003333"],
              ];
              const [bgColor, shapeColor] = foodColors[index];
              return (
                <div key={food} className="flex flex-col items-center">
                  <div
                    className={`relative w-20 h-20 md:w-28 md:h-28 cursor-pointer`}
                    onClick={() => handleImageClick(food, bgColor, shapeColor)}
                  >
                    <Image
                      src={food}
                      alt={`Food ${index + 1}`}
                      layout="fill"
                      className="rounded-full object-cover"
                    />
                  </div>
                  {selectedFood === food && (
                    <motion.div
                      className="w-16 md:w-24 h-1 bg-white mt-2 rounded"
                      initial={{ opacity: 0, x: -50 }} // Start off-screen
                      animate={{ opacity: 1, x: 0 }} // Animate to visible
                      exit={{ opacity: 0, x: 50 }} // Animate out
                      transition={{ duration: 0.5 }} // Duration of the animation
                    />
                  )}
                </div>
              );
            })}
          </div>

          {/* Search Bar */}
          <div className="mt-6 hidden md:block">
            <input
              type="text"
              placeholder="Search...."
              className="w-full px-5 py-3 rounded-full bg-white text-black shadow-md font-bold placeholder:text-black"
            />
          </div>
        </div>

        {/* Right Image with outgoing animation */}
        <motion.div
          className="md:w-1/2 w-full flex justify-center"
          initial={{ opacity: 1, y: 0, rotate: 0 }} // Initial position
          animate={{
            opacity: isChanging ? 0 : 1,
            y: isChanging ? "100vh" : 0,
            rotate: isChanging ? 180 : 0,
          }} // Animate out with rotation
          transition={{ duration: 0.5 }} // Duration of the animation
        >
          <Image
            src={currentImage}
            alt="Food"
            className={`rounded-full md:mt-[200px] mb-4 w-[300px] h-[300px] md:w-[500px] md:h-[500px] object-cover`}
          />
        </motion.div>



        <div className="flex space-x-2 md:hidden justify-center">
            {[food1, food2, food3, food4].map((food, index) => {
              const foodColors = [
                ["#880808", "#A52A2A"],
                ["#0A4669", "#0A3659"],
                ["#953553", "#A95C68"],
                ["#006666", "#003333"],
              ];
              const [bgColor, shapeColor] = foodColors[index];
              return (
                <div key={food} className="flex flex-col items-center">
                  <div
                    className={`relative w-20 h-20 md:w-28 md:h-28 cursor-pointer`}
                    onClick={() => handleImageClick(food, bgColor, shapeColor)}
                  >
                    <Image
                      src={food}
                      alt={`Food ${index + 1}`}
                      layout="fill"
                      className="rounded-full object-cover"
                    />
                  </div>
                  {selectedFood === food && (
                    <motion.div
                      className="w-16 md:w-24 h-1 bg-white mt-2 rounded"
                      initial={{ opacity: 0, x: -50 }} // Start off-screen
                      animate={{ opacity: 1, x: 0 }} // Animate to visible
                      exit={{ opacity: 0, x: 50 }} // Animate out
                      transition={{ duration: 0.5 }} // Duration of the animation
                    />
                  )}
                </div>
              );
            })}
          </div>
      </div>
    </motion.div>
  );
};

export default Breakfast;
