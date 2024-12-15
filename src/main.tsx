import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import App from "./App.tsx";
import "./index.css";
import PrivacyPolicy from "./Pages/PrivacyPolicy.tsx";
import TermsOfService from "./Pages/TermsOfService.tsx";
import Sitemap from "./Pages/Sitemap.tsx";
import { PerformanceOptimizer } from "./utils/performanceOptimizer"; // Updated import

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <PerformanceOptimizer /> {/* Add this component */}
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/sitemap" element={<Sitemap />} />
      </Routes>
    </Router>
  </StrictMode>
);