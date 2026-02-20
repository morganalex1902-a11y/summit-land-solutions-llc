import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consented = localStorage.getItem("cookieConsent");
    if (!consented) {
      // Small delay for better UX
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm animate-fadeIn">
      <div className="glass-card bg-white/90 backdrop-blur-xl border border-primary/10 shadow-2xl p-6 rounded-2xl">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-2 right-2 text-muted-foreground hover:text-primary transition-colors"
        >
          <X size={16} />
        </button>
        <h3 className="font-bold text-lg mb-2">We use cookies</h3>
        <p className="text-muted-foreground text-sm mb-4">
          We use cookies to enhance your browsing experience and analyze our traffic.
        </p>
        <div className="flex gap-2">
          <Button onClick={handleAccept} className="w-full rounded-full bg-primary hover:bg-primary/90 text-white">
            Accept
          </Button>
          <Button variant="outline" onClick={() => setIsVisible(false)} className="w-full rounded-full">
            Decline
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
