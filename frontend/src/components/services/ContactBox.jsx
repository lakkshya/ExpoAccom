import { Link } from "react-router-dom";

const ContactBox = () => {
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center gap-5 md:gap-10 bg-[#0c4c3e] !p-5">
      <h2 className="text-[1.5rem] sm:text-[2rem] text-white whitespace-nowrap">
        Reach Out to Us
      </h2>
      <p className="text-[0.9rem]/7 text-gray-200 text-center md:text-left">
        Interested in attending or hosting an event with us? Drop us a message
        today and let’s work together to create something amazing.
      </p>
      <Link
        to="/contact"
        className="flex items-center text-white text-[0.9rem] font-medium border-2 border-white hover:text-gray-300 hover:border-gray-300 cursor-pointer !p-2 rounded-lg"
      >
        <span className="whitespace-nowrap">Contact Us</span>
      </Link>
    </div>
  );
};

export default ContactBox;
