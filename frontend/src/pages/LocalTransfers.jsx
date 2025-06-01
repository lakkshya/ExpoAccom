import Navbar from "../components/Navbar";
import ContactBox from "../components/services/ContactBox";

const LocalTransfers = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center !pt-35 !pb-28 md:!pt-40 md:!pb-35">
          <img
            src="/local-bg.jpg"
            alt="Local Transfer Cover Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Content */}
          <div className="relative w-9/10 flex flex-col gap-5 items-center text-white text-center z-20">
            <h1 className="text-[2.2rem] md:text-[4rem]">Local Transfers</h1>
          </div>
        </section>

        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col gap-10 bg-white !py-12 md:!py-15 rounded-lg">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-[1.3rem] font-medium">
                Local Transfers – Effortless Travel Within Your Destination
              </h2>

              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we understand that smooth, reliable transportation
                is an essential part of any successful trip. That’s why we offer
                a comprehensive range of local transfer services designed to
                ensure you move around your destination with absolute ease and
                comfort. Whether you're visiting a new city for business,
                attending an exhibition, or enjoying a leisure vacation, our
                dedicated transfer services guarantee a hassle-free travel
                experience from the moment you arrive to the moment you depart.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Our services cover airport transfers, hotel pickups, drop-offs,
                event transportation, and customized travel arrangements for
                both individuals and groups. No matter what your itinerary
                involves — from early morning departures and late-night arrivals
                to business meetings across town or sightseeing tours — our
                professional drivers and modern fleet of vehicles are at your
                service.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                We offer a variety of well-maintained vehicles to suit different
                travel needs and group sizes, ranging from comfortable sedans
                and spacious SUVs to luxury cars, vans, and minibuses. Each
                vehicle is kept in excellent condition, equipped with modern
                amenities, and driven by experienced, courteous chauffeurs who
                prioritize your safety, punctuality, and comfort.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                What sets ExpoAccom apart is our commitment to personalized
                service and flexibility. We understand that travel plans can
                change, and we adapt our services to meet your updated schedules
                and preferences. Whether you need to adjust your pick-up time,
                add a stop, or arrange a last-minute transfer, our responsive
                team is available to assist you around the clock.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                In addition to point-to-point transfers, we also provide hourly
                and full-day rental services for travelers who require a
                dedicated vehicle and driver for the day. This is an ideal
                option for business travelers with multiple meetings, exhibitors
                needing transport between event venues, or tourists wanting to
                explore the city at their own pace.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we take great pride in delivering services that
                are not just reliable but also comfortable and stress-free. Our
                drivers are well-versed in local routes, traffic patterns, and
                travel protocols, ensuring you reach your destination
                efficiently without unnecessary delays.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                With ExpoAccom, your local travel arrangements are in capable
                hands. Let us take care of your transfers while you focus on
                your work, enjoy your leisure time, or experience the best your
                destination has to offer. Choose ExpoAccom for a travel
                experience that’s smooth, convenient, and thoughtfully arranged
                just for you.
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

export default LocalTransfers;
