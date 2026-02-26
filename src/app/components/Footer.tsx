import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-neutral-500 py-12 border-t border-neutral-800">
      <div className="container mx-auto px-6 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm">
          © {new Date().getFullYear()} Dhiraj Kumar Shah. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors" aria-label="Linedin"><Linkedin size={20} /></a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Twitter"><Twitter size={20} /></a>
          <a href="https://www.behance.net/dkdesign" target="_blank" rel="noopener noreferrer" className="text-white hover:opacity-80 transition-opacity" aria-label="Behance">
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide"
            >
              <path d="M11 12H7.2V8.4H11C12.1 8.4 13 9.3 13 10.2C13 11.1 12.1 12 11 12Z" />
              <path d="M11.5 17.6H7.2V14.4H11.5C12.6 14.4 13.5 15.3 13.5 16.2C13.5 17.1 12.6 17.6 11.5 17.6Z" />
              <path d="M3 6.6H7.2V21H3V6.6Z" />
              <path d="M17 11.4H21C21 11.4 21.6 14.4 18.6 14.4C15.6 14.4 15 11.4 17 11.4Z" />
              <path d="M21 13.2H17" />
              <path d="M16.2 9H21" />
            </svg>
          </a>
          <a href="#" className="hover:text-white transition-colors" aria-label="Instagram"><Instagram size={20} /></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
