import { motion } from "motion/react";

const Skills = () => {
  return (
    <section className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-12 md:gap-8"
        >
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500">Expertise</h2>
          </div>

          <div className="md:col-span-8">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-12">
              {/* Brand & Strategy */}
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-6 pb-2 border-b border-neutral-100">Brand & Strategy</h4>
                <ul className="space-y-3 text-neutral-600">
                  <li>Brand Identity</li>
                  <li>Visual Strategy</li>
                  <li>Art Direction</li>
                  <li>Brand Guidelines</li>
                  <li>Typography</li>
                </ul>
              </div>

              {/* Design & UX */}
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-6 pb-2 border-b border-neutral-100">Design & UX</h4>
                <ul className="space-y-3 text-neutral-600">
                  <li>UI Design</li>
                  <li>UX Research</li>
                  <li>Design Systems</li>
                  <li>Prototyping</li>
                  <li>Wireframing</li>
                </ul>
              </div>

              {/* Marketing & Performance */}
              <div>
                <h4 className="text-lg font-bold text-neutral-900 mb-6 pb-2 border-b border-neutral-100">Marketing</h4>
                <ul className="space-y-3 text-neutral-600">
                  <li>Performance Creative</li>
                  <li>Social Media Design</li>
                  <li>Conversion Design</li>
                  <li>Data Visualization</li>
                  <li>Presentation Design</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
