import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Events from "./pages/Events";
import Services from "./pages/Services";
import Flights from "./pages/Flights";
import Visas from "./pages/Visas";
import Hotels from "./pages/Hotels";
import TourPackages from "./pages/TourPackages";
import LocalTransfers from "./pages/LocalTransfers";
import Booking from "./pages/Booking";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SingleEvent from "./pages/SingleEvent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<SingleEvent />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/flights" element={<Flights />} />
        <Route path="/services/visas" element={<Visas />} />
        <Route path="/services/hotels" element={<Hotels />} />
        <Route path="/services/tour-packages" element={<TourPackages />} />
        <Route path="/services/local-transfers" element={<LocalTransfers />} />
        <Route path="/mybooking" element={<Booking />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <div className="w-full">
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
