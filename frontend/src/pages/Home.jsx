import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import EventsSlider from "../components/EventsSlider";

const headlineArray = [
  "Luxury Stays",
  "Curated Packages",
  "Exclusive Deals",
  "On-Trip Assistance",
];

const colorArray = [
  "#FF5733", // red-orange
  "#33C1FF", // sky blue
  "#8D33FF", // purple
  "#28A745", // green
];

const Home = () => {
  const [headlineText, setHeadlineText] = useState(headlineArray[0]);
  const [headlineColor, setHeadlineColor] = useState(colorArray[0]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % headlineArray.length;
      setHeadlineText(headlineArray[index]);
      setHeadlineColor(colorArray[index]);
    }, 2000);

    // Clean up interval when component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <main>
        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col items-center gap-8 bg-white !py-12 md:!py-15 !mt-30 rounded-lg">
            <div className="flex flex-col items-center">
              <h1 className="text-[3rem] font-bold">
                Simplify your exhibition travel with
              </h1>
              <h1
                className="text-[3rem] font-bold"
                style={{ color: headlineColor }}
              >
                {headlineText}
              </h1>
            </div>
            <p>
              Personalized accommodation and travel solutions for exhibition
              visitors and business travelers.
            </p>
            <div className="flex gap-10">
              <Link
                to="/about"
                className="flex items-center bg-white text-[#0c4c3e] text-[0.9rem] font-medium border-2 border-[#0c4c3e] hover:text-[#8fbc55] hover:border-[#8fbc55] cursor-pointer !p-3 rounded-lg"
              >
                <span>Know More</span>
              </Link>
              <Link
                to="/contact"
                className="flex items-center bg-[#0c4c3e] text-white hover:bg-[#8fbc55] text-[0.9rem] cursor-pointer !p-3 rounded-lg"
              >
                <span>Contact Us</span>
              </Link>
            </div>
          </section>

          <section className="w-9/10 flex flex-col items-center gap-8 bg-white !py-12 md:!py-15 rounded-lg">
            <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center lg:items-center bg-gray-100 !px-5 !py-8 sm:!px-8 sm:!py-10 rounded-lg">
              <h1 className="text-[1.8rem] sm:text-[2.5rem] font-medium text-black">
                About ExpoAccom
              </h1>
              <div className="flex flex-col gap-5">
                <p className="text-[0.925rem]/6 sm:text-[1rem]/7 text-gray-700">
                  ExpoAccom is your trusted partner for seamless exhibition
                  travel experiences. We specialize in providing handpicked
                  accommodations and curated travel packages tailored to your
                  exhibition schedules and preferences. Whether you're attending
                  a trade fair, conference, or business event, we ensure you
                  stay at the right place, at the right time — stress-free.
                </p>
                <div className="flex lg:justify-end">
                  <Link
                    to="/about"
                    className="flex items-center bg-gray-100 text-black text-[0.9rem] font-medium border-2 border-black hover:text-gray-500 hover:border-gray-500 cursor-pointer !p-2 rounded-lg"
                  >
                    <span>Know More</span>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          <section className="w-9/10 flex flex-col items-center gap-8 bg-white !py-12 md:!py-15 rounded-lg">
            <EventsSlider />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
