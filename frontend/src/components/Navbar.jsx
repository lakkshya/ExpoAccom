import { Link } from "react-router-dom";
import { MdAdd } from "react-icons/md";

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-[#01161E] !px-4 !py-2 !mt-4 !mx-4 md:!mx-10 rounded-xl">
      <div>
        <h1 className="text-gray-200 text-2xl font-medium"><Link to="/">ExpoAccom</Link></h1>
      </div>

      <div className="flex lg:hidden bg-gray-500/20 rounded-lg p-1 inset-shadow-sm inset-shadow-gray-500">
        <MdAdd size={24} className="text-gray-200" />
      </div>

      <ul className="w-1/2 hidden lg:flex justify-between items-center">
        {[
          { name: "Events", path: "/events" },
          { name: "Services", path: "/services" },
          { name: "My Bookings", path: "/mybooking" },
          { name: "About", path: "/about" },
          { name: "Contact", path: "/contact" },
        ].map((item) => (
          <li key={item.name} className="text-gray-400 text-[0.9rem] hover:text-gray-200 !p-2 hover:bg-gray-700/60 rounded-2xl">
            <Link to={item.path}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
