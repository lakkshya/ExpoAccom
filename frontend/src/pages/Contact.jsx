import axios from "axios";
import { useState } from "react";
import { LuMail, LuPhone, LuBuilding2 } from "react-icons/lu";
import Navbar from "../components/Navbar";
import CountrySelectMenu from "../components/contact/CountrySelectMenu";
import EventSelectMenu from "../components/contact/EventSelectMenu";
import SuccessBox from "../components/contact/SuccessBox";
import ErrorBox from "../components/contact/ErrorBox";

const Contact = () => {
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

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

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
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
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
        event: "",
        message: "",
      });
      setErrors({});
    } catch (error) {
      if (error.response) {
        setErrorMessage(error.response.data.error);
      } else {
        setErrorMessage("Server error. Please try again later.");
      }
    }
  };

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
                onSubmit={handleSubmit}
                className="flex flex-col gap-5 border-t-1 border-gray-400 text-[0.9rem] xs:text-[1rem] text-gray-700 !pt-8 !mt-5"
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
                    {errors.firstName && (
                      <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                        {errors.firstName}
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
                    setErrors((prev) => ({ ...prev, country: undefined }));
                  }}
                  error={errors.country}
                />
                <div>
                  <label htmlFor="email" className="block">
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Ex- john.doe@example.com"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                      {errors.email}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="phoneNumber" className="block">
                    Phone Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    placeholder="Ex- +919876543210"
                    className="w-full !p-3 bg-[#f9f9f9] focus:outline-none focus:ring-2 focus:ring-[#0c4c3e] rounded-lg"
                  />
                  {!errors.phoneNumber && (
                    <p className="text-gray-500 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                      Start with your country code
                    </p>
                  )}
                  {errors.phoneNumber && (
                    <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                      {errors.phoneNumber}
                    </p>
                  )}
                </div>
                <EventSelectMenu
                  value={formData.event}
                  onChange={(eventTitle) => {
                    setFormData((prev) => ({ ...prev, event: eventTitle }));
                    setErrors((prev) => ({ ...prev, event: undefined }));
                  }}
                  error={errors.event}
                />

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
                  {errors.message && (
                    <p className="text-red-600 text-[0.78rem] xs:text-[0.85rem] !mt-1">
                      {errors.message}
                    </p>
                  )}
                </div>
                <div>
                  <button
                    type="submit"
                    className="w-full bg-[#0c4c3e] text-white hover:bg-[#8fbc55] cursor-pointer !p-2 rounded-lg"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* RIGHT SECTION */}
          <section className="w-full lg:w-2/5 flex flex-col lg:flex-col justify-between gap-5 !pb-15 lg:!pt-35 lg:!pb-20">
            {/* STEPS */}
            <div className="w-full lg:w-full flex flex-1 flex-col gap-4 bg-[#0c4c3e] bg-[linear-gradient(43deg,_#0c4c3e_12%,_#8fbc55_66%)] !p-6 rounded-lg">
              <h1 className="text-[1.3rem] sm:text-[1.6rem] font-semibold text-white">
                Next Steps after Submission
              </h1>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1rem] sm:text-[1.2rem] font-medium text-white">
                    1. Our Team Contacts You
                  </h2>
                  <p className="text-[0.85rem] sm:text-[0.9rem] text-gray-200">
                    After submitting the form, our team will reach out to you
                    within 24 hours.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1rem] sm:text-[1.2rem] font-medium text-white">
                    2. Discuss Your Requirements
                  </h2>
                  <p className="text-[0.85rem] sm:text-[0.9rem] text-gray-200">
                    We’ll understand your needs and tailor the best
                    accommodation and travel solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="text-[1rem] sm:text-[1.2rem] font-medium text-white">
                    3. Exhibit with Confidence
                  </h2>
                  <p className="text-[0.85rem] sm:text-[0.9rem] text-gray-200">
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
                  <span className="text-[0.85rem] xs:text-[0.9rem] text-gray-700">
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
                  <span className="text-[0.85rem] xs:text-[0.9rem] text-gray-700">
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
                  <span className="text-[0.85rem] xs:text-[0.9rem] text-gray-700">
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
