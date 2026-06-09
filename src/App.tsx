import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { OurProcess } from "./pages/OurProcess";
import { Contact } from "./pages/Contact";
import { Portfolio } from "./pages/Portfolio";
import { FAQ } from "./pages/FAQ";
import { Sitemap } from "./pages/Sitemap";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/process" element={<OurProcess />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/sitemap" element={<Sitemap />} />
      {/* Coming soon */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/services/web-development" element={<WebDev />} /> */}
      {/* <Route path="/terms" element={<Terms />} /> */}
      {/* <Route path="/privacy" element={<Privacy />} /> */}
      {/* <Route path="/cookies" element={<Cookies />} /> */}
    </Routes>
  );
}
