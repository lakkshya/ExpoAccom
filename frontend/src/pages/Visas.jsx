// import { useState } from "react";
import Navbar from "../components/Navbar";

const Visas = () => {
  return (
    <div className="relative">
      <Navbar />
      <main>
        <section className="relative flex justify-center items-center !pt-35 !pb-28 md:!pt-40 md:!pb-35">
          <img
            src="/visa.jpg"
            alt="Visa Cover Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* Content */}
          <div className="relative w-9/10 flex flex-col gap-5 items-center text-white text-center z-20">
            <h1 className="text-[2.2rem] md:text-[4rem]">
              Visas and Immigrations
            </h1>
          </div>
        </section>

        <div className="bg-white flex flex-col items-center">
          <section className="w-9/10 flex flex-col gap-10 bg-white !py-12 md:!py-15 rounded-lg">
            <div className="flex flex-col justify-center gap-4">
              <h2 className="text-[1.3rem] font-medium">
                Visas & Immigrations – Your Trusted Partner in Global Travel
              </h2>

              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we understand that securing the right travel
                documentation is one of the most critical aspects of
                international travel. Whether you're planning a vacation,
                pursuing higher education, attending a global trade fair,
                relocating for a job, or visiting family abroad, obtaining the
                appropriate visa and navigating complex immigration procedures
                can often be overwhelming. That’s where our expert visa and
                immigration services come in — designed to make the process
                smooth, hassle-free, and efficient for every traveler.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Our team of experienced visa consultants and travel advisors
                specializes in handling a wide variety of visa categories,
                including tourist visas, business visas, student visas, work
                permits, family visit visas, and more. We offer comprehensive
                guidance on visa application requirements, document preparation,
                eligibility criteria, and timelines, ensuring that our clients
                are well-informed and fully prepared at every stage of the
                process.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                At ExpoAccom, we don’t believe in a one-size-fits-all approach.
                Every traveler’s situation is unique, and our personalized
                support reflects that. Whether you require a single-entry visa
                for a short business trip, a multiple-entry visa for frequent
                travel, or assistance with long-term residency applications, our
                team tailors its services to match your specific needs and
                circumstances. We also provide support for group visa
                applications for delegations, trade show attendees, or family
                vacations, ensuring a seamless experience for every group
                member.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Beyond visa applications, we assist clients with immigration
                consultation services, offering insights into international
                travel regulations, entry restrictions, and documentation
                requirements for different countries. This includes advice on
                medical tests, financial documentation, invitation letters,
                cover letters, and appointment bookings, streamlining what can
                often be a confusing and time-consuming process.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                One of the core strengths of our service is our commitment to
                transparency and reliability. We keep our clients updated on the
                status of their applications and provide realistic processing
                timelines, so they’re never left guessing. Should complications
                or delays arise, our support team is readily available to offer
                solutions and alternative options.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                By choosing ExpoAccom, you’re partnering with a team dedicated
                to simplifying your travel experience from the very start. We
                handle the complexities so you can focus on what matters —
                whether it’s making memories on holiday, succeeding in your
                professional pursuits, or reconnecting with loved ones overseas.
              </p>
              <p className="text-[0.9rem]/6 text-gray-600">
                Let ExpoAccom be your trusted companion on your visa and
                immigration journey — turning your travel plans into reality,
                the stress-free way.
              </p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Visas;
