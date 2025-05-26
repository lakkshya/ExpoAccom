import { useEffect, useRef } from "react";
import useFetch from "../../hooks/useFetch";
import EventsSliderCard from "./EventsSliderCard";

const EventsSlider = () => {
  const { data, loading, error } = useFetch(
    `${import.meta.env.VITE_API_URL}/api/events/`
  );

  const sliderRef = useRef(null);

  useEffect(() => {
    const scrollContainer = sliderRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;

    const scrollEvents = () => {
      scrollAmount += 1;
      if (scrollAmount >= scrollContainer.scrollWidth / 2) {
        scrollAmount = 0;
      }
      scrollContainer.scrollLeft = scrollAmount;
    };

    const interval = setInterval(scrollEvents, 20);

    return () => clearInterval(interval);
  }, [data]);

  if (loading) {
    return <p>Loading data...</p>;
  }

  if (error) {
    return <p>Error fetching data : {error.message}</p>;
  }

  return (
    <div className="w-full flex flex-col gap-5 bg-[#0C4C3E] !px-5 !py-8 sm:!px-8 sm:!py-10">
      <h1 className="text-[1.2rem] sm:text-[1.5rem] font-medium text-white">Upcoming Events</h1>
      <div
        ref={sliderRef}
        className="relative flex overflow-hidden whitespace-nowrap"
      >
        <div className="flex !space-x-5">
          {data.map((event, index) => (
            <EventsSliderCard key={index} event={event} />
          ))}
          {/* Duplicate cards for seamless looping */}
          {data.map((event, index) => (
            <EventsSliderCard key={`duplicate-${index}`} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSlider;
