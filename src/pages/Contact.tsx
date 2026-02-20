import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | Summit Land Solutions LLC</title>
        <meta name="description" content="Contact Summit Land Solutions for a free quote on land clearing, grading, and excavation in Calhoun, GA." />
      </Helmet>
      
      <TopBar />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">Contact Us</h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Ready to start your project? Fill out the form below or give us a call for a free estimate.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {/* Contact Info */}
              <div className="space-y-6">
                <GlassCard className="h-full bg-primary/5 border-primary/10">
                  <h3 className="text-2xl font-bold mb-6 text-primary">Get In Touch</h3>
                  <div className="space-y-6">
                    <a href="tel:678-986-6653" className="flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <span className="block font-medium text-muted-foreground text-sm">Phone</span>
                        <span className="text-lg font-bold">678-986-6653</span>
                      </div>
                    </a>
                    
                    <a href="mailto:black5059@gmail.com" className="flex items-start gap-4 p-4 rounded-xl bg-white/50 hover:bg-white transition-colors">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <span className="block font-medium text-muted-foreground text-sm">Email</span>
                        <span className="text-lg font-bold break-all">black5059@gmail.com</span>
                      </div>
                    </a>
                    
                    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <span className="block font-medium text-muted-foreground text-sm">Service Area</span>
                        <span className="text-lg font-bold">Calhoun, GA & Surrounding Areas</span>
                      </div>
                    </div>
                  </div>
                </GlassCard>
              </div>
              
              {/* Contact Form */}
              <div>
                <GlassCard>
                  <form className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Name</label>
                        <Input id="name" placeholder="Your Name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                        <Input id="phone" placeholder="Your Phone Number" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">Email</label>
                      <Input id="email" type="email" placeholder="Your Email Address" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="service" className="text-sm font-medium">Service Needed</label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="clearing">Land Clearing</SelectItem>
                          <SelectItem value="mulching">Forestry Mulching</SelectItem>
                          <SelectItem value="grading">Grading & Excavation</SelectItem>
                          <SelectItem value="dozer">Dozer Work</SelectItem>
                          <SelectItem value="drainage">Drainage Solutions</SelectItem>
                          <SelectItem value="demolition">Demolition</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="location" className="text-sm font-medium">Property Location</label>
                      <Input id="location" placeholder="City or Zip Code" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" placeholder="Tell us about your project..." className="min-h-[120px]" />
                    </div>
                    
                    <Button type="submit" className="w-full text-lg h-12">Send Message</Button>
                  </form>
                </GlassCard>
              </div>
            </div>
            
            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px] relative bg-secondary/20 flex items-center justify-center">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105623.73809071444!2d-84.99619175276632!3d34.50258668981628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885ff3626e27161f%3A0x60064f279d023f0!2sCalhoun%2C%20GA!5e0!3m2!1sen!2sus!4v1709241928421!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 w-full h-full grayscale opacity-80 hover:grayscale-0 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
