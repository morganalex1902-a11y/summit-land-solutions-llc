import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Truck } from "lucide-react";
import imgDelivery from "@/assets/gravel-road.png";

const MaterialDelivery = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Material Delivery Services | Calhoun, GA | Summit Land Solutions</title>
        <meta name="description" content="Bulk material delivery in Calhoun, GA. Gravel, fill dirt, sand, and more delivered to your job site. Fast, reliable delivery service." />
      </Helmet>

      <TopBar />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Fast & Reliable Material Delivery</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Quality gravel, dirt, fill, and other materials delivered directly to your project site. We ensure timely delivery and proper placement for your convenience.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={imgDelivery} alt="Material delivery services" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">Materials We Deliver</h2>
              <div className="space-y-4">
                {[
                  "Landscape gravel and rock",
                  "Fill dirt and topsoil",
                  "Sand and mulch",
                  "Crushed stone and road base",
                  "Bulk materials",
                  "Custom material orders"
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
                  <span>Flexible delivery scheduling</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Quality materials guaranteed</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Fair, competitive pricing</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Professional placement service</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Reliable fleet and drivers</span>
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Material Options Section */}
          <div className="bg-secondary/5 rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Material Types & Uses</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Fill Materials",
                  items: ["Fill dirt", "Clay", "Mixed fill"]
                },
                {
                  title: "Aggregate",
                  items: ["Crushed stone", "Road base", "Gravel"]
                },
                {
                  title: "Landscape Materials",
                  items: ["Mulch", "Topsoil", "Sand"]
                }
              ].map((category, i) => (
                <GlassCard key={i} className="p-6">
                  <Truck className="text-primary mb-3" size={24} />
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

          {/* Delivery Information */}
          <div className="border-2 border-primary/20 rounded-3xl p-12 mb-20">
            <h2 className="text-2xl font-bold mb-4">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Call or Request", text: "Contact us with material type and quantity needed" },
                { step: "2", title: "Confirm Details", text: "We confirm delivery time and location" },
                { step: "3", title: "Fast Delivery", text: "Materials arrive on schedule" },
                { step: "4", title: "Expert Placement", text: "Professional placement at your site" }
              ].map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-10 h-10 bg-primary rounded-full text-white font-bold flex items-center justify-center mx-auto mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-primary/10 rounded-3xl p-12">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a free quote on material delivery. We serve Calhoun, Gordon County, and surrounding Northwest Georgia areas.
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

export default MaterialDelivery;
