import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Trees, Tractor, Shovel, HardHat, CheckCircle2, Truck } from "lucide-react";

const services = [
  {
    id: "land-clearing",
    title: "Land Clearing",
    description: "Comprehensive land clearing services for residential and commercial properties. We remove brush, trees, and debris efficiently using professional-grade equipment.",
    details: ["Residential lot clearing", "Commercial property clearing", "Hunting land preparation", "Right-of-way clearing"],
    icon: Trees
  },
  {
    id: "forestry-mulching",
    title: "Forestry Mulching",
    description: "Efficient vegetation removal without large-scale ground disturbance. Ideal for overgrown acreage and property maintenance. Returns nutrients to the soil.",
    details: ["Underbrush removal", "Invasive species control", "Property line clearing", "Pasture restoration"],
    icon: Trees
  },
  {
    id: "grading-excavation",
    title: "Grading & Excavation",
    description: "Precision grading for driveways, pads, drainage control, and foundation preparation to ensure proper water flow and stability.",
    details: ["Driveway grading", "House pads", "Foundation preparation", "Final grading"],
    icon: Shovel
  },
  {
    id: "dozer-work",
    title: "Dozer Work",
    description: "Heavy equipment solutions for large-scale site preparation and earthmoving. Capable of handling tough terrain and big projects.",
    details: ["Site preparation", "Pond construction", "Road building", "Land leveling"],
    icon: Tractor
  },
  {
    id: "drainage",
    title: "Drainage Solutions",
    description: "Proper drainage prevents erosion and foundation damage. We implement effective systems to manage water flow on your property.",
    details: ["Trenching", "Culvert installation", "French drains", "Water diversion grading"],
    icon: CheckCircle2
  },
  {
    id: "demolition",
    title: "Demolition & Debris",
    description: "Structure removal and debris hauling for residential and light commercial needs. We ensure safe takedown and complete cleanup.",
    details: ["Building teardown", "Concrete removal", "Debris hauling", "Site cleanup"],
    icon: HardHat
  }
];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Our Services | Land Clearing & Excavation Calhoun, GA</title>
        <meta name="description" content="Explore our services including land clearing, forestry mulching, grading, dozer work, and drainage solutions in Calhoun, GA." />
      </Helmet>
      
      <TopBar />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-muted-foreground">
              Professional land development solutions tailored to your specific needs.
              We combine experience with the right equipment to get the job done right.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div key={service.id} id={service.id} className="scroll-mt-32">
                <GlassCard className="grid md:grid-cols-[1fr_2fr] gap-8 items-start p-8 hover:shadow-xl transition-shadow border-t-4 border-t-primary">
                  <div className="bg-primary/5 rounded-2xl p-8 flex flex-col items-center justify-center text-center h-full min-h-[200px]">
                    <service.icon size={64} className="text-primary mb-4" />
                    <h3 className="text-xl font-bold">{service.title}</h3>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <h4 className="font-semibold text-lg mb-3">Key Capabilities:</h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                      {service.details.map((detail, i) => (
                        <li key={i} className="flex items-center gap-2 text-foreground/80">
                          <CheckCircle2 size={18} className="text-primary" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                    
                    <Button asChild>
                      <Link to="/contact">Request {service.title} Quote</Link>
                    </Button>
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center bg-primary/5 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Don't see what you're looking for?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer a wide range of land services. Contact us to discuss your specific project needs.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Services;
