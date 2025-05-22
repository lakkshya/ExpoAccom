import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import Navbar from "../components/Navbar";

const SingleEvent = () => {
  const { id } = useParams(); // Get the exhibition ID from the URL
  const {
    data: event,
    error,
    loading,
  } = useFetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching exhibition details: {error.message}</div>;
  }

  return (
    <div className="relative">
      <Navbar />
      <main className="flex flex-col items-center bg-gray-100">
        <section className="relative w-full flex justify-center !pt-28 !pb-15 lg:!pt-30 lg:!pb-5">
          <div className="w-9/10 flex flex-col gap-5 lg:flex-row justify-between bg-[#0C4C3E] !p-5 md:!p-10 rounded-xl">
            <div className="flex flex-col items-center sm:flex-row gap-8">
              <img
                src={event.logo}
                className="w-40 border border-white"
                alt={event.name}
              />
              <div className="flex flex-col items-center sm:items-start gap-3">
                <h1 className="inline text-[1.5rem] sm:text-[2.5rem] text-white font-medium">
                  {event.title}
                </h1>
                <div className="flex items-center gap-2">
                  <LuMapPin className="text-gray-200 text-[1rem] sm:text-[1.4rem]" />
                  <span className="text-[1rem] sm:text-[1.2rem] text-gray-200">
                    {event.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LuCalendarDays className="text-gray-200 text-[1rem] sm:text-[1.4rem]" />
                  <span className="text-[1rem] text-gray-200">
                    {event.startDate} - {event.endDate}
                  </span>
                </div>
                <div>
                  <span className="text-[0.9rem] text-gray-900 font-semibold bg-[#D5E4D8] rounded-md !px-2">
                    {event.industry}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[0.9rem] md:text-[1rem] text-black bg-white !p-3 md:!p-5 rounded-xl">
              <div className="flex gap-5">
                <span className="md:w-30 font-medium">
                  Organizer:
                </span>
                <span className="">
                  {event.organizer}
                </span>
              </div>
              <div className="flex gap-5">
                <span className="md:w-30 font-medium">
                  Frequency:
                </span>
                <span className="">
                  {event.frequency}
                </span>
              </div>
              <div className="flex gap-5">
                <span className="md:w-30 font-medium">
                  Website:
                </span>
                <a href={event.website} className="hover:underline cursor-pointer">{event.title} official website</a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full flex justify-center !pb-15">
          <div className="w-9/10 flex flex-col md:flex-row justify-center gap-5">
            <div className="w-full md:w-5/10 flex gap-8 bg-white !p-5 md:!p-10 rounded-xl">
              <div
                className="content-html"
                dangerouslySetInnerHTML={{ __html: event.description }}
              ></div>
            </div>
            <div className="w-full md:w-5/10 flex flex-col gap-2 bg-white !p-5 md:!p-10 rounded-xl">
              <h2 className="text-[1.5rem]">Send Query</h2>
              <form
                action=""
                className="w-full flex flex-col gap-5 text-[0.82rem] xs:text-[0.9rem] text-gray-700 !pt-8"
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
                  <label htmlFor="companyName" className="block">
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
                  <label htmlFor="country" className="block">
                    Country
                  </label>
                  <input
                    type="text"
                    name="country"
                    placeholder="Country"
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
                  <label htmlFor="event" className="block">
                    Event
                  </label>
                  <input
                    type="text"
                    name="event"
                    placeholder="Event"
                    value={event.title}
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="checkinDate" className="block">
                    Ckeck-in Date
                  </label>
                  <input
                    type="date"
                    name="checkinDate"
                    placeholder="Ckeck-in Date"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="checkoutDate" className="block">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    name="checkoutDate"
                    placeholder="Ckeck-out Date"
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default SingleEvent;
