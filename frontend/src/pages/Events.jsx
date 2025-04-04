import { useState } from "react";
import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import { LuSearch, LuChevronDown } from "react-icons/lu";

const Events = () => {
  const cities = [
    "Dubai",
    "Mumbai",
    "Delhi",
    "Munich",
    "Paris",
    "New York",
    "Manchester",
    "Mangalore",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const industries = [
    "Technology",
    "Healthcare",
    "Finance",
    "Manufacturing",
    "Retail",
    "Automotive",
    "Education",
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Select Month");

  const [cityQuery, setCityQuery] = useState("");
  const [industryQuery, setIndustryQuery] = useState("");

  const [filteredCities, setFilteredCities] = useState([]);
  const [filteredIndustries, setFilteredIndustries] = useState([]);

  const handleCityChange = (e) => {
    const value = e.target.value;
    setCityQuery(value);
    setFilteredCities(
      value
        ? cities.filter((city) =>
            city.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const handleIndustryChange = (e) => {
    const value = e.target.value;
    setIndustryQuery(value);
    setFilteredIndustries(
      value
        ? industries.filter((industry) =>
            industry.toLowerCase().includes(value.toLowerCase())
          )
        : []
    );
  };

  const selectCity = (city) => {
    setCityQuery(city);
    setFilteredCities([]);
  };

  const selectIndustry = (industry) => {
    setIndustryQuery(industry);
    setFilteredIndustries([]);
  };

  return (
    <div className="relative">
      <Navbar />
      <main className="flex flex-col items-center bg-gray-100">
        <section className="w-full flex justify-center bg-[#1A659E] !pt-28 !pb-25 lg:!py-35">
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
        <div className="relative !-mt-15 w-9/10 flex flex-col-reverse lg:flex-row gap-10 bg-white rounded-lg !p-5 md:!p-10 !mb-10">
          <section className="w-full lg:w-3/4 grid grid-cols-1">
            <EventCard />
            <EventCard />
            <EventCard />
            <EventCard />
          </section>
          <section className="w-full lg:w-1/4 lg:border-l border-gray-400 lg:!pl-10 !space-y-6">
            {/* Filter by City */}
            <div className="relative w-full text-gray-700">
              <label className="block !mb-1">Filter by City</label>
              <input
                type="text"
                value={cityQuery}
                onChange={handleCityChange}
                placeholder="Search city"
                className="w-full !p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-[#004E89] outline-none"
              />
              {filteredCities.length > 0 && (
                <ul className="absolute z-10 bg-white w-full !mt-1 border border-gray-300 rounded-lg shadow">
                  {filteredCities.map((city, i) => (
                    <li
                      key={i}
                      onClick={() => selectCity(city)}
                      className="!p-3 text-[0.9rem] hover:bg-gray-100 cursor-pointer"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Filter by Month */}
            <div className="relative text-gray-700">
              <label className="block !mb-1">Filter by Month</label>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center bg-white border border-gray-400 p-2 rounded-lg focus:ring-2 focus:ring-[#004E89]"
              >
                <span className="text-gray-400">{selectedMonth}</span>
                <LuChevronDown className="text-gray-400" size={18} />
              </button>

              {/* Dropdown Menu */}
              {isOpen && (
                <div className="absolute left-0 !mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto z-10">
                  {months.map((month, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelectedMonth(month);
                        setIsOpen(false);
                      }}
                      className="p-3 text-[0.9rem] hover:bg-gray-100 cursor-pointer text-gray-700"
                    >
                      {month}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Filter by Industry */}
            <div className="relative w-full text-gray-700">
              <label className="block !mb-1">Filter by Industry</label>
              <input
                type="text"
                value={industryQuery}
                onChange={handleIndustryChange}
                placeholder="Search industry"
                className="w-full !p-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-[#004E89] outline-none"
              />
              {filteredIndustries.length > 0 && (
                <ul className="absolute z-10 bg-white w-full !mt-1 border border-gray-300 rounded-lg shadow">
                  {filteredIndustries.map((industry, i) => (
                    <li
                      key={i}
                      onClick={() => selectIndustry(industry)}
                      className="!p-3 text-[0.9rem] hover:bg-gray-100 cursor-pointer"
                    >
                      {industry}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Events;
