import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Services = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center !pt-35 !pb-28 md:!pt-40 md:!pb-35">
          <img
            src="/services.jpg"
            alt="Services Cover Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Content */}
          <div className="relative w-9/10 flex flex-col gap-5 items-center text-white text-center z-20">
            <h1 className="text-[2.2rem] md:text-[4rem]">Our Services</h1>
          </div>
        </section>

        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col gap-10 bg-white !py-12 md:!py-15 rounded-lg">
            <div className="flex flex-col-reverse md:flex-row justify-between rounded-lg overflow-hidden border-1 border-gray-200 shadow-lg">
              <div className="w-full md:w-2/3 flex flex-col justify-center gap-4 !px-5 !pt-5 !pb-8 md:!px-5 ">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1.3rem] font-medium">
                    Flights – Connecting You to the World with Ease
                  </h2>
                  <p className="text-[0.9rem]/6 text-gray-600">
                    At ExpoAccom, we provide seamless flight services for
                    business and leisure travelers. With competitive pricing,
                    diverse options, and reliable support, we make your journey
                    comfortable, convenient, and stress-free. Travel the
                    ExpoAccom way — efficient, reliable, and tailored to you.
                  </p>
                </div>
                <div>
                  <Link
                    to="/services/flights"
                    className="bg-[#0c4c3e] text-white hover:bg-[#8fbc55] text-[0.9rem] cursor-pointer !p-2 rounded-lg"
                  >
                    See more
                  </Link>
                </div>
              </div>
              <img
                src="/flight.jpg"
                className="w-full md:w-1/3 bg-cover h-56"
                alt="flight image"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between rounded-lg overflow-hidden border-1 border-gray-200 shadow-lg">
              <div className="w-full md:w-2/3 flex flex-col justify-center gap-4 !px-5 !pt-5 !pb-8 md:!px-5">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1.3rem] font-medium">
                    Visas & Immigrations – Your Trusted Partner in Global Travel
                  </h2>
                  <p className="text-[0.9rem]/6 text-gray-600">
                    At ExpoAccom, we offer expert visa and immigration services
                    for tourists, students, and professionals. Our experienced
                    team ensures a smooth, hassle-free process with accurate
                    advice, quick processing, and personalized support. Let us
                    simplify your travel plans.
                  </p>
                </div>
                <div>
                  <Link
                    to="/services/visas"
                    className="bg-[#0c4c3e] text-white hover:bg-[#8fbc55] text-[0.9rem] cursor-pointer !p-2 rounded-lg"
                  >
                    See more
                  </Link>
                </div>
              </div>
              <img
                src="/visa.jpg"
                className="w-full md:w-1/3 bg-cover h-56"
                alt="flight image"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between rounded-lg overflow-hidden border-1 border-gray-200 shadow-lg">
              <div className="w-full md:w-2/3 flex flex-col justify-center gap-4 !px-5 !pt-5 !pb-8 md:!px-5">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1.3rem] font-medium">
                    Hotels & Accommodations – Your Perfect Stay, Every Time
                  </h2>
                  <p className="text-[0.9rem]/6 text-gray-600">
                    At ExpoAccom, we offer a wide range of hotel and
                    accommodation options to suit your needs and budget. From
                    business trips to leisure getaways, we ensure a comfortable,
                    hassle-free stay with competitive rates and exclusive deals.
                    Let us handle your stay, so you can enjoy your trip.
                  </p>
                </div>
                <div>
                  <Link
                    to="/services/hotels"
                    className="bg-[#0c4c3e] text-white hover:bg-[#8fbc55] text-[0.9rem] cursor-pointer !p-2 rounded-lg"
                  >
                    See more
                  </Link>
                </div>
              </div>
              <img
                src="/hotel.jpg"
                className="w-full md:w-1/3 bg-cover h-56"
                alt="flight image"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between rounded-lg overflow-hidden border-1 border-gray-200 shadow-lg">
              <div className="w-full md:w-2/3 flex flex-col justify-center gap-4 !px-5 !pt-5 !pb-8 md:!px-5">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1.3rem] font-medium">
                    Tour Packages – Explore the World with Expertly Curated
                    Journeys
                  </h2>
                  <p className="text-[0.9rem]/6 text-gray-600">
                    At ExpoAccom, we offer custom tour packages for
                    unforgettable travel experiences. From adventure to cultural
                    escapes, we handle everything—stay, transport, and
                    activities—so you can focus on making memories. Your dream
                    trip is just a booking away.
                  </p>
                </div>
                <div>
                  <Link
                    to="/services/tour-packages"
                    className="bg-[#0c4c3e] text-white hover:bg-[#8fbc55] text-[0.9rem] cursor-pointer !p-2 rounded-lg"
                  >
                    See more
                  </Link>
                </div>
              </div>
              <img
                src="/tour.jpg"
                className="w-full md:w-1/3 bg-cover h-56"
                alt="flight image"
                loading="lazy"
              />
            </div>

            <div className="flex flex-col-reverse md:flex-row justify-between rounded-lg overflow-hidden border-1 border-gray-200 shadow-lg">
              <div className="w-full md:w-2/3 flex flex-col justify-center gap-4 !px-5 !pt-5 !pb-8 md:!px-5">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1.3rem] font-medium">
                    Local Transfers – Effortless Travel Within Your Destination
                  </h2>
                  <p className="text-[0.9rem]/6 text-gray-600">
                    At ExpoAccom, we offer reliable local transfer services for
                    airport pickups, hotel drops, meetings, and events. With
                    professional drivers and well-maintained vehicles, we ensure
                    safe, timely, and hassle-free travel at your destination.
                  </p>
                </div>
                <div>
                  <Link
                    to="/services/local-transfers"
                    className="bg-[#0c4c3e] text-white hover:bg-[#8fbc55] text-[0.9rem] cursor-pointer !p-2 rounded-lg"
                  >
                    See more
                  </Link>
                </div>
              </div>
              <img
                src="/local.jpg"
                className="w-full md:w-1/3 bg-cover h-56"
                alt="flight image"
                loading="lazy"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Services;
