import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";
import imgGrading from "@/assets/grading-work.png";

const GradingExcavation = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Helmet>
        <title>Grading & Excavation Services | Calhoun, GA | Summit Land Solutions</title>
        <meta name="description" content="Professional grading and excavation services in Calhoun, GA. Driveway grading, house pads, foundation prep, and precise site work." />
      </Helmet>

      <TopBar />
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Precision Grading & Excavation</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Expert grading for driveways, pads, foundation preparation, and drainage control. We ensure proper water flow and stability for your projects.
              </p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Request a Free Quote</Link>
              </Button>
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img src={imgGrading} alt="Grading and excavation services" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Service Details */}
          <div className="grid md:grid-cols-2 gap-12 mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">What We Provide</h2>
              <div className="space-y-4">
                {[
                  "Driveway grading and preparation",
                  "House pad construction",
                  "Foundation site preparation",
                  "Final grade work",
                  "Excavation and fill operations",
                  "Drainage planning and execution"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="text-primary mt-1 flex-shrink-0" size={20} />
                    <span className="text-lg text-foreground/80">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <GlassCard className="p-8">
              <h3 className="text-2xl font-bold mb-6">Our Expertise</h3>
              <ul className="space-y-4 text-muted-foreground">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Precision equipment and experienced operators</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Proper grading for water drainage</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Foundation-ready site preparation</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Accurate elevation and slope work</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Complete compliance with building codes</span>
                </li>
              </ul>
            </GlassCard>
          </div>

          {/* Application Section */}
          <div className="bg-secondary/5 rounded-3xl p-12 mb-20">
            <h2 className="text-3xl font-bold mb-8 text-center">Perfect For</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Residential Projects",
                  items: ["New home construction", "Driveways and walkways", "Landscaping preparation"]
                },
                {
                  title: "Commercial Projects",
                  items: ["Site development", "Parking areas", "Foundation work"]
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

export default GradingExcavation;
