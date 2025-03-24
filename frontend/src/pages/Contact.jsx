import { LuMail, LuPhone, LuBuilding2 } from "react-icons/lu";

const Contact = () => {
  return (
    <main className="flex flex-col lg:flex-row gap-5 !px-4 md:!px-10 !py-10 bg-gray-100">
      {/* LEFT SECTION */}
      <section className="w-full lg:w-3/5">
        {/* CONTACT FORM */}
        <div className="flex flex-col gap-3 bg-white !p-6 rounded-lg">
          <h2 className="text-[0.9rem] xs:text-[1rem] text-amber-500 font-semibold">Get in Touch</h2>
          <h1 className="text-[1.5rem] xs:text-[2rem] font-medium">Reach Out to Us</h1>
          <p className="text-[0.9rem] xs:text-[1rem] text-gray-600">
            Send us a message and we will respond within 24 hours.
          </p>
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
                  className="w-full !p-3 bg-[#f9f9f9] focus:outline focus:outline-blue-500 rounded-lg"
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
                  className="w-full !p-3 bg-[#f9f9f9] focus:outline focus:outline-blue-500 rounded-lg"
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
                className="w-full !p-3 bg-[#f9f9f9] focus:outline focus:outline-blue-500 rounded-lg"
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
                className="w-full !p-3 bg-[#f9f9f9] focus:outline focus:outline-blue-500 rounded-lg"
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
                className="w-full !p-3 bg-[#f9f9f9] focus:outline focus:outline-blue-500 rounded-lg"
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
                className="w-full !p-3 bg-[#f9f9f9] focus:outline focus:outline-blue-500 rounded-lg resize-none"
              ></textarea>
            </div>
            <div>
              <input type="submit" className="w-full bg-blue-500 text-white hover:bg-blue-700 cursor-pointer !p-2 rounded-lg" />
            </div>
          </form>
        </div>
      </section>

      {/* RIGHT SECTION */}
      <section className="w-full lg:w-2/5 flex flex-col md:flex-row lg:flex-col justify-between gap-5">
        {/* IMAGE */}
        <div className="w-full md:w-9/20 lg:w-full flex flex-1 flex-col gap-3 bg-white rounded-lg overflow-hidden">
          <img src="/contact.jpg" alt="contactimage" loading="lazy" className="h-full object-cover" />
        </div>
        {/* COMPANY INFO */}
        <div className="w-full md:w-11/20 lg:w-full flex flex-col gap-3 bg-white !p-6 rounded-lg">
          <div className="w-full flex items-center gap-4 bg-[#f9f9f9] !p-3 rounded-lg">
            <div className="hidden xs:flex justify-center items-center bg-blue-100 w-12 h-12 rounded-full">
              <LuMail size={22} className="text-blue-700" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[1rem] xs:text-[1.2rem] font-medium">Email</h3>
              <span className="text-[0.9rem] xs:text-[1rem] text-gray-700">techteam@expoaccom.com</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 bg-[#f9f9f9] !p-3 rounded-lg">
            <div className="hidden xs:flex justify-center items-center bg-blue-100 w-12 h-12 rounded-full">
              <LuPhone size={22} className="text-blue-700" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[1rem] xs:text-[1.2rem] font-medium">Phone</h3>
              <span className="text-[0.9rem] xs:text-[1rem] text-gray-700">+91 9900226677</span>
            </div>
          </div>
          <div className="w-full flex items-center gap-4 bg-[#f9f9f9] !p-3 rounded-lg">
            <div className="hidden xs:flex justify-center items-center bg-blue-100 w-12 h-12 rounded-full">
              <LuBuilding2 size={22} className="text-blue-700" />
            </div>
            <div className="flex flex-col">
              <h3 className="text-[1rem] xs:text-[1.2rem] font-medium">Address</h3>
              <span className="text-[0.9rem] xs:text-[1rem] text-gray-700">
                Sector-15, Rohini Delhi, India
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
