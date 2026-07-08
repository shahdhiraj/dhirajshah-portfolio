import { motion } from "motion/react";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { ChromaButton } from "./ui/ChromaButton";

const Contact = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-neutral-800/20 skew-x-12 translate-x-1/4 pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-16 md:gap-24"
        >
          <div>
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-4">Contact</h2>
            <div className="w-12 h-1 bg-white rounded-full mb-8" />
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              Let's create <br /> something <span className="text-neutral-400">extraordinary.</span>
            </h3>
            <p className="text-xl text-neutral-400 mb-12 max-w-md">
              Available for strategic partnerships and high-impact design projects. Let's discuss how we can scale your vision.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300">
                  <Mail size={20} />
                </div>
                <a href="mailto:dkg1shah@gmail.com" className="hover:text-neutral-300 transition-colors">dkg1shah@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300">
                  <Phone size={20} />
                </div>
                <a href="tel:+9779817810403" className="hover:text-neutral-300 transition-colors">+977 9817810403</a>
              </div>
              <div className="flex items-center gap-4 text-lg">
                <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300">
                  <MapPin size={20} />
                </div>
                <span>Kathmandu, Nepal / Remote</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm uppercase tracking-wide text-neutral-400">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-transparent border-b border-neutral-700 py-4 text-lg focus:outline-none focus:border-white transition-colors placeholder-neutral-600"
                  placeholder="What's your name?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm uppercase tracking-wide text-neutral-400">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-transparent border-b border-neutral-700 py-4 text-lg focus:outline-none focus:border-white transition-colors placeholder-neutral-600"
                  placeholder="Where can I reach you?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm uppercase tracking-wide text-neutral-400">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-transparent border-b border-neutral-700 py-4 text-lg focus:outline-none focus:border-white transition-colors placeholder-neutral-600 resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <ChromaButton 
                containerClassName="w-full mt-8"
                className="!w-full group"
                size="lg"
              >
                Get in Touch
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </ChromaButton>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
