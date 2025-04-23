import {
  FaBolt,
  FaUserCheck,
  FaBalanceScale,
  FaLightbulb,
} from "react-icons/fa";
import Navbar from "../components/Navbar";

const About = () => {
  const values = [
    {
      title: "Efficiency",
      icon: <FaBolt />,
      description:
        "We prioritize streamlining processes to save our clients time and effort.",
    },
    {
      title: "Personalization",
      icon: <FaUserCheck />,
      description:
        "We tailor our services to meet the unique needs of each exhibitor.",
    },
    {
      title: "Integrity",
      icon: <FaBalanceScale />,
      description: "We uphold transparency and honesty in all our dealings.",
    },
    {
      title: "Innovation",
      icon: <FaLightbulb />,
      description:
        "We leverage technology to enhance our services and client experience.",
    },
  ];

  const whyChooseUs = [
    {
      title: "Extensive Network",
      description:
        "Access to a wide range of hotels and accommodations worldwide.",
    },
    {
      title: "Competitive Pricing",
      description:
        "Benefit from exclusive rates and discounts negotiated on your behalf.",
    },
    {
      title: "Seamless Experience",
      description:
        "Enjoy a hassle-free booking process with dedicated support at every step.",
    },
    {
      title: "Customized Solutions",
      description:
        "Receive services tailored to your specific exhibition needs and preferences.",
    },
  ];

  return (
    <div className="relative">
      <Navbar />
      <main>
        <section className="relative flex justify-center !py-28 md:!py-35">
          <img
            src="/about-bg.jpg"
            alt="About Cover Image"
            loading="lazy"
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 z-0"></div>
          {/* Content */}
          <div className="w-9/10 flex flex-col gap-5 items-center z-10">
            <div className="text-white">
              <h1 className="text-[2.5rem] md:text-[5rem]">About Us</h1>
            </div>
            <div className="w-9/10 md:w-7/10">
              <p className="text-[0.85rem] md:text-[1rem] text-gray-50 text-center">
                At ExpoAccom, we specialize in providing tailored accommodation
                solutions for exhibitors attending exhibitions worldwide.
                Leveraging our extensive network of hotel chains and industry
                partnerships, we offer a diverse range of options to suit
                various budgets and preferences.
              </p>
            </div>
          </div>
        </section>

        <div className="relative bg-gray-100 !pt-20">
          {/* MISSION & VISION */}
          <section className="relative !-mt-35 left-1/2 transform -translate-x-1/2 z-10 w-9/10 flex flex-col sm:flex-row gap-10 bg-white !px-8 !py-12 md:!p-15 rounded-lg">
            <div className="flex flex-col gap-2">
              <div>
                <h2 className="text-[1.2rem] md:text-[1.3rem] font-semibold">
                  Our Mission
                </h2>
              </div>
              <div>
                <p className="text-[0.85rem] md:text-[1rem]">
                  Our mission is to empower businesses with efficient tools to
                  select, book, and manage their exhibition accommodations in a
                  customized and user-friendly environment. By streamlining
                  processes, we enhance efficiency, allowing clients to focus on
                  their core objectives.
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div>
                <h2 className="text-[1.2rem] md:text-[1.3rem] font-semibold">
                  Our Vision
                </h2>
              </div>
              <div>
                <p className="text-[0.85rem] md:text-[1rem]">
                  Our vision is to redefine the exhibition accommodation
                  experience by providing seamless solutions. We aim to create a
                  future where businesses can effortlessly secure tailored
                  lodging options, ensuring convenience and productivity at
                  every step.
                </p>
              </div>
            </div>
          </section>

          <section className="flex flex-col items-center gap-5 !py-12 md:!py-20 justify-center">
            <div className="w-full flex justify-center">
              <h1 className="text-[1.8rem] md:text-[3rem] text-center text-gray-800">
                Our Values
              </h1>
            </div>
            <div className="w-9/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="!p-6 bg-white shadow-lg rounded-2xl flex flex-col items-center text-center"
                >
                  <div className="text-[1.5rem] md:text-[2rem] text-[#8fbc55] !mb-4">
                    {value.icon}
                  </div>
                  <h2 className="text-[1.2rem] md:text-[1.3rem] font-medium">
                    {value.title}
                  </h2>
                  <p className="text-[0.85rem] md:text-[1rem] text-gray-700 !mt-2">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* PROCESS */}
          <section className="flex justify-center !py-10 bg-[#0c4c3e] text-white">
            <div className="w-9/10">
              <div>
                <h2 className="text-[1.8rem] md:text-[3rem]">Process</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 !my-10">
                <div className="flex flex-col">
                  <h3 className="text-[1.4rem] md:text-[2rem]">01</h3>
                  <h3 className="lg:hidden text-[1.4rem] md:text-[1.8rem] font-semibold">
                    Select your Package
                  </h3>
                  <h3 className="hidden lg:block text-[1.4rem] md:text-[1.8rem] font-semibold">
                    Select your <br /> Package
                  </h3>
                  <p className="text-[0.85rem] md:text-[1rem]">
                    Choose from accommodation, transport, and exhibition support
                    services.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[1.4rem] md:text-[2rem]">02</h3>
                  <h3 className="lg:hidden text-[1.4rem] md:text-[1.8rem] font-semibold">
                    Confirm your Plans
                  </h3>
                  <h3 className="hidden lg:block text-[1.4rem] md:text-[1.8rem] font-semibold">
                    Confirm your <br /> Plans
                  </h3>
                  <p className="text-[0.85rem] md:text-[1rem]">
                    Receive a personalized travel plan with all confirmed
                    bookings and details.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[1.4rem] md:text-[2rem]">03</h3>
                  <h3 className="lg:hidden text-[1.4rem] md:text-[1.8rem] font-semibold">
                    Enjoy your Travel
                  </h3>
                  <h3 className="hidden lg:block text-[1.4rem] md:text-[1.8rem] font-semibold">
                    Enjoy your <br /> Travel
                  </h3>
                  <p className="text-[0.85rem] md:text-[1rem]">
                    Enjoy smooth arrivals, hassle-free commutes, and comfortable
                    stays.
                  </p>
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[1.4rem] md:text-[2rem]">04</h3>
                  <h3 className="lg:hidden text-[1.4rem] md:text-[1.8rem] font-semibold">
                    Show your Best
                  </h3>
                  <h3 className="hidden lg:block text-[1.4rem] lg:text-[1.8rem] font-semibold">
                    Show your <br /> Best
                  </h3>
                  <p className="text-[0.85rem] md:text-[1rem]">
                    Focus on networking and showcasing your products while we
                    handle logistics.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="!py-12 md:!py-20 flex flex-col gap-5 items-center">
            <div className="flex justify-center rounded-lg">
              <h2 className="text-[1.8rem] md:text-[3rem] text-center">
                Why Choose Us?
              </h2>
            </div>
            <div className="w-9/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white !p-6 md:!p-10 rounded-lg shadow-lg"
                >
                  <h3 className="text-[1.2rem] md:text-[1.3rem] text-black font-medium !mb-2">
                    {item.title}
                  </h3>
                  <p className="text-[0.85rem] md:text-[1rem] text-gray-700">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default About;
