import { LuMail, LuPhone, LuBuilding2 } from "react-icons/lu";
import Navbar from "../components/Navbar";

const Contact = () => {
  return (
    <div className="relative">
      <Navbar />
      <main className="flex justify-center bg-gray-100">
        <div className="w-9/10 flex flex-col lg:flex-row gap-5">
          {/* LEFT SECTION */}
          <section className="w-full lg:w-3/5 !pt-28 lg:!pt-35 lg:!pb-20">
            {/* CONTACT FORM */}
            <div className="flex flex-col gap-3 bg-white !p-6 rounded-lg">
              <h2 className="text-[0.9rem] xs:text-[1rem] text-[#e03f05] font-semibold">
                Get in Touch
              </h2>
              <h1 className="text-[1.5rem] xs:text-[2rem] font-medium">
                Reach Out to Us
              </h1>
              <form
                action=""
                className="flex flex-col gap-5 border-t-1 border-gray-400 text-[0.82rem] xs:text-[0.9rem] text-gray-700 !pt-8 !mt-5"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      name="firstName"
                      placeholder="First name"
                      className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last name"
                      className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="lastName" className="block">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    placeholder="Company name"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    name="email"
                    placeholder="Email address"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="phoneno" className="block">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    required
                    name="phoneno"
                    placeholder="Phone number"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows="5"
                    placeholder="Leave us message"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg resize-none"
                  ></textarea>
                </div>
                <div>
                  <input
                    type="submit"
                    className="w-full bg-[#0c4c3e] text-white hover:bg-[#8fbc55] cursor-pointer !p-2 rounded-lg"
                  />
                </div>
              </form>
            </div>
          </section>

          {/* RIGHT SECTION */}
          <section className="w-full lg:w-2/5 flex flex-col lg:flex-col justify-between gap-5 !pb-15 lg:!pt-35 lg:!pb-20">
            {/* IMAGE */}
            <div className="w-full lg:w-full flex flex-1 flex-col gap-4 bg-[#0c4c3e] bg-[linear-gradient(43deg,_#0c4c3e_12%,_#8fbc55_66%)] !p-6 rounded-lg">
              <h1 className="text-[1.3rem] xs:text-[1.6rem] font-semibold text-white">
                Next Steps after Submission
              </h1>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1rem] xs:text-[1.2rem] font-medium text-white">
                    1. Our Team Contacts You
                  </h2>
                  <p className="text-[0.82rem] xs:text-[0.9rem] text-gray-200">
                    After submitting the form, our team will reach out to you
                    within 24 hours.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1rem] xs:text-[1.2rem] font-medium text-white">
                    2. Discuss Your Requirements
                  </h2>
                  <p className="text-[0.82rem] xs:text-[0.9rem] text-gray-200">
                    We’ll understand your needs and tailor the best
                    accommodation and travel solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1rem] xs:text-[1.2rem] font-medium text-white">
                    3. Exhibit with Confidence
                  </h2>
                  <p className="text-[0.82rem] xs:text-[0.9rem] text-gray-200">
                    With everything arranged, you can focus on showcasing your
                    business hassle-free.
                  </p>
                </div>
              </div>
            </div>
            {/* COMPANY INFO */}
            <div className="w-full lg:w-full flex flex-col gap-3 bg-white !p-6 rounded-lg">
              <div className="w-full flex items-center gap-4 bg-[#f9f9f9] !p-3 rounded-lg">
                <div className="hidden xs:flex justify-center items-center bg-[#d5e4d8] w-12 h-12 rounded-full">
                  <LuMail size={22} className="text-[#0c4c3e]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[1rem] xs:text-[1.2rem] font-medium">
                    Email
                  </h3>
                  <span className="text-[0.82rem] xs:text-[0.9rem] text-gray-700">
                    expoaccomservices@gmail.com
                  </span>
                </div>
              </div>
              <div className="w-full flex items-center gap-4 bg-[#f9f9f9] !p-3 rounded-lg">
                <div className="hidden xs:flex justify-center items-center bg-[#d5e4d8] w-12 h-12 rounded-full">
                  <LuPhone size={22} className="text-[#0c4c3e]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[1rem] xs:text-[1.2rem] font-medium">
                    Phone
                  </h3>
                  <span className="text-[0.82rem] xs:text-[0.9rem] text-gray-700">
                    +91 9900226677
                  </span>
                </div>
              </div>
              <div className="w-full flex items-center gap-4 bg-[#f9f9f9] !p-3 rounded-lg">
                <div className="hidden xs:flex justify-center items-center bg-[#d5e4d8] w-12 h-12 rounded-full">
                  <LuBuilding2 size={22} className="text-[#0c4c3e]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[1rem] xs:text-[1.2rem] font-medium">
                    Address
                  </h3>
                  <span className="text-[0.82rem] xs:text-[0.9rem] text-gray-700">
                    Sector-15, Rohini Delhi, India
                  </span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Contact;
