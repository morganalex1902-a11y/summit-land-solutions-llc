import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import imgDemo from "@/assets/trenching.png";

const Demolition = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Demolition & Debris Removal | Calhoun, GA | Summit Land Solutions</title>
        <meta name="description" content="Professional demolition and debris hauling services in Calhoun, GA. Safe building removal and complete site cleanup." />
      </Helmet>

      <TopBar />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Safe Demolition & Complete Cleanup</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Structure removal and debris hauling for residential and light commercial projects. We ensure safe, professional takedown and thorough site cleanup.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={imgDemo} alt="Demolition and debris services" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Provide</h2>
              <div className="space-y-4">
                {[
                  "Building and structure demolition",
                  "Concrete removal and recycling",
                  "Debris hauling and disposal",
                  "Site cleanup and preparation",
                  "Salvage material recovery",
                  "Storm debris cleanup"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Our Commitment</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fully licensed and insured operators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Safety protocols for all demolition work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Environmentally responsible disposal</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Complete debris removal included</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Minimal property damage</span>
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Project Types Section */}
          <div className="bg-secondary/5 rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Demolition Services</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Residential Demolition",
                  items: ["Houses and additions", "Garages and sheds", "Site preparation"]
                },
                {
                  title: "Commercial Services",
                  items: ["Light commercial buildings", "Interior demolition", "Debris management"]
                }
              ].map((category, i) => (
                <GlassCard key={i} className="p-6">
                  <h3 className="font-bold text-lg mb-4">{category.title}</h3>
                  <ul className="space-y-2">
                    {category.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-muted-foreground">
                        <span className="text-primary">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </GlassCard>
              ))}
            </div>
          </div>

          {/* Safety Section */}
          <div className="border-2 border-primary/20 rounded-3xl p-12 mb-20">
            <h2 className="text-2xl font-bold mb-4">Safety First</h2>
            <p className="text-muted-foreground leading-relaxed mb-4">
              All our demolition work is performed by trained, certified professionals who follow strict safety protocols and industry standards. We protect your property, our team, and the environment throughout every project.
            </p>
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

export default Demolition;
