import { LuCalendarDays, LuMapPin } from "react-icons/lu";

const EventCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-white !p-5 rounded-lg shadow-lg">
      <div className="flex items-center gap-5">
        <div className="w-1/4 h-full">
          <img
            src="../contact.jpg"
            alt="event-logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-[1.3rem] text-[#C1121F] font-semibold">
            Breakbulk Europe 2025
          </h1>
          <span className="text-[0.9rem] text-gray-700">
            <LuCalendarDays size={18} className="inline !mr-2" />
            25 Mar 2025 - 29 Mar 2025
          </span>
          <span className="text-[0.9rem] text-gray-700">
            <LuMapPin size={18} className="inline !mr-2" />
            Ahoy Rotterdam
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <span className="text-[0.8rem] text-gray-700 font-semibold">
          Transport and Traffic
        </span>
      </div>
    </div>
  );
};

export default EventCard;
