import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-center bg-[#01161E] !pt-10">
      <div className="w-9/10">
        <div className="flex flex-col xl:flex-row justify-between gap-8 sm:gap-10">
          {/* FOR SMALLER SCREENS */}
          <div className="flex gap-10 justify-between xl:w-2/6">
            {/* BRAND */}
            <div className="w-full sm:w-2/3 lg:w-full flex flex-col gap-5 md:gap-8">
              <div className="flex flex-col gap-1">
                <h1 className="text-gray-200 text-[1.2rem] md:text-[1.5rem] font-medium">
                  ExpoAccom
                </h1>
                <p className="text-gray-400 text-[0.825rem] md:text-[0.925rem] font-medium">
                  Hassle-free accommodation and travel for exhibitions.
                </p>
              </div>

              <div className="flex gap-5">
                <div className="text-gray-200 text-[1.2rem] md:text-[1.5rem] hover:text-gray-400 hover:scale-125">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebook />
                  </a>
                </div>
                <div className="text-gray-200 text-[1.2rem] md:text-[1.5rem] hover:text-gray-400 hover:scale-125">
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaTwitter />
                  </a>
                </div>
                <div className="text-gray-200 text-[1.2rem] md:text-[1.5rem] hover:text-gray-400 hover:scale-125">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
                <div className="text-gray-200 text-[1.2rem] md:text-[1.5rem] hover:text-gray-400 hover:scale-125">
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="w-full sm:w-1/3 hidden sm:flex flex-col xl:hidden">
              <h1 className="text-gray-200 text-[0.925rem] md:text-[1rem] font-medium mb-2">
                Contact Us
              </h1>
              <div className="flex items-center gap-2 text-gray-400 text-[0.825rem] md:text-[0.925rem]">
                <FaPhone />
                <p>+91 8899001122</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-[0.825rem] md:text-[0.925rem] mt-2">
                <FaEnvelope />
                <p>info@expoaccom.com</p>
              </div>
              <div className="flex items-center gap-2 text-gray-400 text-[0.825rem] md:text-[0.925rem] mt-2">
                <FaMapMarkerAlt />
                <p>Delhi, India</p>
              </div>
            </div>
          </div>

          {/* LINKS */}
          <div className="w-full xl:w-3/6">
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 gap-5">
              <div className="flex flex-col gap-2 sm:gap-3 text-[0.825rem] md:text-[0.925rem]">
                <h2 className="font-medium text-gray-200">Services</h2>
                <Link to="/services" className="text-gray-400 hover:underline">
                  Accommodation
                </Link>
                <Link to="/services" className="text-gray-400 hover:underline">
                  Flights
                </Link>
                <Link to="/services" className="text-gray-400 hover:underline">
                  Local Transfer
                </Link>
                <Link to="/services" className="text-gray-400 hover:underline">
                  Conference Rooms
                </Link>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 text-[0.825rem] md:text-[0.925rem]">
                <h2 className="font-medium text-gray-200">Legal</h2>
                <Link to="/about" className="text-gray-400 hover:underline">
                  Terms of Service
                </Link>
                <Link to="/contact" className="text-gray-400 hover:underline">
                  Privacy Policy
                </Link>
                <Link to="/about" className="text-gray-400 hover:underline">
                  Cancellation Policy
                </Link>
                <Link to="/about" className="text-gray-400 hover:underline">
                  Refund Policy
                </Link>
              </div>

              <div className="flex flex-col gap-2 sm:gap-3 text-[0.825rem] md:text-[0.925rem]">
                <h2 className="font-medium text-gray-200">Company</h2>
                <Link to="/about" className="text-gray-400 hover:underline">
                  About
                </Link>
                <Link to="/contact" className="text-gray-400 hover:underline">
                  Contact
                </Link>
                <Link to="/about" className="text-gray-400 hover:underline">
                  FAQs
                </Link>
              </div>
            </div>
          </div>

          {/* CONTACT FOR XL SCREENS */}
          <div className="w-full lg:w-1/6 flex flex-col sm:hidden xl:flex">
            <h1 className="text-gray-200 text-[0.925rem] md:text-[1rem] font-medium mb-2">
              Contact Us
            </h1>
            <div className="flex items-center gap-2 text-gray-400 text-[0.825rem] md:text-[0.925rem]">
              <FaPhone />
              <p>+91 8899001122</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-[0.825rem] md:text-[0.925rem] mt-2">
              <FaEnvelope />
              <p>info@expoaccom.com</p>
            </div>
            <div className="flex items-center gap-2 text-gray-400 text-[0.825rem] md:text-[0.925rem] mt-2">
              <FaMapMarkerAlt />
              <p>Delhi, India</p>
            </div>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="flex justify-center mt-10 border-t-1 border-gray-600">
          <div className="!my-4 text-gray-200 text-[0.825rem] md:text-[0.925rem] text-center">
            <span className="block xs:inline">
              &copy; {new Date().getFullYear()} ExpoAccom.
            </span>
            <span className="hidden xs:inline"> </span>
            <span className="block xs:inline">All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
