import { useEffect, useRef } from "react";
import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Star, Quote } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "John D.",
    location: "Calhoun, GA",
    service: "Land Clearing",
    text: "Summit Land Solutions did an incredible job clearing my 5-acre lot. They were professional, efficient, and left the property looking better than I could have imagined. Highly recommend!"
  },
  {
    name: "Sarah M.",
    location: "Adairsville, GA",
    service: "Grading & Excavation",
    text: "We hired them for driveway grading and site prep for our new shop. The attention to detail was impressive. They solved our drainage issues completely."
  },
  {
    name: "Robert T.",
    location: "Gordon County, GA",
    service: "Forestry Mulching",
    text: "Best decision I made was hiring Summit for forestry mulching. They cleared the underbrush without damaging the keeper trees. My property looks park-like now."
  },
  {
    name: "Michael P.",
    location: "Resaca, GA",
    service: "Dozer Work",
    text: "Professional operation with serious equipment. They handled a large earthmoving project for me on schedule and on budget. Great communication throughout."
  },
  {
    name: "Jennifer L.",
    location: "Calhoun, GA",
    service: "Drainage Solutions",
    text: "We had standing water in our yard for years. Summit came out, assessed the issue, and installed a drainage system that actually works. No more mud pit!"
  },
  {
    name: "David W.",
    location: "Ranger, GA",
    service: "Demolition",
    text: "Safe and clean demolition of an old barn on our property. They hauled everything away and graded the site perfectly afterwards."
  }
];

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".testimonial-card", {
        scrollTrigger: {
          trigger: ".testimonial-grid",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Testimonials | Summit Land Solutions LLC</title>
        <meta name="description" content="See what our customers in Calhoun, GA and surrounding areas are saying about our land clearing and excavation services." />
      </Helmet>
      
      <TopBar />
      <Navbar />
      
      <main className="pt-32 pb-20" ref={containerRef}>
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Client Testimonials</h1>
            <p className="text-xl text-muted-foreground">
              Don't just take our word for it. Here's what our satisfied clients have to say about our work.
            </p>
          </div>
          
          <div className="testimonial-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((item, index) => (
              <GlassCard key={index} className="testimonial-card relative pt-12 h-full flex flex-col">
                <div className="absolute top-6 right-6 text-primary/10">
                  <Quote size={60} />
                </div>
                
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-lg text-foreground/80 italic mb-6 flex-grow relative z-10">
                  "{item.text}"
                </p>
                
                <div className="mt-auto border-t border-primary/10 pt-4">
                  <div className="font-bold text-lg">{item.name}</div>
                  <div className="text-sm text-muted-foreground flex items-center justify-between mt-1">
                    <span>{item.location}</span>
                    <span className="text-primary font-medium bg-primary/5 px-2 py-0.5 rounded text-xs">{item.service}</span>
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Testimonials;
