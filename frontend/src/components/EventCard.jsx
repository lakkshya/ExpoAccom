import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  return (
    <Link to={`/events/${event._id}`}>
      <div className="flex flex-col gap-4 bg-white !px-4 !py-6 border-t-1 border-gray-300">
        <div className="flex flex-col xs:items-center sm:flex-row sm:items-center gap-5">
          <div className="w-full xs:w-1/2 sm:w-1/4 lg:w-1/5 h-full">
            <img
              src={event.logo}
              alt={event.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col gap-1 sm:gap-2">
            <div className="flex-col lg:block">
              <h1 className="inline text-[1rem] sm:text-[1.2rem] text-[#e03f05] font-medium">
                {event.title}
              </h1>
              <span className="hidden lg:inline"> | </span>
              <div className="flex items-center gap-2 lg:inline !mt-1 sm:!mt-2">
                <LuMapPin className="inline lg:hidden text-gray-900 text-[1rem] sm:text-[1.2rem]" />
                <span className="text-[0.9rem] sm:text-[1rem] text-gray-900">
                  {event.location}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <LuCalendarDays className="text-gray-900 text-[1rem] sm:text-[1.2rem]" />
              <span className="text-[0.9rem] text-gray-900">
                {event.startDate} - {event.endDate}
              </span>
            </div>

            <div>
              {event.industry.map((item, key) => (
                <span key={key} className="text-[0.8rem] text-gray-900 font-semibold bg-[rgb(231,231,231)] rounded-md !px-2 !mr-1">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
