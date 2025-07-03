import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { LuChevronDown } from "react-icons/lu";

const EventSelectMenu = ({ value, onChange, error }) => {
  const [events, setEvents] = useState([]);
  const [eventSearch, setEventSearch] = useState("");
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const eventDropdownRef = useRef(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}/api/events`
        );
        setEvents(res.data);
      } catch (error) {
        console.error("Failed to fetch events", error);
      }
    };

    const handleClickOutside = (event) => {
      if (
        eventDropdownRef.current &&
        !eventDropdownRef.current.contains(event.target)
      ) {
        setIsEventDropdownOpen(false);
      }
    };
    fetchEvents();
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <label htmlFor="event" className="block">
        Event <span className="text-red-600">*</span>
      </label>
      <div ref={eventDropdownRef} className="relative">
        <button
          type="button"
          onClick={() => setIsEventDropdownOpen(!isEventDropdownOpen)}
          className="w-full flex justify-between items-center text-[0.9rem] xs:text-[1rem] bg-[#f9f9f9] !p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0c4c3e]"
        >
          <span className={value === "" ? "text-gray-400" : "text-gray-700"}>
            {value || "Select Event"}
          </span>
          <LuChevronDown className="text-gray-400" size={18} />
        </button>

        {isEventDropdownOpen && (
          <div className="absolute z-10 left-0 mt-1 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
            <div className="p-2">
              <input
                type="text"
                placeholder="Search event..."
                value={eventSearch}
                onChange={(e) => setEventSearch(e.target.value)}
                className="w-full p-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-[#0c4c3e]"
              />
            </div>
            {events
              .filter((event) =>
                event.title.toLowerCase().startsWith(eventSearch.toLowerCase())
              )
              .map((event, index) => (
                <div
                  key={index}
                  onClick={() => {
                    onChange(event.title);
                    setIsEventDropdownOpen(false);
                    setEventSearch("");
                  }}
                  className="p-2 sm:p-3 text-sm hover:bg-gray-100 cursor-pointer text-gray-700"
                >
                  {event.title}
                </div>
              ))}
          </div>
        )}
      </div>
      {error && (
        <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] mt-1">
          {error}
        </p>
      )}
    </div>
  );
};

export default EventSelectMenu;
