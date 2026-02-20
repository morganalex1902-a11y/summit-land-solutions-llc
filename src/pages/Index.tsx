import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Trees, Tractor, Shovel, HardHat, Truck } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Images
import imgClearing from "@/assets/land-clearing.png";
import imgMulching from "@/assets/site-prep.png"; // Using site prep as fallback for mulching visually
import imgGrading from "@/assets/grading-work.png";
import imgDozer from "@/assets/dirt-road.png";
import imgDrainage from "@/assets/drainage-pipes.png";
import imgDemo from "@/assets/trenching.png"; // Using trenching/demo related

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Land Clearing",
    description: "Complete removal of brush, trees, and debris for residential and commercial properties.",
    icon: Trees,
    path: "/services/land-clearing",
    image: imgClearing
  },
  {
    title: "Forestry Mulching",
    description: "Efficient vegetation removal that returns nutrients to the soil without disturbing the ground.",
    icon: Trees,
    path: "/services/forestry-mulching",
    image: imgMulching
  },
  {
    title: "Grading & Excavation",
    description: "Precision grading for driveways, house pads, and foundation preparation.",
    icon: Shovel,
    path: "/services/grading-excavation",
    image: imgGrading
  },
  {
    title: "Dozer Work",
    description: "Heavy equipment solutions for large-scale site preparation and earthmoving.",
    icon: Tractor,
    path: "/services/dozer-work",
    image: imgDozer
  },
  {
    title: "Drainage Solutions",
    description: "Expert water management, trenching, french drains, and erosion control.",
    icon: CheckCircle2,
    path: "/services/drainage",
    image: imgDrainage
  },
  {
    title: "Demolition",
    description: "Safe structure removal and debris hauling for residential and light commercial projects.",
    icon: HardHat,
    path: "/services/demolition",
    image: imgDemo
  }
];

const Index = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Summit Land Solutions LLC | Land Clearing & Excavation Calhoun, GA</title>
        <meta name="description" content="Professional land clearing, forestry mulching, grading, and excavation services in Calhoun, GA. Contact Summit Land Solutions for a free quote today." />
      </Helmet>
      
      <TopBar />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Services Section */}
        <section className="py-24 bg-secondary/10" ref={sectionRef}>
          <div className="container mx-auto px-4">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-2 block">Our Expertise</span>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive Land Solutions</h2>
              <p className="text-muted-foreground text-lg">
                We bring professional-grade equipment and experienced operators to every job, ensuring efficient and high-quality results.
              </p>
            </div>
            
            <div className="services-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <GlassCard key={index} hoverEffect className="service-card overflow-hidden group p-0">
                  <div className="h-48 overflow-hidden relative">
                    <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors z-10"></div>
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <div className="w-12 h-12 bg-primary/5 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <service.icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-6 line-clamp-2">{service.description}</p>
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      Learn more <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </GlassCard>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img 
              src={imgClearing} 
              alt="Background" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-primary/90 mix-blend-multiply"></div>
          </div>
          
          <div className="container relative z-10 mx-auto px-4 text-center text-white">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Transform Your Land?</h2>
            <p className="text-xl opacity-90 mb-10 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. We serve Calhoun, Gordon County, and surrounding Northwest Georgia areas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" variant="secondary" className="rounded-full h-14 px-8 text-lg font-semibold">
                <Link to="/contact">Get a Free Quote</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full h-14 px-8 text-lg border-white text-white hover:bg-white hover:text-primary bg-transparent">
                <a href="tel:678-986-6653">Call 678-986-6653</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
