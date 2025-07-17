import { useState, useRef, useEffect } from "react";
import useFetch from "../hooks/useFetch";
import { useNavigate } from "react-router-dom";

import EventCard from "../components/EventCard";
import Navbar from "../components/Navbar";
import { LuSearch, LuChevronDown, LuSlidersHorizontal } from "react-icons/lu";
import LoadingScreen from "../components/LoadingScreen";

const Events = () => {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_URL}/api/events/`
  );

  const navigate = useNavigate();

  const cities = ["Dubai", "Madrid", "Berlin", "Munich", "Frankfurt"];
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
    "Food",
    "Beverages",
    "Machinery",
    "Robotics",
    "Laboratory",
    "Packaging",
    "Publishing",
  ];

  const [showMobileFilters, setShowMobileFilters] = useState(false);

  const [eventQuery, setEventQuery] = useState("");
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);

  const [isCityDropdownOpen, setIsCityDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Select City");

  const [isMonthDropdownOpen, setIsMonthDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("Select Month");

  const [isIndustryDropdownOpen, setIsIndustryDropdownOpen] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("Select Industry");

  const [isFilterLoading, setIsFilterLoading] = useState(false);
  const [filteredEvents, setFilteredEvents] = useState([]);
  const [isFilterActive, setIsFilterActive] = useState(false);

  const cityDropdownRef = useRef(null);
  const monthDropdownRef = useRef(null);
  const industryDropdownRef = useRef(null);

  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const eventsToDisplay = isFilterActive ? filteredEvents : data;

  const totalEvents = eventsToDisplay.length;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalEvents);

  const paginatedEvents = eventsToDisplay.slice(startIndex, endIndex);

  const handleEventQueryChange = (e) => {
    const value = e.target.value;
    setEventQuery(value);

    if (value.trim() === "") {
      setFilteredSuggestions([]); // hide suggestions when empty
      return;
    }

    const suggestions = data.filter((event) =>
      event.title.toLowerCase().startsWith(value.toLowerCase())
    );

    setFilteredSuggestions(suggestions);
  };

  const handleEventSelect = (selectedEvent) => {
    setEventQuery(selectedEvent.title);
    setFilteredSuggestions([]);
    navigate(`/events/${selectedEvent._id}`);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        monthDropdownRef.current &&
        !monthDropdownRef.current.contains(event.target)
      ) {
        setIsMonthDropdownOpen(false);
      }

      if (
        cityDropdownRef.current &&
        !cityDropdownRef.current.contains(event.target)
      ) {
        setIsCityDropdownOpen(false);
      }

      if (
        industryDropdownRef.current &&
        !industryDropdownRef.current.contains(event.target)
      ) {
        setIsIndustryDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [filteredEvents, isFilterActive]);

  const applyFilters = () => {
    setIsFilterLoading(true);

    setTimeout(() => {
      const result = data.filter((event) => {
        const eventMonth = new Date(event.startDate).toLocaleString("default", {
          month: "long",
        });

        const monthMatch =
          selectedMonth === "Select Month" || eventMonth === selectedMonth;

        const cityMatch =
          selectedCity === "Select City" ||
          event.location.toLowerCase().includes(selectedCity.toLowerCase());

        const industryMatch =
          selectedIndustry === "Select Industry" ||
          event.industry.some((ind) =>
            ind.toLowerCase().includes(selectedIndustry.toLowerCase())
          );

        return monthMatch && cityMatch && industryMatch;
      });

      setFilteredEvents(result);
      setIsFilterActive(true);
      setIsFilterLoading(false);
      setShowMobileFilters(false);
    }, 2000);
  };

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data : {error.message}</p>;
  }

  return (
    <div className="relative">
      {isFilterLoading && <LoadingScreen />}

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
                  value={eventQuery}
                  onChange={handleEventQueryChange}
                  className="w-full bg-white text-gray-700 text-[0.9rem] sm:text-[1rem] !p-2 sm:!p-3 !pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0c4c3e]"
                />
                {filteredSuggestions.length > 0 && (
                  <ul className="absolute z-10 bg-white w-full mt-1 border border-gray-300 rounded-lg shadow max-h-60 overflow-y-auto">
                    {filteredSuggestions.map((event, index) => (
                      <li
                        key={index}
                        onClick={() => handleEventSelect(event)}
                        className="p-2 sm:p-3 text-[0.85rem] hover:bg-gray-100 cursor-pointer text-gray-700"
                      >
                        {event.title}
                      </li>
                    ))}
                  </ul>
                )}

                <LuSearch
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
              </div>
            </div>
          </div>
        </section>

        <div className="relative w-9/10 flex flex-col gap-5 bg-white rounded-lg !-mt-15 !p-5 md:!p-10 !mb-10">
          {/* Mobile Filter Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setShowMobileFilters((prev) => !prev)}
              className="flex items-center gap-2 text-[0.95rem] text-left bg-gray-200 hover:bg-gray-300 !p-2 rounded-lg"
            >
              <LuSlidersHorizontal className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>

          <div className="flex flex-col-reverse lg:flex-row gap-10">
            <section className="w-full lg:w-3/4 flex flex-col gap-5">
              <div className="flex flex-col gap-3 xs:flex-row justify-between items-center">
                <h3 className="text-gray-700">
                  {startIndex + 1}–{endIndex} of {totalEvents} results
                </h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() =>
                      setCurrentPage((prev) => Math.max(prev - 1, 1))
                    }
                    disabled={currentPage === 1}
                    className={`!px-3 !py-1 rounded transition ${
                      currentPage === 1
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300 text-black"
                    }`}
                  >
                    {"<"}
                  </button>
                  <span className="text-gray-700">Page {currentPage}</span>
                  <button
                    onClick={() =>
                      setCurrentPage((prev) =>
                        prev < Math.ceil(totalEvents / itemsPerPage)
                          ? prev + 1
                          : prev
                      )
                    }
                    disabled={endIndex >= totalEvents}
                    className={`!px-3 !py-1 rounded transition ${
                      endIndex >= totalEvents
                        ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                        : "bg-gray-200 hover:bg-gray-300 text-black"
                    }`}
                  >
                    {">"}
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1">
                {paginatedEvents.length > 0 ? (
                  paginatedEvents.map((event) => (
                    <div key={event._id} className="hover:bg-gray-100">
                      <EventCard event={event} />
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center !py-4">
                    No events found.
                  </p>
                )}
              </div>
            </section>

            <section
              className={` ${
                showMobileFilters ? "flex" : "hidden"
              } w-full lg:w-1/4 grid grid-cols-1 sm:grid-cols-2 !gap-4 lg:flex lg:flex-col lg:!gap-y-6 lg:border-l border-gray-400 lg:!pl-10`}
            >
              {/* Filter by City */}
              <div className="text-gray-700">
                <label className="block !mb-1 text-[0.9rem] sm:text-[1rem]">
                  Filter by City
                </label>
                <div ref={cityDropdownRef} className="relative w-full">
                  <button
                    onClick={() => setIsCityDropdownOpen(!isCityDropdownOpen)}
                    className="w-full flex justify-between items-center text-[0.9rem] sm:text-[1rem] bg-white border border-gray-400 !p-2 rounded-lg focus:ring-2 focus:ring-[#0c4c3e]"
                  >
                    <span
                      className={
                        selectedCity === "Select City"
                          ? "text-gray-400"
                          : "text-gray-700"
                      }
                    >
                      {selectedCity}
                    </span>

                    <LuChevronDown className="text-gray-400" size={18} />
                  </button>

                  {/* Dropdown Menu */}
                  {isCityDropdownOpen && (
                    <div className="absolute z-10 left-0 !mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                      {cities.map((city, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedCity(city);
                            setIsCityDropdownOpen(false);
                          }}
                          className="!p-2 sm:!p-3 text-[0.82rem] sm:text-[0.9rem] hover:bg-gray-100 cursor-pointer text-gray-700"
                        >
                          {city}
                        </div>
                      ))}
                    </div>
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
                    onClick={() => setIsMonthDropdownOpen(!isMonthDropdownOpen)}
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
                  {isMonthDropdownOpen && (
                    <div className="absolute z-10 left-0 !mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                      {months.map((month, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedMonth(month);
                            setIsMonthDropdownOpen(false);
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
                  <button
                    onClick={() =>
                      setIsIndustryDropdownOpen(!isIndustryDropdownOpen)
                    }
                    className="w-full flex justify-between items-center text-[0.9rem] sm:text-[1rem] bg-white border border-gray-400 !p-2 rounded-lg focus:ring-2 focus:ring-[#0c4c3e]"
                  >
                    <span
                      className={
                        selectedIndustry === "Select Industry"
                          ? "text-gray-400"
                          : "text-gray-700"
                      }
                    >
                      {selectedIndustry}
                    </span>

                    <LuChevronDown className="text-gray-400" size={18} />
                  </button>

                  {/* Dropdown Menu */}
                  {isIndustryDropdownOpen && (
                    <div className="absolute z-10 left-0 !mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto">
                      {industries.map((industry, index) => (
                        <div
                          key={index}
                          onClick={() => {
                            setSelectedIndustry(industry);
                            setIsIndustryDropdownOpen(false);
                          }}
                          className="!p-2 sm:!p-3 text-[0.82rem] sm:text-[0.9rem] hover:bg-gray-100 cursor-pointer text-gray-700"
                        >
                          {industry}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <div className="flex items-end gap-2">
                <button
                  onClick={applyFilters}
                  className="w-full sm:h-10 text-[0.9rem] sm:text-[1rem] text-white bg-[#0c4c3e] hover:bg-[#8fbc55] !p-2 cursor-pointer rounded-lg"
                >
                  Filter
                </button>
                <button
                  onClick={() => {
                    setIsFilterLoading(true);

                    setTimeout(() => {
                      setSelectedCity("Select City");
                      setSelectedMonth("Select Month");
                      setSelectedIndustry("Select Industry");
                      setFilteredEvents([]);
                      setIsFilterActive(false);
                      setIsFilterLoading(false);
                      setShowMobileFilters(false);
                    }, 1500);
                  }}
                  className="w-full sm:h-10 text-[0.9rem] sm:text-[1rem] text-gray-700 bg-gray-200 hover:bg-gray-300 !p-2 cursor-pointer rounded-lg"
                >
                  Reset
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Events;
