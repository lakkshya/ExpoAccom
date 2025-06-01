import ExpoDestinationCard from "./ExpoDestinationCard";

const ExpoDestinations = () => {
  const destinations = [
    { name: "Dubai", img: "./dubai.jpg" },
    { name: "Delhi", img: "./delhi.jpg" },
    { name: "Paris", img: "./paris.jpg" },
    { name: "London", img: "./london.jpg" },
    { name: "Amsterdam", img: "./amsterdam.jpg" },
    { name: "Milan", img: "./milan.jpg" },
  ];
  return (
    <div className="w-full flex flex-col gap-5">
      <h1 className="text-[1.2rem] sm:text-[1.5rem] font-medium">
        Popular Expo Destinations
      </h1>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 md:gap-8">
        {destinations.map((destination, index) => (
          <ExpoDestinationCard key={index} destination={destination} />
        ))}
      </div>
    </div>
  );
};

export default ExpoDestinations;
