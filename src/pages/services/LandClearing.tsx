import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Trees, ArrowRight } from "lucide-react";
import imgClearing from "@/assets/land-clearing.png";

const LandClearing = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Land Clearing Services | Calhoun, GA | Summit Land Solutions</title>
        <meta name="description" content="Professional land clearing services in Calhoun, GA. Residential and commercial property clearing, hunting land preparation, and more." />
      </Helmet>

      <TopBar />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Professional Land Clearing Services</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform overgrown properties into usable land with our comprehensive clearing services. We handle projects of any size with professional-grade equipment and experienced operators.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={imgClearing} alt="Land clearing services" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Offer</h2>
              <div className="space-y-4">
                {[
                  "Residential lot clearing",
                  "Commercial property clearing",
                  "Hunting land preparation",
                  "Right-of-way clearing",
                  "Storm debris removal",
                  "Brush and tree removal"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Why Choose Us?</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fully insured and licensed operators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Professional-grade equipment for efficient work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Free estimates and site inspections</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Environmentally responsible disposal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fast turnaround on projects</span>
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Process Section */}
          <div className="bg-secondary/5 rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Process</h2>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: "1", title: "Site Assessment", desc: "We inspect your property and discuss your vision" },
                { step: "2", title: "Quote Preparation", desc: "Detailed estimate based on scope of work" },
                { step: "3", title: "Project Planning", desc: "Timeline and logistics finalized with you" },
                { step: "4", title: "Execution & Cleanup", desc: "Professional completion with site cleanup" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. We serve Calhoun, Gordon County, and surrounding Northwest Georgia areas.
            </p>
            <Button asChild size="lg" className="rounded-full">
              <Link to="/contact">Get Your Free Quote</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LandClearing;
