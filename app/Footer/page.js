import React from "react";
import Image from "next/image";

// Dummy images for Instagram gallery (replace with actual images)
import instaImage from "/image/Group 26.png";
import socialImage from "/image/Social icon.png";
import mail from "/image/EnvelopeSimpleOpen.svg";
import map from "/image/MapPin.svg";
import phone from "/image/Phone.svg";
import clock from "/image/Clock.svg";


function Footer() {

  return (
    <footer className="bg-[#880808] text-white font-inter pt-12">
      <div className="container mx-auto px-10 md:px-40 grid grid-cols-1 md:grid-cols-8 gap-10">
        {/* Left Section: Newsletter Subscription */}
        <div className="col-span-2">
          <h3 className="text-2xl font-bold mb-4 ">RESTAURANT</h3>
          <p className="mb-4">
            Subscribe our newsletter and get discount 25% off
          </p>
          <div className="flex items-center mb-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="p-2 w-full rounded-l-lg text-black outline-none"
            />
            <button className="bg-red-600 p-2 rounded-r-lg">
              <span className="material-icons">send</span>
            </button>
          </div>
          <div className="flex space-x-4">
          <Image
                src={socialImage}
                alt={`Instagram Image`}
                width={200}
                height={200}
                className="rounded-lg"
              />
          </div>
        </div>

        {/* Middle Section: Contact Info */}
        <div className="col-span-3">
          <h4 className="text-xl font-bold mb-4 font-roboto">Contact us</h4>

          <ul>
            <li className="mb-2 gap-2 flex items-center">
            <Image
                src={map}
                alt={`map`}
                width={20}
                height={20}
                className="rounded-lg"
              />
              3517 W. Gray St. Utica, Pennsylvania 57867
            </li>
            <li className="mb-2 flex gap-2 items-center">
            <Image
                src={phone}
                alt={`map`}
                width={20}
                height={20}
                className="rounded-lg"
              />
              (480) 555-0103
            </li>
            <li className="mb-2 flex gap-2 items-center">
            <Image
                src={mail}
                alt={`map`}
                width={20}
                height={20}
                className="rounded-lg"
              />
              M.Alyaqout@4house.Co
            </li>
            <li className="mb-2 flex gap-2 items-center">
            <Image
                src={clock}
                alt={`map`}
                width={20}
                height={20}
                className="rounded-lg"
              />
              Sun - Sat / 10:00 AM - 8:00 PM
            </li>
          </ul>
        </div>

        {/* Links Section */}
        <div className="col-span-2 md:col-span-1">
          <h4 className="text-xl font-bold mb-4 font-roboto">Links</h4>
          <ul className="grid grid-cols-3 md:grid-cols-1 gap-2 md:gap-0">
            <li className="mb-2">
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Contact Us
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Our Menu
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="hover:underline">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Instagram Gallery Section */}
        <div className="col-span-2 hidden lg:block">
          <h4 className="text-xl font-bold mb-4 font-roboto">Instagram Gallery</h4>
              <Image
                src={instaImage}
                alt={`Instagram Image`}
                width={240}
                height={240}
                className="rounded-lg"
              />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-[#A52A2A] text-center py-4 mt-20">
        <div className="container mx-auto flex md:block justify-center md:px-40">
          <div className="flex justify-between ">
          <p className="mb-2">&copy; 2024. All rights reserved.</p>
          <div className="lg:flex justify-center hidden  space-x-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Partner
            </a>
          </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
