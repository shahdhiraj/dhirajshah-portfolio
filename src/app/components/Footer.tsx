import { Linkedin, Github, Globe } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-500 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Dhiraj Kumar Shah. All rights reserved.
        </p>

        <div className="flex gap-6 items-center">
          <a href="https://dhiraj-shah.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Portfolio"><Globe size={20} /></a>
          <a href="https://www.linkedin.com/in/shahdhiraj/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn"><Linkedin size={20} /></a>
          <a href="https://www.behance.net/dkdesign" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="Behance">
            <img src="/behance.png" alt="Behance" width="20" height="20" className="object-contain invert brightness-0" />
          </a>
          <a href="https://github.com/shahdhiraj" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="GitHub"><Github size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
