import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import {
  FaPlane,
  FaHotel,
  FaBed,
  FaPassport,
  FaShuttleVan,
  FaGlobeAmericas,
} from "react-icons/fa";

const headlineArray = [
  "Luxury Stays",
  "Custom Plans",
  "Best Deals",
  "Trip Support",
];

const colorArray = [
  "#fca311", // yellow
  "#33C1FF", // sky blue
  "#8D33FF", // purple
  "#28A745", // green
];

const HeroSection = () => {
  const [headlineText, setHeadlineText] = useState(headlineArray[0]);
  const [headlineColor, setHeadlineColor] = useState(colorArray[0]);
  const [animationKey, setAnimationKey] = useState(0); // for re-triggering animation

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % headlineArray.length;
      setHeadlineText(headlineArray[index]);
      setHeadlineColor(colorArray[index]);
      setAnimationKey((prev) => prev + 1); // update key to restart animation
    }, 3000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-center !py-8 sm:!py-12 md:!py-20 gap-6 overflow-hidden">
      {/* Floating Icons */}
      <div className="hidden md:block absolute inset-0 pointer-events-none z-0">
        <FaPlane className="absolute top-[8%] left-[5%] text-[3rem] text-blue-400" />
        <FaHotel className="absolute top-[4%] right-[40%] text-[3rem] text-orange-400" />
        <FaBed className="absolute bottom-[50%] right-[8%] text-[3rem] text-rose-600" />
        <FaPassport className="absolute bottom-[10%] right-[17%] text-[2.5rem] text-violet-600" />
        <FaShuttleVan className="absolute bottom-[0%] left-[40%] text-[3rem] text-pink-500" />
        <FaGlobeAmericas className="absolute bottom-[22%] left-[12%] text-[2.3rem] text-teal-600" />
      </div>

      <div className="flex flex-col items-center z-10">
        <h1 className="text-[2.4rem] sm:text-[3rem] font-bold">
          Simplify your exhibition travel with
        </h1>
        <h1
          key={animationKey}
          className="text-[2.4rem] sm:text-[3rem] font-bold fadeInUp"
          style={{ color: headlineColor }}
        >
          {headlineText}
        </h1>
      </div>
      <p className="text-[0.925rem]/6 sm:text-[1rem]/7 text-gray-700 z-10">
        Personalized accommodation and travel solutions for exhibition visitors
        and business travelers.
      </p>
      <div className="flex gap-10 z-10">
        <Link
          to="/events"
          className="flex items-center bg-white text-black text-[0.9rem] font-medium border-2 border-black hover:text-gray-500 hover:border-gray-500 cursor-pointer !p-2 rounded-lg"
        >
          <span>See Events</span>
        </Link>
        <Link
          to="/contact"
          className="flex items-center bg-black text-white hover:bg-gray-500 text-[0.9rem] cursor-pointer !p-2 rounded-lg"
        >
          <span>Contact Us</span>
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
