import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { LuCalendarDays, LuMapPin } from "react-icons/lu";
import Navbar from "../components/Navbar";
import CountrySelectMenu from "../components/contact/CountrySelectMenu";
import SuccessBox from "../components/contact/SuccessBox";
import ErrorBox from "../components/contact/ErrorBox";

const SingleEvent = () => {
  const { id } = useParams(); // Get the exhibition ID from the URL
  const {
    data: event,
    error,
    loading,
  } = useFetch(`${import.meta.env.VITE_API_URL}/api/events/${id}`);

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    country: "",
    email: "",
    phoneNumber: "",
    event: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (event?.title) {
      setFormData((prev) => ({ ...prev, event: event.title }));
    }
  }, [event]);

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.country.trim()) {
      newErrors.country = "Country is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone number is required";
    } else if (!/^\+\d{7,15}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Enter a valid phone number";
    }
    if (!formData.event.trim()) {
      newErrors.event = "Event is required";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setFormErrors(validationErrors);
      return;
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/contact/`,
        formData
      );

      setSuccessMessage(res.data.message);

      setFormData({
        firstName: "",
        lastName: "",
        companyName: "",
        country: "",
        email: "",
        phoneNumber: "",
        event: event.title,
        message: "",
      });
      setFormErrors({});
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching exhibition details: {error.message}</div>;
  }

  return (
    <div className="relative">
      <Navbar />
      {successMessage && (
        <SuccessBox
          message={successMessage}
          onClose={() => setSuccessMessage("")}
        />
      )}

      {errorMessage && (
        <ErrorBox message={errorMessage} onClose={() => setErrorMessage("")} />
      )}

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
                <h1 className="inline text-[1.5rem] sm:text-[2rem] text-white font-medium">
                  {event.title}
                </h1>
                <div className="flex items-center gap-2">
                  <LuMapPin className="text-gray-200 text-[1rem] sm:text-[1.2rem]" />
                  <span className="text-[1rem] text-gray-200">
                    {event.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <LuCalendarDays className="text-gray-200 text-[1rem] sm:text-[1.2rem]" />
                  <span className="text-[1rem] text-gray-200">
                    {event.startDate} - {event.endDate}
                  </span>
                </div>
                <div>
                  {event?.industry?.map((item, index) => (
                    <span
                      key={index}
                      className="text-[0.85rem] text-gray-900 font-medium bg-[#D5E4D8] rounded-md !px-2 !py-1 !mr-1"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 text-[0.9rem] md:text-[1rem] text-black bg-white !p-3 md:!p-5 rounded-xl">
              <div className="flex gap-5">
                <span className="md:w-30 font-medium">Organizer:</span>
                <span className="">{event.organizer}</span>
              </div>
              <div className="flex gap-5">
                <span className="md:w-30 font-medium">Frequency:</span>
                <span className="">{event.frequency}</span>
              </div>
              <div className="flex gap-5">
                <span className="md:w-30 font-medium">Founded In:</span>
                <span className="">{event.foundedIn}</span>
              </div>
              <div className="flex gap-5">
                <span className="md:w-30 font-medium">Website:</span>
                <a
                  href={event.website}
                  target="_blank"
                  className="underline cursor-pointer hover:text-gray-500"
                >
                  {event.title} official website
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full flex justify-center !pb-15">
          <div className="w-9/10 flex flex-col md:flex-row justify-center gap-5">
            <div className="w-full md:w-5/10 flex gap-8 bg-white !p-5 md:!p-10 rounded-xl">
              <div
                className="text-[0.85rem]/6 md:text-[0.9rem]/7"
                dangerouslySetInnerHTML={{ __html: event.description }}
              ></div>
            </div>
            <div className="w-full md:w-5/10 flex flex-col gap-2 bg-white !p-5 md:!p-10 rounded-xl">
              <h2 className="text-[1.5rem]">Send Query</h2>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col gap-5 text-[0.82rem] xs:text-[0.9rem] text-gray-700 !pt-8"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block">
                      First Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Ex- John"
                      className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                    />
                    {formErrors.firstName && (
                      <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                        {formErrors.firstName}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Ex- Doe"
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
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Ex- Acme Corp"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                </div>
                <CountrySelectMenu
                  value={formData.country}
                  onChange={(country) => {
                    setFormData((prev) => ({ ...prev, country }));
                    setFormErrors((prev) => ({ ...prev, country: undefined }));
                  }}
                  error={formErrors.country}
                />
                <div>
                  <label htmlFor="email" className="block">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex- john.doe@example.com"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                  {formErrors.email && (
                    <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                      {formErrors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Ex- +919876543210"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                  {!formErrors.phoneNumber && (
                    <p className="text-gray-500 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                      Start with your country code
                    </p>
                  )}
                  {formErrors.phoneNumber && (
                    <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                      {formErrors.phoneNumber}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="event" className="block">
                    Event <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="event"
                    placeholder="Event"
                    value={formData.event}
                    readOnly
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Ex- I would like to inquire about your services..."
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg resize-none"
                  ></textarea>
                  {formErrors.message && (
                    <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                      {formErrors.message}
                    </p>
                  )}
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
