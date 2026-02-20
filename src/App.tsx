import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import ServiceArea from "./pages/ServiceArea";
import Testimonials from "./pages/Testimonials";
import NotFound from "./pages/NotFound";
import TermsConditions from "./pages/TermsConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import LandClearing from "./pages/services/LandClearing";
import ForestryMulching from "./pages/services/ForestryMulching";
import GradingExcavation from "./pages/services/GradingExcavation";
import DozerWork from "./pages/services/DozerWork";
import Drainage from "./pages/services/Drainage";
import Demolition from "./pages/services/Demolition";
import MaterialDelivery from "./pages/services/MaterialDelivery";
import { useEffect } from "react";

import CookieConsent from "./components/CookieConsent";

const queryClient = new QueryClient();

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Use smooth scroll to top on route change
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <CookieConsent />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/land-clearing" element={<LandClearing />} />
          <Route path="/services/forestry-mulching" element={<ForestryMulching />} />
          <Route path="/services/grading-excavation" element={<GradingExcavation />} />
          <Route path="/services/dozer-work" element={<DozerWork />} />
          <Route path="/services/drainage" element={<Drainage />} />
          <Route path="/services/demolition" element={<Demolition />} />
          <Route path="/services/material-delivery" element={<MaterialDelivery />} />
          <Route path="/services/*" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/service-area" element={<ServiceArea />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
