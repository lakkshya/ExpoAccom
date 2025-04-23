// import { useState } from "react";
import Navbar from "../components/Navbar";

const Flights = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center !pt-35 !pb-28 md:!pt-40 md:!pb-35">
          <img
            src="/flight-bg.jpg"
            alt="Flight Cover Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Content */}
          <div className="relative w-9/10 flex flex-col gap-5 items-center text-white text-center z-20">
            <h1 className="text-[2.2rem] md:text-[4rem]">Flights</h1>
          </div>
        </section>

        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col gap-10 bg-white !py-12 md:!py-15 rounded-lg">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-[1.3rem] font-medium">
                Flights – Connecting You to the World with Ease
              </h2>

              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we take pride in offering seamless and dependable
                flight services designed to cater to both business and leisure
                travelers. Whether you’re traveling for an important corporate
                event, attending an international trade exhibition, or setting
                off on a long-awaited vacation, we are here to make your journey
                smooth, comfortable, and worry-free from start to finish.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                With access to a wide global network of leading domestic and
                international airlines, we provide a diverse range of flight
                options tailored to meet your unique schedule, preferences, and
                budget. From economy class for cost-effective travel to premium
                economy, business class, and first-class seating for a more
                luxurious in-flight experience, our team ensures you always
                receive the most suitable travel arrangements at the best
                possible value.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we go beyond simple ticket bookings. Our dedicated
                travel consultants assist with every aspect of your air travel
                plans, including flight itinerary management, handling special
                meal requests, arranging additional baggage allowances, and
                providing support for flight changes, delays, or cancellations.
                We also offer group booking services for business delegations,
                event attendees, or family vacations, ensuring a hassle-free
                experience for every traveler in your group.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                One of our core strengths lies in our personalized approach. We
                understand that every traveler’s needs are different, and we
                make it a point to tailor each flight booking to your specific
                requirements. Whether you prefer early morning departures,
                non-stop flights, or seats with extra legroom, we work to
                accommodate your preferences while keeping costs reasonable and
                service quality high.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Our competitive pricing model and access to exclusive airline
                deals enable us to offer our clients significant savings without
                compromising on comfort or convenience. Additionally, our 24/7
                customer support ensures that assistance is always available, no
                matter where you are or what time you need it.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                With ExpoAccom, you can rest assured that your air travel
                arrangements are in capable, professional hands. We handle the
                details so you can focus on what matters most — whether that’s
                closing a business deal, exploring a new destination, or
                reconnecting with family and friends abroad.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Choose ExpoAccom for a reliable, efficient, and personalized
                flight booking experience. Travel confidently, knowing you’re
                supported by a team that prioritizes your comfort, convenience,
                and satisfaction every step of the way.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Flights;
