import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import ContactUS from "./components/ContactUS";
import ContactPL from "./components/ContactPL";
import ContactDE from "./components/ContactDE";
import Home from "./components/Home";
import Services from "./components/Services";
import Whoops404 from "./components/Whoops404";
function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact/pl" element={<ContactPL />} />
        <Route path="/contact/us" element={<ContactUS />} />
        <Route path="/contact/de" element={<ContactDE />} />
        <Route path="*" element={<Whoops404 />} />
      </Routes>
    </div>
  );
}

export default App;
