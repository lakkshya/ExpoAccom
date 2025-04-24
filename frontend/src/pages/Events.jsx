import { useState, useRef, useEffect } from "react";
import useFetch from "../hooks/useFetch";

import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import { LuSearch, LuChevronDown } from "react-icons/lu";

const Events = () => {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_URL}/api/events/`
  );

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

  const [cityQuery, setCityQuery] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Select Month");

  const [industryQuery, setIndustryQuery] = useState("");
  const [filteredIndustries, setFilteredIndustries] = useState([]);

  const cityDropdownRef = useRef(null);
  const monthDropdownRef = useRef(null);
  const industryDropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }

      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target)
      ) {
        setFilteredCities([]);
      }

      if (
        industryDropdownRef.current &&
        !industryDropdownRef.current.contains(event.target)
      ) {
        setFilteredIndustries([]);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data : {error.message}</p>;
  }

  return (
    <div className="relative">
      <Navbar />
      <main className="flex flex-col items-center bg-gray-100">
        <section className="relative w-full flex justify-center !pt-28 !pb-25 lg:!py-35">
          <img
            src="/events-bg.jpg"
            alt="Events Cover Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay to fade the background image */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          {/* Content */}
          <div className="w-9/10 flex flex-col gap-10 items-center z-10">
            <div className="flex flex-col gap-2 items-center">
              <div className="text-white">
                <h1 className="text-[2.5rem] sm:text-[3.5rem] md:text-[5rem]">
                  Events
                </h1>
              </div>
              <div className="w-9/10 md:w-7/10">
                <p className="text-[0.85rem] sm:text-[1rem] text-gray-200 text-center">
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
                  className="w-full bg-white text-gray-700 text-[0.9rem] sm:text-[1rem] !p-2 sm:!p-3 !pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0c4c3e]"
                />
                <LuSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
              <button className="bg-[#0c4c3e] hover:bg-[#8fbc55] text-white text-[0.9rem] sm:text-[1rem] !px-4 !py-2 sm:!py-3 rounded-lg">
                Search
              </button>
            </div>
          </div>
        </section>
        <div className="relative !-mt-15 w-9/10 flex flex-col-reverse lg:flex-row gap-10 bg-white rounded-lg !p-5 md:!p-10 !mb-10">
          <section className="w-full lg:w-3/4 flex flex-col gap-5">
            <div className="flex justify-between">
              <h3 className="text-gray-700">Total 256 results</h3>
              <div className="flex gap-8">
                <h3 className="text-gray-700">1-10 of 256</h3>
                <button>{"<"}</button>
                <button>{">"}</button>
              </div>
            </div>
            <div className="grid grid-cols-1">
              {Array.isArray(data) && data.length > 0 ? (
                data.map((event) => <EventCard key={event._id} event={event} />)
              ) : (
                <p>No events available.</p>
              )}
            </div>
          </section>
          <section className="w-full lg:w-1/4 grid grid-cols-1 sm:grid-cols-2 !gap-4 lg:flex lg:flex-col lg:!gap-y-6 lg:border-l border-gray-400 lg:!pl-10">
            {/* Filter by City */}
            <div className="text-gray-700">
              <label className="block !mb-1 text-[0.9rem] sm:text-[1rem]">
                Filter by City
              </label>
              <div ref={cityDropdownRef} className="relative w-full">
                <input
                  type="text"
                  value={cityQuery}
                  onChange={handleCityChange}
                  placeholder="Search city"
                  className="w-full !p-2 text-[0.9rem] sm:text-[1rem] border border-gray-400 rounded-lg focus:ring-2 focus:ring-[#0c4c3e] outline-none"
                />
                {filteredCities.length > 0 && (
                  <ul className="absolute z-10 bg-white w-full !mt-1 border border-gray-300 rounded-lg shadow max-h-40 overflow-y-auto">
                    {filteredCities.map((city, i) => (
                      <li
                        key={i}
                        onClick={() => selectCity(city)}
                        className="!p-2 sm:!p-3 text-[0.82rem] sm:text-[0.9rem] hover:bg-gray-100 cursor-pointer"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>

            {/* Filter by Month */}
            <div className="text-gray-700">
              <label className="block !mb-1 text-[0.9rem] sm:text-[1rem]">
                Filter by Month
              </label>
              <div ref={monthDropdownRef} className="relative">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex justify-between items-center text-[0.9rem] sm:text-[1rem] bg-white border border-gray-400 !p-2 rounded-lg focus:ring-2 focus:ring-[#0c4c3e]"
                >
                  <span
                    className={
                      selectedMonth === "Select Month"
                        ? "text-gray-400"
                        : "text-gray-700"
                    }
                  >
                    {selectedMonth}
                  </span>

                  <LuChevronDown className="text-gray-400" size={18} />
                </button>

                {/* Dropdown Menu */}
                {isOpen && (
                  <div className="absolute z-10 left-0 !mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                    {months.map((month, index) => (
                      <div
                        key={index}
                        onClick={() => {
                          setSelectedMonth(month);
                          setIsOpen(false);
                        }}
                        className="!p-2 sm:!p-3 text-[0.82rem] sm:text-[0.9rem] hover:bg-gray-100 cursor-pointer text-gray-700"
                      >
                        {month}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Filter by Industry */}
            <div className="text-gray-700">
              <label className="block !mb-1 text-[0.9rem] sm:text-[1rem]">
                Filter by Industry
              </label>
              <div ref={industryDropdownRef} className="relative w-full">
                <input
                  type="text"
                  value={industryQuery}
                  onChange={handleIndustryChange}
                  placeholder="Search industry"
                  className="w-full !p-2 text-[0.9rem] sm:text-[1rem] border border-gray-400 rounded-lg focus:ring-2 focus:ring-[#0c4c3e] outline-none"
                />
                {filteredIndustries.length > 0 && (
                  <ul className="absolute z-10 bg-white w-full !mt-1 border border-gray-300 rounded-lg shadow max-h-40 overflow-y-auto">
                    {filteredIndustries.map((industry, i) => (
                      <li
                        key={i}
                        onClick={() => selectIndustry(industry)}
                        className="!p-2 sm:!p-3 text-[0.82rem] sm:text-[0.9rem] hover:bg-gray-100 cursor-pointer"
                      >
                        {industry}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
            <div className="self-end">
              <button className="w-full text-[0.9rem] sm:text-[1rem] text-white bg-[#0c4c3e] hover:bg-[#8fbc55] !p-2 cursor-pointer rounded-lg">
                Filter
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Events;
