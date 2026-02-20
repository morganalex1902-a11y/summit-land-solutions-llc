import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Leaf, ArrowRight } from "lucide-react";
import imgMulching from "@/assets/site-prep.png";

const ForestryMulching = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Forestry Mulching Services | Calhoun, GA | Summit Land Solutions</title>
        <meta name="description" content="Professional forestry mulching services in Calhoun, GA. Vegetation removal, invasive species control, and pasture restoration without ground disturbance." />
      </Helmet>

      <TopBar />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Efficient Forestry Mulching</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Remove vegetation without large-scale ground disturbance. Our forestry mulching returns nutrients to the soil while clearing overgrown acreage and invasive species.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={imgMulching} alt="Forestry mulching services" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Service Areas</h2>
              <div className="space-y-4">
                {[
                  "Underbrush removal",
                  "Invasive species control",
                  "Property line clearing",
                  "Pasture restoration",
                  "Access road creation",
                  "Wildlife habitat improvement"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Key Benefits</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Minimal ground disturbance and erosion</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Returns nutrients to soil as mulch</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Cost-effective for large areas</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Environmentally friendly approach</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reduces fire hazard risk</span>
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Why Choose Section */}
          <div className="bg-secondary/5 rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Why Forestry Mulching?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Eco-Friendly",
                  desc: "No burning, no heavy debris removal - just efficient grinding that enriches your soil"
                },
                {
                  title: "Cost-Effective",
                  desc: "Single pass removes multiple trees and brush, reducing overall project costs"
                },
                {
                  title: "Fast & Efficient",
                  desc: "Complete larger projects in less time with minimal site disturbance"
                }
              ].map((item, i) => (
                <GlassCard key={i} className="p-6">
                  <h3 className="font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </GlassCard>
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

export default ForestryMulching;
