import { LuCalendarDays, LuMapPin } from "react-icons/lu";

const EventCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-white !px-4 !py-6 border-t-1 border-gray-300">
      <div className="flex flex-col sm:flex-row sm:items-center gap-5">
        <div className="w-full sm:w-1/5 h-full">
          <img
            src="../contact.jpg"
            alt="event-logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 xs:gap-2">
          <div className="flex-col md:block gap-1">
            <h1 className="inline text-[1rem] xs:text-[1.2rem] text-[#FF6B35] font-medium">
              Breakbulk Europe 2025
            </h1>
            <span className="hidden md:inline"> | </span>
            <span className="block md:inline text-[0.9rem] xs:text-[1rem] text-gray-700">
              <LuMapPin size={18} className="inline md:hidden !mr-2" />
              Ahoy Rotterdam
            </span>
          </div>

          <div className="flex gap-2">
            <LuCalendarDays size={18} className="text-gray-700" />
            <span className="text-[0.9rem] text-gray-700">
              25 Mar 2025 - 29 Mar 2025
            </span>
          </div>

          <div>
            <span className="text-[0.8rem] text-gray-600 font-semibold bg-[#EFEFD0] rounded-md !px-2">
              Transport and Traffic
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
