import React from "react";
import { FaMapMarkerAlt, FaBed, FaUmbrellaBeach } from "react-icons/fa";
import { MdHotel } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import hero from '../assets/Hero.jpg';
import { Link } from "react-router-dom";
import FormsField from "./FormsField";

const Hero = () => {
  return (
    <div className="relative">
      <div
        className="bg-cover bg-center h-[40rem] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(10, 0, 58, 0.7), rgba(10, 0, 58, 0.7)), url(${hero})`,
        }}
      >
        <div className="relative z-10 px-6 md:px-16 lg:px-24 xl:px-32 text-white m-5 pt-18 sm:pt-0">
          
          {/* --- Updated Heading Text --- */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 max-w-4xl leading-tight">
            Discover Your <br /> Perfect Stay
          </h1>

          {/* --- Updated Icon Labels --- */}
          <div className="hidden sm:flex flex-wrap items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300">
            <p className="border-r border-white pr-3 sm:pr-4 flex items-center gap-1">
              <FaMapMarkerAlt /> Trending Destinations
            </p>
            <p className="border-r border-white pr-3 sm:pr-4 flex items-center gap-1">
              <FaBed /> Comfortable Rooms
            </p>
            <p className="border-r border-white pr-3 sm:pr-4 flex items-center gap-1">
              <MdHotel /> Quality Hotels
            </p>
            <p className="flex items-center gap-1">
              <FaUmbrellaBeach /> Exclusive Getaways
            </p>
          </div>

          {/* --- Updated Description Text --- */}
          <p className="hidden sm:block text-md text-gray-400 max-w-md leading-snug mt-5">
            Explore handpicked stays, from cozy rooms to luxury resorts. 
            Plan your next trip with ease and enjoy unbeatable rates worldwide.
          </p>

          <div className="mt-6">
            <FormsField />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
