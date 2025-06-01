const ExpoDestinationCard = ({ destination }) => {
  return (
    <div
      className="relative h-20 overflow-hidden rounded-lg bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${destination.img})` }}
    >
      <div className="absolute inset-0 bg-black/40"></div>
      <h2 className="relative text-[1.2rem] text-white font-semibold">
        {destination.name}
      </h2>
    </div>
  );
};

export default ExpoDestinationCard;
