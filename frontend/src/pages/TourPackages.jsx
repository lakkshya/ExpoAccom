import Navbar from "../components/Navbar";
import ContactBox from "../components/services/ContactBox";

const TourPackages = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center !pt-35 !pb-28 md:!pt-40 md:!pb-35">
          <img
            src="/tour-bg.jpg"
            alt="Tour Package Cover Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Content */}
          <div className="relative w-9/10 flex flex-col gap-5 items-center text-white text-center z-20">
            <h1 className="text-[2.2rem] md:text-[4rem]">Tour Packages</h1>
          </div>
        </section>

        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col gap-10 bg-white !py-12 md:!py-15 rounded-lg">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-[1.3rem] font-medium">
                Tour Packages – Explore the World with Expertly Curated Journeys
              </h2>

              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we believe travel is more than just visiting new
                places — it’s about creating lasting memories, experiencing new
                cultures, and discovering unforgettable moments. That’s why we
                offer a wide range of tailor-made tour packages designed to suit
                your interests, preferences, and travel style. Whether you're
                seeking adventure, cultural immersion, relaxation, or a mix of
                everything, our expertly curated tours are crafted to deliver
                exceptional travel experiences at some of the world’s most
                exciting destinations.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Our tour packages cover an array of travel styles and activities
                to ensure there’s something for everyone. From guided city
                tours, historical site visits, and cultural festivals to
                adventure getaways, nature retreats, and luxury escapes, we
                carefully plan each itinerary to offer a balance of exploration,
                leisure, and meaningful encounters. Whether you're dreaming of
                walking through ancient streets, trekking scenic mountain
                trails, unwinding at a beachside resort, or indulging in
                authentic local cuisines, ExpoAccom makes it happen.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                One of our key priorities is to deliver hassle-free experiences.
                When you book a tour package with us, we take care of everything
                — from accommodation, local transportation, sightseeing, entry
                tickets, and meals to professional guides and on-ground
                assistance. We believe you should focus on enjoying your
                journey, not worrying about the logistics. Our experienced team
                ensures every detail is meticulously organized, leaving you free
                to immerse yourself in each moment.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                For travelers with specific interests, we also offer
                customizable packages. Whether you’re a solo traveler looking
                for a peaceful retreat, a couple seeking a romantic getaway, a
                family wanting a fun-filled holiday, or a group of friends
                craving adventure, we can tailor an itinerary that meets your
                unique travel goals and budget.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we’re passionate about responsible and meaningful
                travel. Many of our tours feature local experiences, cultural
                workshops, and opportunities to connect with communities,
                offering a deeper, more authentic understanding of the places
                you visit. We aim to enrich your travel experience while
                supporting local economies and traditions.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                What truly sets us apart is our dedication to personalized
                service. Our team of travel consultants provides 24/7 support,
                expert advice, and real-time assistance before and during your
                trip, ensuring a seamless and enjoyable experience from start to
                finish.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                With ExpoAccom, your dream vacation is always just a booking
                away. Travel confidently, travel meaningfully, and let us turn
                your travel ideas into unforgettable adventures.
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

export default TourPackages;
