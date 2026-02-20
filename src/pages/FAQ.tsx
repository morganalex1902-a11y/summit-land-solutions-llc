import { Helmet } from "react-helmet-async";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How much does land clearing cost in Calhoun, GA?",
    answer: "Costs vary depending on the acreage, density of vegetation, terrain, and specific requirements of the job. We provide free, detailed estimates after assessing your property to give you an accurate price."
  },
  {
    question: "Do you provide free estimates?",
    answer: "Yes! We offer free on-site estimates for all our services in Calhoun and surrounding areas. Contact us to schedule a visit."
  },
  {
    question: "How large of a property can you handle?",
    answer: "We have the equipment and capacity to handle projects ranging from small residential lots to large commercial developments and acreage. No job is too big or too small."
  },
  {
    question: "What equipment do you use?",
    answer: "We use professional-grade heavy equipment including bulldozers, excavators, forestry mulchers, and skid steers to ensure efficient and high-quality results."
  },
  {
    question: "Do you handle drainage correction?",
    answer: "Absolutely. We specialize in solving drainage issues including standing water, erosion control, and improper grading. We can install French drains, culverts, and regrade land to direct water away from structures."
  },
  {
    question: "Are you insured?",
    answer: "Yes, Summit Land Solutions LLC is fully insured for your peace of mind and protection."
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>FAQ | Summit Land Solutions LLC</title>
        <meta name="description" content="Frequently asked questions about our land clearing, grading, and excavation services in Calhoun, GA." />
      </Helmet>
      
      <TopBar />
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-muted-foreground">
                Answers to common questions about our services and process.
              </p>
            </div>
            
            <GlassCard className="p-8">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-lg font-semibold text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground text-base leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </GlassCard>
            
            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">Have a question not listed here?</p>
              <Button asChild size="lg" className="rounded-full">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
