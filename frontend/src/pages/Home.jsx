import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/home/HeroSection";
import EventsSlider from "../components/home/EventsSlider";

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col items-center gap-8 bg-white !mt-25 rounded-lg">
            <HeroSection />
          </section>

          <section className="w-9/10 flex flex-col items-center gap-8 bg-white !py-8 sm;!py-12 md:!py-15 rounded-lg">
            <div className="w-full flex flex-col lg:flex-row gap-5 lg:gap-10 justify-center lg:items-center bg-gray-100 !px-5 !py-8 sm:!px-8 sm:!py-10 rounded-lg">
              <h1 className="text-[1.5rem] sm:text-[2rem] font-medium text-black">
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

          <section className="w-full flex flex-col items-center gap-8 bg-white !py-8 sm:!py-12 md:!py-15">
            <EventsSlider />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Home;
