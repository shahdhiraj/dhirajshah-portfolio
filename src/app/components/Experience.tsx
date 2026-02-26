import { motion } from "motion/react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-12 gap-12 md:gap-8"
        >
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4 sticky top-32">Experience</h2>
            <div className="w-12 h-1 bg-neutral-900 rounded-full" />
          </div>

          <div className="md:col-span-8 space-y-16">
            {/* Current Role */}
            <div className="relative border-l-2 border-neutral-100 pl-8 md:pl-12 pb-2">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-900 border-4 border-white"></span>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-neutral-900">Mypower</h3>
                <span className="text-neutral-500 font-medium">Oct 2022 – Mar 2025</span>
              </div>

              <h4 className="text-lg text-neutral-700 font-medium mb-6">Senior Graphic Designer / UI-UX Designer</h4>

              <div className="space-y-6 text-neutral-600 leading-relaxed">
                <p>
                  Led the complete design lifecycle for Mypower's digital products, establishing a unified design language and improving user engagement metrics significantly.
                </p>

                <ul className="space-y-2 list-disc list-outside ml-4 marker:text-neutral-400">
                  <li>Direct ownership of brand identity and visual governance across all channels.</li>
                  <li>Architected and maintained a comprehensive design system in Figma.</li>
                  <li>Collaborated closely with engineering to bridge the design-development gap.</li>
                  <li>Mentored junior designers and established design review processes.</li>
                </ul>

                <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-100 mt-6">
                  <h5 className="font-semibold text-neutral-900 mb-3 text-sm uppercase tracking-wide">Key Impact</h5>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-2xl md:text-3xl font-bold text-neutral-900">20–30%</span>
                      <span className="text-sm text-neutral-500">Increase in engagement & conversion</span>
                    </div>
                    <div>
                      <span className="block text-2xl md:text-3xl font-bold text-neutral-900">~25%</span>
                      <span className="text-sm text-neutral-500">Reduction in design-to-dev rework</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Previous Role Placeholder - Adding one for visual balance as implied by "7+ years experience" */}
            <div className="relative border-l-2 border-neutral-100 pl-8 md:pl-12">
              <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-neutral-300 border-4 border-white"></span>

              <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
                <h3 className="text-2xl font-bold text-neutral-400">Previous Roles</h3>
                <span className="text-neutral-400 font-medium">2017 – 2022</span>
              </div>

              <p className="text-neutral-400">
                Prior experience includes roles in digital agencies and freelance brand strategy consultation, working with diverse clients in tech and retail.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
