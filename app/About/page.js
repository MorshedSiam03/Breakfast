"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import AddDish from "@/image/AddDish.svg";
import Play from "/image/PlayVideo.svg";

// Custom Hook to detect screen size
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

function About() {
  // Detect if the screen is mobile (max-width: 768px)
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <div className="container mx-auto px-5 md:px-40 py-12">
      {/* First Section */}
      <section className="flex-col-reverse flex md:flex-col lg:flex-row justify-between items-center mb-12">
        {/* Left Side */}
        <motion.div
          className="lg:w-1/2 mt-10 md:mt-0 font-poppins"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: isMobile ? 0 : -200 }} // Adjust animation for mobile
          transition={{ duration: 1 }}
        >
          <h2 className="text-[#A52A2A] font-semibold text-sm uppercase mb-2">
            Pizza Delivery
          </h2>
          <h1 className="text-5xl font-semibold mb-4">Get Started Today!</h1>
          <div className="bg-[#880808] py-0.5 mr-80"></div>
          <p className="text-lg my-2 font-semibold">
            Everything you need to build an amazing food restaurant responsive website.
          </p>
          <p className="text-gray-600 text-sm mb-8">
            Hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis.
          </p>
          {/* Icons Section */}
          <div className="flex md:space-x-8 space-x-2">
            <div className="shadow-lg md:shadow-none rounded-lg p-2">
              <Image src={AddDish} alt="Food Order" className="w-20" />{" "}
              <h3 className="font-semibold md:text-lg">Food Order</h3>
              <p className="text-gray-600 text-sm">
                Food is the necessity of life. It provides nutrition, sustenance, growth to human body.
              </p>
            </div>
            <div className="shadow-lg md:shadow-none rounded-lg p-2">
              <Image src={AddDish} alt="Promote Restaurant" className="w-20" />
              <h3 className="font-semibold md:text-lg">Promote Restaurant</h3>
              <p className="text-gray-600 text-sm">
                Food can be classified into cereals, pulses, nuts and oilseeds, vegetable.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          className="lg:w-1/2 lg:pl-12 md:mt-10 lg:mt-0"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: isMobile ? 0 : 400 }} // Adjust animation for mobile
          transition={{ duration: 1 }}
        >
          <h3 className="text-red-600 font-bold text-sm font-miniver mb-2">
            About us ___
          </h3>
          <h2 className="text-4xl font-bold mb-4 font-roboto">
            Food is an important part of a balanced Diet
          </h2>
          <p className="text-gray-600 mb-6 font-roboto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
          </p>
          <div className="flex justify-between md:justify-start space-x-4">
            <button className="bg-[#880808] text-white px-6 py-2 rounded shadow font-inter">
              Show more
            </button>
            <div className="flex items-center gap-2">
              <Image src={Play} alt="Food Order" className="w-10" />
              <span className="text-sm font-semibold hover:underline cursor-pointer">
                Watch video
              </span>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

export default About;
