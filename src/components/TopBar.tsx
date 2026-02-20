import { Phone, Mail, Facebook } from "lucide-react";

const TopBar = () => {
  return (
    <div className="bg-primary text-primary-foreground py-2 px-4 text-sm hidden md:block">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-6">
          <a href="tel:678-986-6653" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Phone size={16} />
            <span>678-986-6653</span>
          </a>
          <a href="mailto:black5059@gmail.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
            <Mail size={16} />
            <span>black5059@gmail.com</span>
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://www.facebook.com/profile.php?id=100089499875092" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-secondary transition-colors bg-white/10 rounded-full p-1.5"
            aria-label="Facebook"
          >
            <Facebook size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
