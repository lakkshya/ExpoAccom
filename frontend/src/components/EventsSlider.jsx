import { useEffect, useRef } from "react";
import EventsSliderCard from "./EventsSliderCard";

const EventsSlider = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const scrollContainer = sliderRef.current;
    let scrollAmount = 0;

    const scrollEvents = () => {
      if (scrollContainer) {
        scrollAmount += 1;
        scrollContainer.scrollLeft = scrollAmount;

        if (scrollAmount >= scrollContainer.scrollWidth / 2) {
          scrollAmount = 0;
        }
      }
    };

    const interval = setInterval(scrollEvents, 30);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col gap-5 bg-gray-200 !px-8 !py-5 rounded-lg">
      <h1 className="text-[1.5rem] font-medium text-gray-700">
        Upcoming Events
      </h1>
      <div
        ref={sliderRef}
        className="relative flex overflow-hidden whitespace-nowrap"
      >
        <div className="flex space-x-5">
          {/* Duplicate events for infinite loop */}
          {[...Array(2)].flatMap(() => [
            <EventsSliderCard key={Math.random()} />,
            <EventsSliderCard key={Math.random()} />,
            <EventsSliderCard key={Math.random()} />,
            <EventsSliderCard key={Math.random()} />,
          ])}
        </div>
      </div>
    </div>
  );
};

export default EventsSlider;
