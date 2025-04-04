import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import { LuSearch } from "react-icons/lu";

const Events = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex flex-col items-center bg-gray-100">
        <section className="w-full flex justify-center bg-[#1A659E] !pt-28 !pb-15 lg:!pt-35 lg:!pb-20">
          <div className="w-9/10 flex flex-col gap-10 items-center">
            <div className="flex flex-col gap-2 items-center">
              <div className="text-white">
                <h1 className="text-[2.5rem] md:text-[5rem]">Events</h1>
              </div>
              <div className="w-9/10 md:w-7/10">
                <p className="text-[0.85rem] md:text-[1rem] text-gray-200 text-center">
                  Explore upcoming exhibitions and secure hassle-free stays with
                  ExpoAccom. Browse events and enquire for tailored
                  accommodation and travel solutions.
                </p>
              </div>
            </div>
            <div className="relative flex flex-col xs:flex-row gap-3 w-9/10 md:w-7/10">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Find your event"
                  className="w-full bg-white text-gray-700 text-[0.82rem] xs:text-[0.9rem] !p-3 !pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FF6B35]"
                />
                <LuSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-700"
                  size={20}
                />
              </div>
              <button className="bg-[#FF6B35] text-white text-[0.82rem] xs:text-[0.9rem] !px-4 !py-2 rounded-lg hover:bg-[#d8562a]">
                Search
              </button>
            </div>
          </div>
        </section>
        <div className="w-9/10 flex gap-5">
          <section className="w-3/4 grid grid-cols-2 gap-5 !py-28 md:!py-35">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </section>
          <section className="w-1/4 !py-28 md:!py-35">
            <label htmlFor="city-select" className="block">
              Filter by city
            </label>
            <select
              name="city"
              id="city-select"
              className="w-full bg-white !p-2 rounded-lg"
            >
              <option value="">Select a city</option>
              <option value="Dubai">Dubai</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Delhi">Delhi</option>
              <option value="Munich">Munich</option>
            </select>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Events;
