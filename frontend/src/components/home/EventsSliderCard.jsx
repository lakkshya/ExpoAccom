import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const EventsSliderCard = ({ event }) => {
  return (
    <Link to={`/events/${event._id}`}>
      <div className="w-56 sm:w-62 flex flex-col gap-4 bg-white hover:bg-gray-100 !px-4 !py-6 rounded-lg">
        <div className="w-full h-full border border-gray-300 rounded-lg">
          <img
            src={event.logo}
            alt={event.title}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h1 className="text-[0.9rem] sm:text-[1rem] text-[#e03f05] font-medium whitespace-nowrap overflow-hidden text-ellipsis">
            {event.title}
          </h1>
          <div className="flex items-center gap-2">
            <LuMapPin className="text-gray-900 text-[0.9rem] sm:text-[1rem] flex-shrink-0" />
            <span className="text-[0.825rem] sm:text-[0.9rem] text-gray-900 whitespace-nowrap overflow-hidden text-ellipsis">
              {event.location}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <LuCalendarDays className="text-gray-900 text-[0.9rem] sm:text-[1rem] flex-shrink-0" />
            <span className="text-[0.825rem] sm:text-[0.9rem] text-gray-900">
              {event.startDate} - {event.endDate}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventsSliderCard;
