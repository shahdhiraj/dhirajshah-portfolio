import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-500 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Dhiraj Kumar Shah. All rights reserved.
        </p>
        
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Twitter size={20} /></a>
          <a href="#" className="hover:text-white transition-colors"><Instagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
