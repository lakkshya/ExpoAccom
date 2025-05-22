import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const EventsSliderCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-white !px-4 !py-6 rounded-lg">
      <div className="w-full h-full">
        <img
          src="/flight.jpg"
          alt={event.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="text-[1rem] sm:text-[1.2rem] text-[#e03f05] font-medium">
          Event Title
        </h1>
        <div className="flex items-center gap-2">
          <LuMapPin className="text-gray-900 text-[1rem] sm:text-[1.2rem]" />
          <span className="text-[0.9rem] sm:text-[1rem] text-gray-900">
            Location
          </span>
        </div>
        <div className="flex items-center gap-2">
          <LuCalendarDays className="text-gray-900 text-[1rem] sm:text-[1.2rem]" />
          <span className="text-[0.9rem] text-gray-900">
            startDate - endDate
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventsSliderCard;
