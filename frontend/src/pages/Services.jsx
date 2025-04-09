import { useState } from "react";
import Navbar from "../components/Navbar";

const Services = () => {
  const services = [
    "Flights",
    "Visas and Immigration",
    "Accommodations",
    "Tour Packages",
    "Local Transfers",
  ];

  const [selectedService, setSelectedService] = useState(services[0]);
  const [expandedMobileService, setExpandedMobileService] = useState(null);

  const toggleMobile = (service) => {
    setExpandedMobileService(
      expandedMobileService === service ? null : service
    );
  };

  return (
    <div className="relative">
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center bg-[url('./services.jpg')] bg-cover bg-center bg-no-repeat !pt-35 !pb-28 md:!pt-40 md:!pb-35">
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative w-9/10 flex flex-col gap-5 items-center text-white text-center">
            <h1 className="text-[2.5rem] md:text-[5rem]">Our Services</h1>
          </div>
        </section>

        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col md:flex-row gap-10 bg-white !py-12 md:!py-15 rounded-lg">
            {/* Mobile view - Collapsible */}
            <div className="md:hidden w-full flex flex-col gap-4">
              {/* Flights */}
              <div className="border border-gray-400 rounded-lg overflow-hidden">
                <div
                  className={`cursor-pointer !px-4 !py-3 font-medium flex justify-between items-center ${
                    expandedMobileService === "Flights"
                      ? "bg-[#ff6b35] text-white"
                      : "bg-gray-200 hover:bg-[#ff6b35] hover:text-white"
                  }`}
                  onClick={() => toggleMobile("Flights")}
                >
                  Flights{" "}
                  <span>{expandedMobileService === "Flights" ? "−" : "+"}</span>
                </div>
                {expandedMobileService === "Flights" && (
                  <div className="!px-4 !py-4 text-[0.85rem] flex flex-col gap-4">
                    <img
                      src="./flight.jpg"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                      alt="Flights"
                    />
                    <p>
                      At ExpoAccom, we understand that your journey begins long
                      before you arrive at your destination. That’s why our
                      flight services are designed to deliver a seamless,
                      stress-free travel experience tailored to meet the needs
                      of both business and leisure travelers attending
                      exhibitions around the world.
                    </p>
                    <p>
                      Whether you're flying across the country or across
                      continents, our team ensures that every detail is taken
                      care of — from finding the best flight routes and timings
                      to securing the most competitive fares. We work closely
                      with a global network of airline partners, enabling us to
                      offer a wide selection of domestic and international
                      flights that suit your schedule, budget, and preferences.
                    </p>
                    <p>
                      What sets us apart is our commitment to personalized
                      service. We assist with everything from flexible ticket
                      bookings and baggage requirements to special requests and
                      travel updates. Our customer support team is available
                      around the clock to manage changes, delays, or last-minute
                      needs, ensuring you’re never left stranded.
                    </p>
                    <p>
                      With ExpoAccom, you don’t just book a flight — you unlock
                      a travel experience that prioritizes comfort, convenience,
                      and efficiency. Whether you're a solo exhibitor, part of a
                      corporate delegation, or managing group travel for your
                      team, we make sure your air travel is smooth, timely, and
                      well-coordinated with your accommodation and event
                      schedule.
                    </p>
                    <p>Fly the smart way. Fly with ExpoAccom.</p>
                  </div>
                )}
              </div>

              {/* Visas */}
              <div className="border border-gray-400 rounded-lg overflow-hidden">
                <div
                  className={`cursor-pointer !px-4 !py-3 font-medium flex justify-between items-center ${
                    expandedMobileService === "Visas"
                      ? "bg-[#ff6b35] text-white"
                      : "bg-gray-200 hover:bg-[#ff6b35] hover:text-white"
                  }`}
                  onClick={() => toggleMobile("Visas")}
                >
                  Visas and Immigration{" "}
                  <span>{expandedMobileService === "Visas" ? "−" : "+"}</span>
                </div>
                {expandedMobileService === "Visas" && (
                  <div className="!px-4 !py-4 text-[0.85rem] flex flex-col gap-4">
                    <img
                      src="./visa.jpg"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                      alt="Visa"
                    />
                    <p>
                      At ExpoAccom, we understand that international travel
                      often comes with complex visa and immigration
                      requirements. That’s why we offer comprehensive visa and
                      immigration services designed to take the stress out of
                      the process, ensuring you’re ready to travel with
                      confidence.
                    </p>
                    <p>
                      Whether you're applying for a tourist visa, business visa,
                      student visa, or any other travel documentation, our
                      experienced professionals are here to assist. We provide
                      step-by-step guidance tailored to the specific
                      requirements of your destination country, including
                      document preparation, form submission, appointment
                      scheduling, and timely updates.
                    </p>
                    <p>
                      With our deep understanding of global visa policies and a
                      network of trusted contacts, we minimize processing delays
                      and help you avoid common pitfalls. Our service includes
                      support for both individual travelers and groups, ensuring
                      every member of your team is travel-ready and compliant
                      with international regulations.
                    </p>
                    <p>
                      At ExpoAccom, we go beyond paperwork—we offer peace of
                      mind. Our personalized approach means that your specific
                      circumstances and travel goals are always taken into
                      account. Whether you're an exhibitor attending a trade
                      show abroad or a corporate team planning international
                      travel, we streamline your visa and immigration needs with
                      reliability and precision.
                    </p>
                    <p>
                      Leave the stress of visa applications behind. With
                      ExpoAccom, your global travel starts with the right
                      support.
                    </p>
                  </div>
                )}
              </div>

              {/* Accommodations */}
              <div className="border border-gray-400 rounded-lg overflow-hidden">
                <div
                  className={`cursor-pointer !px-4 !py-3 font-medium flex justify-between items-center ${
                    expandedMobileService === "Accommodations"
                      ? "bg-[#ff6b35] text-white"
                      : "bg-gray-200 hover:bg-[#ff6b35] hover:text-white"
                  }`}
                  onClick={() => toggleMobile("Accommodations")}
                >
                  Accommodations{" "}
                  <span>
                    {expandedMobileService === "Accommodations" ? "−" : "+"}
                  </span>
                </div>
                {expandedMobileService === "Accommodations" && (
                  <div className="!px-4 !py-4 text-[0.85rem] flex flex-col gap-4">
                    <img
                      src="./hotel.jpg"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                      alt="Hotel"
                    />
                    <p>
                      At ExpoAccom, we understand that the right accommodation
                      can elevate your entire travel experience. That’s why we
                      offer a diverse range of hotel and lodging solutions
                      tailored to your preferences, itinerary, and budget.
                    </p>
                    <p>
                      Whether you're attending an international exhibition,
                      traveling for business, or planning a leisure getaway, we
                      provide access to top-rated hotels, luxury resorts,
                      boutique stays, and fully-serviced apartments located near
                      key venues and attractions.
                    </p>
                    <p>
                      Our team takes the stress out of hotel booking by offering
                      curated options that match your specific needs. We handle
                      everything from securing the best rates and availability
                      to accommodating group bookings and last-minute changes.
                    </p>
                    <p>
                      Thanks to our extensive global network and long-standing
                      partnerships with trusted hospitality providers, we’re
                      able to unlock exclusive deals and offer competitive
                      pricing that you won’t find elsewhere.
                    </p>
                    <p>
                      With ExpoAccom, you’re not just booking a place to
                      stay—you’re securing comfort, convenience, and peace of
                      mind, all under one roof. Let us handle your
                      accommodations while you focus on making the most of your
                      trip.
                    </p>
                  </div>
                )}
              </div>

              {/* Tour Packages */}
              <div className="border border-gray-400 rounded-lg overflow-hidden">
                <div
                  className={`cursor-pointer !px-4 !py-3 font-medium flex justify-between items-center ${
                    expandedMobileService === "Tours"
                      ? "bg-[#ff6b35] text-white"
                      : "bg-gray-200 hover:bg-[#ff6b35] hover:text-white"
                  }`}
                  onClick={() => toggleMobile("Tours")}
                >
                  Tour Packages{" "}
                  <span>{expandedMobileService === "Tours" ? "−" : "+"}</span>
                </div>
                {expandedMobileService === "Tours" && (
                  <div className="!px-4 !py-4 text-[0.85rem] flex flex-col gap-4">
                    <img
                      src="./tour.jpg"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                      alt="Tours"
                    />
                    <p>
                      At ExpoAccom, we go beyond just booking your stay—we help
                      you explore the world through carefully crafted tour
                      packages designed for all kinds of travelers. Whether
                      you're seeking cultural enrichment, adventure, or a
                      relaxing getaway, our tour experiences cater to your
                      unique travel desires.
                    </p>
                    <p>
                      Our packages include everything from guided city tours and
                      historical excursions to offbeat adventures and serene
                      retreats. We partner with local experts and top-rated
                      operators to ensure every journey is authentic, immersive,
                      and safe.
                    </p>
                    <p>
                      Each itinerary is designed with precision, covering
                      accommodations, transfers, sightseeing activities, and
                      special experiences— so you don’t have to worry about the
                      logistics.
                    </p>
                    <p>
                      Whether you're adding a few days of leisure after an
                      exhibition or planning a full vacation, ExpoAccom ensures
                      a seamless experience from booking to your final
                      destination.
                    </p>
                    <p>
                      Let us turn your travel goals into a reality—with
                      ExpoAccom Tour Packages, unforgettable journeys are just a
                      booking away.
                    </p>
                  </div>
                )}
              </div>

              {/* Local Transfers */}
              <div className="border border-gray-400 rounded-lg overflow-hidden">
                <div
                  className={`cursor-pointer !px-4 !py-3 font-medium flex justify-between items-center ${
                    expandedMobileService === "Transfers"
                      ? "bg-[#ff6b35] text-white"
                      : "bg-gray-200 hover:bg-[#ff6b35] hover:text-white"
                  }`}
                  onClick={() => toggleMobile("Transfers")}
                >
                  Local Transfers{" "}
                  <span>
                    {expandedMobileService === "Transfers" ? "−" : "+"}
                  </span>
                </div>
                {expandedMobileService === "Transfers" && (
                  <div className="!px-4 !py-4 text-[0.85rem] flex flex-col gap-4">
                    <img
                      src="./local.jpg"
                      className="w-full h-64 object-cover rounded-lg shadow-md"
                      alt="Local Transfers"
                    />
                    <p>
                      At ExpoAccom, we understand that smooth local
                      transportation is key to a stress-free travel experience.
                      That’s why we offer reliable, safe, and efficient local
                      transfer services tailored to your itinerary.
                    </p>
                    <p>
                      Whether you need airport pickups, hotel drop-offs, daily
                      exhibition transfers, or transportation for corporate
                      meetings and events, our team ensures punctual service
                      with comfort at the forefront.
                    </p>
                    <p>
                      Our fleet consists of well-maintained vehicles driven by
                      professional and courteous drivers who know the local
                      routes and traffic patterns—ensuring you reach your
                      destination on time, every time.
                    </p>
                    <p>
                      From solo travelers to large groups, we provide flexible
                      transport solutions that match your schedule and
                      preferences, so you can focus on what matters most.
                    </p>
                    <p>
                      With ExpoAccom, local travel is no longer a challenge—it's
                      a seamless extension of your journey.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Left Side - Service List */}
            <div className="w-full md:w-1/4 hidden md:flex flex-col gap-2">
              <ul className="flex flex-col gap-2">
                {services.map((service, index) => (
                  <li
                    key={index}
                    className={`text-[0.9rem] md:text-[1rem] cursor-pointer !p-3 md:!p-4 rounded ${
                      selectedService === service
                        ? "bg-[#ff6b35] text-white"
                        : "bg-gray-200 hover:bg-[#ff6b35] hover:text-white"
                    }`}
                    onClick={() => setSelectedService(service)}
                  >
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Side - Service Content */}
            <div className="w-full md:w-3/4 hidden md:flex flex-col gap-2">
              <h2 className="text-[1.2rem] md:text-[1.3rem] font-semibold">
                {selectedService}
              </h2>

              {selectedService === "Flights" && (
                <div className="text-[0.85rem] md:text-[1rem] flex flex-col gap-4">
                  <img
                    src="./flight.jpg"
                    alt="Flight Service"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                  <p>
                    At ExpoAccom, we understand that your journey begins long
                    before you arrive at your destination. That’s why our flight
                    services are designed to deliver a seamless, stress-free
                    travel experience tailored to meet the needs of both
                    business and leisure travelers attending exhibitions around
                    the world.
                  </p>
                  <p>
                    Whether you're flying across the country or across
                    continents, our team ensures that every detail is taken care
                    of — from finding the best flight routes and timings to
                    securing the most competitive fares. We work closely with a
                    global network of airline partners, enabling us to offer a
                    wide selection of domestic and international flights that
                    suit your schedule, budget, and preferences.
                  </p>
                  <p>
                    What sets us apart is our commitment to personalized
                    service. We assist with everything from flexible ticket
                    bookings and baggage requirements to special requests and
                    travel updates. Our customer support team is available
                    around the clock to manage changes, delays, or last-minute
                    needs, ensuring you’re never left stranded.
                  </p>
                  <p>
                    With ExpoAccom, you don’t just book a flight — you unlock a
                    travel experience that prioritizes comfort, convenience, and
                    efficiency. Whether you're a solo exhibitor, part of a
                    corporate delegation, or managing group travel for your
                    team, we make sure your air travel is smooth, timely, and
                    well-coordinated with your accommodation and event schedule.
                  </p>
                  <p>Fly the smart way. Fly with ExpoAccom.</p>
                </div>
              )}

              {selectedService === "Visas and Immigration" && (
                <div className="text-[0.85rem] md:text-[1rem] flex flex-col gap-4">
                  <img
                    src="./visa.jpg"
                    alt="Visa and Immigration Service"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                  <p>
                    At ExpoAccom, we understand that international travel often
                    comes with complex visa and immigration requirements. That’s
                    why we offer comprehensive visa and immigration services
                    designed to take the stress out of the process, ensuring
                    you’re ready to travel with confidence.
                  </p>
                  <p>
                    Whether you're applying for a tourist visa, business visa,
                    student visa, or any other travel documentation, our
                    experienced professionals are here to assist. We provide
                    step-by-step guidance tailored to the specific requirements
                    of your destination country, including document preparation,
                    form submission, appointment scheduling, and timely updates.
                  </p>
                  <p>
                    With our deep understanding of global visa policies and a
                    network of trusted contacts, we minimize processing delays
                    and help you avoid common pitfalls. Our service includes
                    support for both individual travelers and groups, ensuring
                    every member of your team is travel-ready and compliant with
                    international regulations.
                  </p>
                  <p>
                    At ExpoAccom, we go beyond paperwork—we offer peace of mind.
                    Our personalized approach means that your specific
                    circumstances and travel goals are always taken into
                    account. Whether you're an exhibitor attending a trade show
                    abroad or a corporate team planning international travel, we
                    streamline your visa and immigration needs with reliability
                    and precision.
                  </p>
                  <p>
                    Leave the stress of visa applications behind. With
                    ExpoAccom, your global travel starts with the right support.
                  </p>
                </div>
              )}

              {selectedService === "Accommodations" && (
                <div className="text-[0.85rem] md:text-[1rem] flex flex-col gap-4">
                  <img
                    src="./hotel.jpg"
                    alt="Accommodation Service"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                  <p>
                    At ExpoAccom, we understand that the right accommodation can
                    elevate your entire travel experience. That’s why we offer a
                    diverse range of hotel and lodging solutions tailored to
                    your preferences, itinerary, and budget.
                  </p>
                  <p>
                    Whether you're attending an international exhibition,
                    traveling for business, or planning a leisure getaway, we
                    provide access to top-rated hotels, luxury resorts, boutique
                    stays, and fully-serviced apartments located near key venues
                    and attractions.
                  </p>
                  <p>
                    Our team takes the stress out of hotel booking by offering
                    curated options that match your specific needs. We handle
                    everything from securing the best rates and availability to
                    accommodating group bookings and last-minute changes.
                  </p>
                  <p>
                    Thanks to our extensive global network and long-standing
                    partnerships with trusted hospitality providers, we’re able
                    to unlock exclusive deals and offer competitive pricing that
                    you won’t find elsewhere.
                  </p>
                  <p>
                    With ExpoAccom, you’re not just booking a place to
                    stay—you’re securing comfort, convenience, and peace of
                    mind, all under one roof. Let us handle your accommodations
                    while you focus on making the most of your trip.
                  </p>
                </div>
              )}

              {selectedService === "Tour Packages" && (
                <div className="text-[0.85rem] md:text-[1rem] flex flex-col gap-4">
                  <img
                    src="./tour.jpg"
                    alt="Tour Package Service"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                  <p>
                    At ExpoAccom, we go beyond just booking your stay—we help
                    you explore the world through carefully crafted tour
                    packages designed for all kinds of travelers. Whether you're
                    seeking cultural enrichment, adventure, or a relaxing
                    getaway, our tour experiences cater to your unique travel
                    desires.
                  </p>
                  <p>
                    Our packages include everything from guided city tours and
                    historical excursions to offbeat adventures and serene
                    retreats. We partner with local experts and top-rated
                    operators to ensure every journey is authentic, immersive,
                    and safe.
                  </p>
                  <p>
                    Each itinerary is designed with precision, covering
                    accommodations, transfers, sightseeing activities, and
                    special experiences— so you don’t have to worry about the
                    logistics.
                  </p>
                  <p>
                    Whether you're adding a few days of leisure after an
                    exhibition or planning a full vacation, ExpoAccom ensures a
                    seamless experience from booking to your final destination.
                  </p>
                  <p>
                    Let us turn your travel goals into a reality—with ExpoAccom
                    Tour Packages, unforgettable journeys are just a booking
                    away.
                  </p>
                </div>
              )}

              {selectedService === "Local Transfers" && (
                <div className="text-[0.85rem] md:text-[1rem] flex flex-col gap-4">
                  <img
                    src="./local.jpg"
                    alt="Local Transfer Service"
                    className="w-full h-80 object-cover rounded-lg shadow-md"
                  />
                  <p>
                    At ExpoAccom, we understand that smooth local transportation
                    is key to a stress-free travel experience. That’s why we
                    offer reliable, safe, and efficient local transfer services
                    tailored to your itinerary.
                  </p>
                  <p>
                    Whether you need airport pickups, hotel drop-offs, daily
                    exhibition transfers, or transportation for corporate
                    meetings and events, our team ensures punctual service with
                    comfort at the forefront.
                  </p>
                  <p>
                    Our fleet consists of well-maintained vehicles driven by
                    professional and courteous drivers who know the local routes
                    and traffic patterns—ensuring you reach your destination on
                    time, every time.
                  </p>
                  <p>
                    From solo travelers to large groups, we provide flexible
                    transport solutions that match your schedule and
                    preferences, so you can focus on what matters most.
                  </p>
                  <p>
                    With ExpoAccom, local travel is no longer a challenge—it's a
                    seamless extension of your journey.
                  </p>
                </div>
              )}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Services;
