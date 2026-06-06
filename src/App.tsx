import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Sitemap } from "./pages/Sitemap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sitemap" element={<Sitemap />} />
      {/* Future pages go here */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
      {/* <Route path="/portfolio" element={<Portfolio />} /> */}
      {/* <Route path="/faq" element={<FAQ />} /> */}
      {/* <Route path="/terms" element={<Terms />} /> */}
      {/* <Route path="/privacy" element={<Privacy />} /> */}
      {/* <Route path="/cookies" element={<Cookies />} /> */}
    </Routes>
  );
}
