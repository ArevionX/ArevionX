import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Future pages go here */}
      {/* <Route path="/services" element={<Services />} /> */}
      {/* <Route path="/about" element={<About />} /> */}
      {/* <Route path="/contact" element={<Contact />} /> */}
    </Routes>
  );
}
