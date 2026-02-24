import { motion } from "motion/react";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-12 gap-12 md:gap-8"
        >
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4 sticky top-32">About</h2>
          </div>
          
          <div className="md:col-span-8">
            <h3 className="text-3xl md:text-4xl font-medium leading-tight mb-8 text-neutral-900">
              With over 7 years of experience, I bridge the gap between brand strategy and digital product design.
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
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5"></span>
                    <span>Brand ownership & governance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5"></span>
                    <span>Design systems & UI/UX leadership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5"></span>
                    <span>Engineering & Product collaboration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-900 mt-2.5"></span>
                    <span>Business impact & conversion optimization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
