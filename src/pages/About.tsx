import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>About Us | Summit Land Solutions LLC</title>
        <meta name="description" content="Summit Land Solutions is a professional land development contractor in Calhoun, GA, focusing on efficiency, heavy equipment capability, and clean execution." />
      </Helmet>
      
      <TopBar />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">About Summit Land Solutions</h1>
            
            <GlassCard className="mb-12">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Summit Land Solutions LLC is a professional land development contractor based in Calhoun, GA. 
                We specialize in providing high-quality land clearing, grading, excavation, and drainage services 
                to residential and commercial clients throughout Northwest Georgia.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our mission is simple: to deliver efficient, clean, and professional results on every project. 
                We understand that preparing your land is the critical first step in any construction or 
                development project, and we take pride in laying a solid foundation for your success.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With professional-grade heavy equipment and experienced operators, we tackle projects of all 
                sizes with the same attention to detail and commitment to safety.
              </p>
            </GlassCard>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">Local</div>
                <div className="text-muted-foreground">Serving Calhoun & Surrounding Areas</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">Pro</div>
                <div className="text-muted-foreground">Professional Grade Equipment</div>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-border text-center">
                <div className="text-4xl font-bold text-primary mb-2">Trusted</div>
                <div className="text-muted-foreground">Fully Licensed & Insured</div>
              </div>
            </div>
            
            <div className="text-center">
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Work With Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
