import { motion } from "motion/react";
import {
  Target,
  Layers,
  Rocket,
  CheckCircle2,
  Zap,
  Globe,
  Sparkles,
  Search,
  Code2,
  Presentation,
  BarChart3,
  MousePointer2,
  ArrowUpRight
} from "lucide-react";

const designProcess = [
  {
    step: "01",
    title: "Discovery & Strategy",
    icon: <Target className="w-6 h-6" />,
    description: "Deep diving into the project goals, audience, and market landscape to build a solid foundation.",
    details: ["Stakeholder Interviews", "Competitor Analysis", "User Personas", "Project Roadmap"],
    color: "bg-blue-50 text-neutral-900"
  },
  {
    step: "02",
    title: "Concept & Design",
    icon: <Layers className="w-6 h-6" />,
    description: "Translating strategy into visual concepts, wireframes, and high-fidelity prototypes.",
    details: ["Visual Concepts", "UX Wireframing", "UI Prototyping", "Design Systems"],
    color: "bg-purple-50 text-neutral-900"
  },
  {
    step: "03",
    title: "Refinement & Launch",
    icon: <Zap className="w-6 h-6" />,
    description: "Iterating based on feedback and ensuring a pixel-perfect execution for the final handoff.",
    details: ["User Testing", "Iterative Feedback", "Asset Handoff", "Live Launch Support"],
    color: "bg-orange-50 text-neutral-900"
  }
];

const Skills = () => {
  return (
    <section id="design-process" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Subtle Background Decoration - Cleaned */}
      <div className="absolute top-0 right-0 pointer-events-none opacity-0" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-4"
          >
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4">Design process</h2>
            <div className="w-12 h-1 bg-neutral-900 rounded-full" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-8"
          >
            <h3 className="text-3xl md:text-5xl font-medium text-neutral-900 leading-[1.2]">
              A structured approach to <span className="text-neutral-400">transforming ideas into digital reality.</span>
            </h3>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connection Lines (Desktop) */}
          <svg className="hidden lg:block absolute top-[68px] left-[15%] right-[15%] w-[70%] h-20 z-0 pointer-events-none overflow-visible" viewBox="0 0 100 20">
            <motion.path
              d="M 0 10 Q 50 20 100 10"
              fill="none"
              stroke="url(#lineGradient)"
              strokeWidth="0.5"
              strokeDasharray="2 2"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#d4d4d4" />
                <stop offset="50%" stopColor="#737373" />
                <stop offset="100%" stopColor="#d4d4d4" />
              </linearGradient>
            </defs>
          </svg>

          {/* Mobile Journey Line (Vertical) */}
          <div className="lg:hidden absolute top-[68px] bottom-[68px] left-1/2 -translate-x-1/2 w-0.5 z-0 pointer-events-none">
            <motion.div
              className="w-full h-full bg-neutral-200"
              style={{
                backgroundImage: 'linear-gradient(to bottom, transparent 50%, #d4d4d4 50%)',
                backgroundSize: '1px 8px'
              }}
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </div>

          <div className="grid lg:grid-cols-3 gap-12 relative z-10">
            {designProcess.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15, duration: 0.8 }}
                className="relative group h-full flex flex-col items-center lg:items-start"
              >
                <div className="w-full h-full bg-neutral-50 border border-neutral-100 rounded-3xl p-8 md:p-10 transition-all duration-500 group-hover:bg-white group-hover:shadow-2xl group-hover:shadow-neutral-200/50 group-hover:-translate-y-2 relative z-10 text-center lg:text-left">
                  {/* Step Number & Icon Header */}
                  <div className="flex justify-between items-center mb-8">
                    <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-md shadow-black/[0.03] active:scale-95 relative z-10`}>
                      {item.icon}
                    </div>
                    <span className="text-3xl font-bold text-neutral-100 group-hover:text-neutral-200 transition-colors duration-500 font-sans tracking-tight">
                      {item.step}
                    </span>
                  </div>

                  <h4 className="text-2xl font-bold text-neutral-900 mb-4 font-sans tracking-tight">
                    {item.title}
                  </h4>

                  <p className="text-neutral-500 text-sm md:text-base leading-relaxed mb-10 font-light">
                    {item.description}
                  </p>

                  <div className="space-y-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-400 uppercase">Process Includes</p>
                    <ul className="space-y-3">
                      {item.details.map((detail, dIdx) => (
                        <motion.li
                          key={dIdx}
                          className="flex items-center gap-3 text-neutral-700 group-hover:text-neutral-900 transition-colors justify-center lg:justify-start"
                        >
                          <div className="w-3 h-[1px] bg-neutral-200 group-hover:bg-neutral-900 transition-all duration-300" />
                          <span className="text-sm font-medium">{detail}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Subtle Interactive Element */}
                  <div className="mt-12 pt-8 border-t border-neutral-100 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-neutral-400">Phase Details</span>
                    <div className="w-8 h-8 rounded-full bg-neutral-900 text-white flex items-center justify-center">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
