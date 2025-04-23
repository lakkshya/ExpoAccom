import { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const menuItems = [
    { name: "Events", path: "/events" },
    { name: "Services", path: "/services" },
    { name: "My Bookings", path: "/mybooking" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-5 left-1/2 transform -translate-x-1/2 w-9/10 z-50 flex justify-between items-center bg-[#01161E] !px-4 !py-2 transition-all duration-300 ${
        isMobileMenuOpen ? "rounded-t-xl" : "rounded-xl"
      }`}
    >
      <div>
        <h1 className="text-gray-200 text-2xl font-medium">
          <NavLink to="/">ExpoAccom</NavLink>
        </h1>
      </div>

      {/* Mobile menu toggle button */}
      <div
        className="flex lg:hidden bg-gray-500/20 cursor-pointer rounded-lg p-1 inset-shadow-sm inset-shadow-gray-500 transition-transform duration-300"
        onClick={toggleMobileMenu}
      >
        <MdAdd
          size={24}
          className={`text-gray-200 transition-transform duration-300 ${
            isMobileMenuOpen ? "rotate-45" : "rotate-0"
          }`}
        />
      </div>

      {/* Desktop menu */}
      <ul className="w-1/2 hidden lg:flex justify-between items-center">
        {menuItems.map((item) => (
          <li key={item.name} className="text-[0.9rem] !p-2 rounded-2xl">
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-gray-200 bg-gray-700/60 px-3 py-2 rounded-2xl"
                  : "text-gray-400 hover:text-gray-200 hover:bg-gray-700/60 px-3 py-2 rounded-2xl"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-10 left-0 w-full bg-[#01161E] rounded-b-lg p-4 flex flex-col gap-3 shadow-lg lg:hidden">
          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setIsMobileMenuOpen(false)} // close menu on click
              className={({ isActive }) =>
                isActive
                  ? "text-center text-gray-200 bg-gray-700/60 px-3 py-2 rounded-lg"
                  : "text-center text-gray-400 hover:text-gray-200 hover:bg-gray-700/60 px-3 py-2 rounded-lg"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
