import Navbar from "../components/Navbar";
import ContactBox from "../components/services/ContactBox";

const Hotels = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center !pt-35 !pb-28 md:!pt-40 md:!pb-35">
          <img
            src="/hotel-bg.jpg"
            alt="Hotel Cover Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Content */}
          <div className="relative w-9/10 flex flex-col gap-5 items-center text-white text-center z-20">
            <h1 className="text-[2.2rem] md:text-[4rem]">
              Hotels and Accommodations
            </h1>
          </div>
        </section>

        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col gap-10 bg-white !py-12 md:!py-15 rounded-lg">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-[1.3rem] font-medium">
                Hotels & Accommodations – Your Perfect Stay, Every Time
              </h2>

              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we believe that where you stay is just as
                important as where you go. That’s why we offer an extensive
                range of hotel and accommodation options thoughtfully tailored
                to suit your personal preferences, travel needs, and budget.
                Whether you're embarking on a business trip, a family holiday, a
                romantic getaway, or attending a global trade exhibition, our
                dedicated team ensures you enjoy a stay that’s comfortable,
                convenient, and memorable.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Our global accommodation network covers top-rated hotels, luxury
                resorts, budget-friendly inns, boutique stays, and fully
                serviced apartments in major cities and popular destinations
                worldwide. We understand that every traveler is unique, which is
                why our booking services are personalized to match your
                individual style, schedule, and travel purpose. Whether you’re
                seeking a hotel close to a conference venue, a resort by the
                beach, or a city-center serviced apartment with easy access to
                local attractions, we have you covered.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we go beyond standard bookings by providing a
                fully customized experience. Our expert team takes care of every
                detail — from room preferences and special requests to flexible
                check-in/check-out times and additional services like airport
                transfers, breakfast options, and access to wellness facilities.
                We make it our mission to remove the stress from your travel
                planning, leaving you free to focus on enjoying your trip or
                attending to your professional commitments.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                One of our core strengths lies in our competitive pricing and
                access to exclusive hotel deals and promotions. Through our
                established partnerships with leading hospitality brands and
                independent properties worldwide, we’re able to secure special
                rates and value-added benefits for our clients — ensuring
                excellent quality and affordability with every booking.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                We also offer tailored accommodation solutions for large group
                bookings, corporate delegations, trade fair participants, and
                event attendees, making sure each guest enjoys a seamless and
                well-coordinated stay. Our experienced booking consultants
                assist with room block management, personalized itineraries, and
                additional services to suit group preferences.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                What truly sets ExpoAccom apart is our commitment to client
                satisfaction. With 24/7 support, transparent booking processes,
                and real-time assistance, we ensure your accommodation needs are
                met with efficiency and care, no matter where your travels take
                you.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Choose ExpoAccom for reliable, flexible, and affordable hotel
                booking services. Let us take care of your stay — so you can
                relax, explore, and make the most of your journey.
              </p>
            </div>
          </section>

          <section className="w-full flex justify-center !pb-12 md:!pb-15 bg-white">
            <ContactBox />
          </section>
        </div>
      </main>
    </div>
  );
};

export default Hotels;
