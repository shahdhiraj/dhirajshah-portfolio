import { motion } from "motion/react";
import { Download } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 md:gap-8 items-center"
        >
          <div className="md:col-span-4 space-y-8">
            <div>
              <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4 sticky top-32">About</h2>
              <div className="w-12 h-1 bg-neutral-900 rounded-full" />
            </div>
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-50 border border-neutral-100 shadow-sm hidden md:block sticker transition-transform duration-500 hover:rotate-2 hover:scale-[1.02]">
              <img
                src="/hero-profile.png"
                alt="Dhiraj Kumar Shah"
                className="w-full h-full object-cover object-top transition-all duration-700"
              />
            </div>
          </div>

          <div className="md:col-span-8">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-8 text-neutral-900">
              Bridging the gap between visionary brand strategy and high-performance digital product design with 7+ years of expertise.
            </h3>

            <div className="grid md:grid-cols-2 gap-8 text-neutral-600 leading-relaxed">
              <div className="space-y-6">
                <p>
                  My approach focuses on creating scalable design systems and cohesive brand identities that not only look premium but drive real business results. I don't just design interfaces; I design ecosystems.
                </p>
                <p>
                  Having led design at high-growth companies, I understand the balance between aesthetic perfection and engineering constraints, ensuring that what we design is built to perform.
                </p>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-neutral-900 block mb-2">My Focus Areas</h4>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-[1px] bg-neutral-300 mt-3"></span>
                    <span>Strategic Brand Direction & Visual Governance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-[1px] bg-neutral-300 mt-3"></span>
                    <span>Design Systems & UI/UX Leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-[1px] bg-neutral-300 mt-3"></span>
                    <span>Cross-functional Product Strategy & Engineering Alignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-4 h-[1px] bg-neutral-300 mt-3"></span>
                    <span>Business impact & conversion optimization</span>
                  </li>
                </ul>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="mt-10 flex items-center gap-6"
            >
              <a
                href="https://drive.google.com/file/d/1yMNXrAIRJut2xqt8wQYJ2_IKHM7t_C1y/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-neutral-900 text-white rounded-full font-medium text-lg hover:bg-neutral-800 transition-all group shadow-md shadow-neutral-200"
              >
                Download CV
                <Download size={18} className="group-hover:-translate-y-1 group-hover:translate-x-0 transition-transform" />
              </a>
              <div className="w-16 h-16 p-2 bg-white rounded-xl border border-neutral-200 shadow-sm flex items-center justify-center -rotate-2 hover:rotate-0 transition-transform duration-300">
                <img
                  src="/qr-code.png"
                  alt="QR Code for CV"
                  className="w-full h-full object-contain"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
