import { motion } from "motion/react";
import { Figma, PenTool, Video, Command, Layers, Box, Monitor, MousePointer2 } from "lucide-react";

// Lucide doesn't have all brand icons, so we use generic placeholders or closest matches for some.
// In a real project, we'd use SVGs for Adobe logos etc.

const tools = [
  { name: "Figma", icon: <Figma size={32} /> },
  { name: "Adobe Creative Suite", icon: <PenTool size={32} /> },
  { name: "After Effects", icon: <Video size={32} /> },
  { name: "Premiere Pro", icon: <Monitor size={32} /> },
  { name: "Maze", icon: <MousePointer2 size={32} /> },
  { name: "Spline", icon: <Box size={32} /> },
  { name: "Rotato", icon: <Layers size={32} /> },
  { name: "Notion", icon: <Command size={32} /> },
];

const Tools = () => {
  return (
    <section className="py-24 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-center">
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500 mb-4">Toolkit</h2>
            <div className="w-12 h-1 bg-neutral-900 rounded-full" />
          </div>

          <div className="md:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="bg-white p-6 rounded-xl border border-neutral-100 flex flex-col items-center justify-center gap-4 hover:border-neutral-300 hover:shadow-lg transition-all duration-300 group"
                >
                  <div className="text-neutral-400 group-hover:text-neutral-900 transition-colors">
                    {tool.icon}
                  </div>
                  <span className="text-sm font-medium text-neutral-600 text-center">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
