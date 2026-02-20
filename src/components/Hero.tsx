import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/land-clearing.png"; // Using one of the uploaded images as hero
import gsap from "gsap";

const Hero = () => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-text", {
        y: 40,
        opacity: 0,
        duration: 0.7, // Faster hero animation
        stagger: 0.12,
        ease: "power3.out",
        force3D: true,
      });

      gsap.from(".hero-buttons", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        delay: 0.5, // Faster overall animation
        ease: "power3.out",
        force3D: true,
      });
    }, contentRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="Land Clearing in Calhoun GA" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/90 via-white/70 to-transparent md:via-white/50"></div>
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20" ref={contentRef}>
        <div className="max-w-3xl">
          <div className="hero-text inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold mb-6 text-sm backdrop-blur-md">
            Serving Calhoun, GA & Surrounding Areas
          </div>
          
          <h1 className="hero-text text-5xl md:text-7xl font-bold text-foreground mb-6 leading-[1.1] tracking-tight">
            Professional <span className="text-primary">Land Clearing</span> & Excavation
          </h1>
          
          <p className="hero-text text-xl md:text-2xl text-foreground/80 mb-10 max-w-2xl leading-relaxed">
            Expert land clearing, forestry mulching, grading, and drainage solutions focused on efficiency and clean execution.
          </p>
          
          <div className="hero-buttons flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 h-14 text-lg shadow-lg shadow-primary/20">
              <Link to="/contact">
                Request a Quote <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="bg-white/50 backdrop-blur-md border-primary/20 hover:bg-white/80 text-foreground rounded-full px-8 h-14 text-lg">
              <a href="tel:678-986-6653">
                <Phone className="mr-2 h-5 w-5" /> Call 678-986-6653
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
