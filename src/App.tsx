import { Routes, Route } from "react-router-dom";

// Root
import { Home } from "./pages/Home";
import { Sitemap } from "./pages/Sitemap";

// Portfolio
import { Portfolio } from "./pages/portfolio/Portfolio";

// Company
import { About } from "./pages/company/About";
import { OurProcess } from "./pages/company/OurProcess";
import { Contact } from "./pages/company/Contact";
import { FAQ } from "./pages/company/FAQ";

// Services
import { WebDevelopment } from "./pages/services/WebDevelopment";
import { MobileApps } from "./pages/services/MobileApps";
import { AIAutomation } from "./pages/services/AIAutomation";
import { UIUXDesign } from "./pages/services/UIUXDesign";
import { CloudDevOps } from "./pages/services/CloudDevOps";
import { MVPDevelopment } from "./pages/services/MVPDevelopment";

// Technologies
import { ReactNextjs } from "./pages/technologies/ReactNextjs";
import { NodeBun } from "./pages/technologies/NodeBun";
import { PythonFastAPI } from "./pages/technologies/PythonFastAPI";
import { ReactNative } from "./pages/technologies/ReactNative";
import { PostgresSupabase } from "./pages/technologies/PostgresSupabase";
import { AWSCloudflare } from "./pages/technologies/AWSCloudflare";

export default function App() {
  return (
    <Routes>
      {/* Root */}
      <Route path="/" element={<Home />} />
      <Route path="/sitemap" element={<Sitemap />} />

      {/* Portfolio */}
      <Route path="/portfolio" element={<Portfolio />} />

      {/* Company */}
      <Route path="/about" element={<About />} />
      <Route path="/process" element={<OurProcess />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faq" element={<FAQ />} />

      {/* Services */}
      <Route path="/services/web-development" element={<WebDevelopment />} />
      <Route path="/services/mobile-apps" element={<MobileApps />} />
      <Route path="/services/ai-automation" element={<AIAutomation />} />
      <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
      <Route path="/services/cloud-devops" element={<CloudDevOps />} />
      <Route path="/services/mvp-development" element={<MVPDevelopment />} />

      {/* Technologies */}
      <Route path="/technologies/react-nextjs" element={<ReactNextjs />} />
      <Route path="/technologies/node-bun" element={<NodeBun />} />
      <Route path="/technologies/python-fastapi" element={<PythonFastAPI />} />
      <Route path="/technologies/react-native" element={<ReactNative />} />
      <Route path="/technologies/postgres-supabase" element={<PostgresSupabase />} />
      <Route path="/technologies/aws-cloudflare" element={<AWSCloudflare />} />
    </Routes>
  );
}
