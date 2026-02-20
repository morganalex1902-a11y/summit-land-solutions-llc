import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Phone, Mail, MapPin, Facebook, ArrowRight } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-12 h-12 relative overflow-hidden rounded-full border border-gray-100">
                <img src={logo} alt="Summit Land Solutions" className="object-cover w-full h-full" />
              </div>
              <span className="font-bold text-xl text-primary">Summit Land Solutions</span>
            </Link>
            <p className="text-muted-foreground leading-relaxed">
              Professional land development contractor focused on efficiency, heavy equipment capability, and clean execution in Calhoun, GA.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/profile.php?id=100089499875092" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-primary/5 hover:bg-primary/10 p-2.5 rounded-full text-primary transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {[
                "Land Clearing",
                "Forestry Mulching",
                "Grading & Excavation",
                "Dozer Work",
                "Drainage Solutions",
                "Demolition",
              ].map((service) => (
                <li key={service}>
                  <Link 
                    to="/services" 
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary/40"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6">Company</h3>
            <ul className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Service Area", path: "/service-area" },
                { name: "Testimonials", path: "/testimonials" },
                { name: "FAQ", path: "/faq" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.path} 
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li>
                <a href="tel:678-986-6653" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <span className="block font-medium text-foreground">Phone</span>
                    678-986-6653
                  </div>
                </a>
              </li>
              <li>
                <a href="mailto:black5059@gmail.com" className="flex items-start gap-3 text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 mt-0.5 text-primary" />
                  <div>
                    <span className="block font-medium text-foreground">Email</span>
                    black5059@gmail.com
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 mt-0.5 text-primary" />
                <div>
                  <span className="block font-medium text-foreground">Service Area</span>
                  Calhoun, GA & Surrounding
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Summit Land Solutions LLC. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-conditions" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
