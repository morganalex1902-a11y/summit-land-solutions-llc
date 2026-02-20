import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MapPin } from "lucide-react";

const ServiceArea = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Service Area | Summit Land Solutions LLC</title>
        <meta name="description" content="We serve Calhoun, Gordon County, and surrounding Northwest Georgia areas with professional land clearing and excavation services." />
      </Helmet>
      
      <TopBar />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Service Area</h1>
            <p className="text-xl text-muted-foreground">
              Proudly serving Calhoun, GA and surrounding Northwest Georgia communities.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
            <GlassCard className="h-full flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                <MapPin className="h-6 w-6" /> Areas We Cover
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full"></span>
                  <span className="font-semibold">Calhoun, GA (Primary)</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                  Gordon County
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                  Adairsville
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                  Resaca
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                  Ranger
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                  Fairmount
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-primary/60 rounded-full"></span>
                  Surrounding Northwest Georgia Areas
                </li>
              </ul>
              
              <div className="mt-8 pt-6 border-t border-primary/10">
                <p className="text-muted-foreground mb-4">
                  Not sure if we cover your area? Give us a call!
                </p>
                <Button asChild className="w-full sm:w-auto rounded-full">
                  <Link to="/contact">Check Availability</Link>
                </Button>
              </div>
            </GlassCard>
            
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border min-h-[400px] bg-secondary/20 relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d211247.47618142888!2d-85.19238350553264!3d34.50258668981628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885ff3626e27161f%3A0x60064f279d023f0!2sCalhoun%2C%20GA!5e0!3m2!1sen!2sus!4v1709241928421!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ServiceArea;
