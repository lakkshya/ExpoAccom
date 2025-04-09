import { LuCalendarDays, LuMapPin } from "react-icons/lu";

const EventCard = () => {
  return (
    <div className="flex flex-col gap-4 bg-white !px-4 !py-6 border-t-1 border-gray-300">
      <div className="flex flex-col xs:items-center sm:flex-row sm:items-center gap-5">
        <div className="w-full xs:w-1/2 sm:w-1/4 lg:w-1/5 h-full">
          <img
            src="../contact.jpg"
            alt="event-logo"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col gap-1 sm:gap-2">
          <div className="flex-col lg:block">
            <h1 className="inline text-[1rem] sm:text-[1.2rem] text-[#FF6B35] font-medium">
              Breakbulk Europe 2025
            </h1>
            <span className="hidden lg:inline"> | </span>
            <div className="flex items-center gap-2 lg:inline !mt-1 sm:!mt-2">
              <LuMapPin className="inline lg:hidden text-gray-700 text-[1rem] sm:text-[1.2rem]" />
              <span className="text-[0.9rem] sm:text-[1rem] text-gray-700">
                Ahoy Rotterdam
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <LuCalendarDays className="text-gray-700 text-[1rem] sm:text-[1.2rem]" />
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
