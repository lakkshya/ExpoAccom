const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-500 flex justify-center items-center bg-gray-500/70 backdrop-blur-[2px]">
      <div className="relative w-28 h-28 flex items-center justify-center">
        {/* Spinner Border */}
        <div className="absolute inset-0 rounded-full border-4 border-t-[#0c4c3e] border-b-transparent border-l-transparent border-r-transparent animate-spin" />
        {/* Logo */}
        <img
          src="./expo-logo.png"
          alt="Loading..."
          className="w-24 h-24 z-10 rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
