import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { RevealText } from "./ui/RevealText";

// Mock Images using Unsplash
const projects = [
  {
    title: "Loop Fashion",
    category: "Branding & Identity",
    image: "https://images.unsplash.com/photo-1761778304143-4c89e7dd2457?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwZmFzaGlvbiUyMGJyYW5kJTIwaWRlbnRpdHl8ZW58MXx8fHwxNzcxODE0NTQ1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "large"
  },
  {
    title: "Aallu Restro",
    category: "Brand Guidelines",
    image: "https://images.unsplash.com/photo-1763596304819-c97878428b32?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwYnJhbmRpbmclMjBkZXNpZ258ZW58MXx8fHwxNzcxODE0NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "small"
  },
  {
    title: "Tech Nexus",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1639413665566-2f75adf7b7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwZGVzayUyMG1pbmltYWx8ZW58MXx8fHwxNzcxODE0NTQ2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "small"
  },
  {
    title: "Abstract Concepts",
    category: "3D & Motion",
    image: "https://images.unsplash.com/photo-1761998066478-821bf52c2849?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1pbmltYWwlMjAzZCUyMHNoYXBlJTIwZGFyayUyMGFlc3RoZXRpY3xlbnwxfHx8fDE3NzE4MTQ1NDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    size: "large"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-neutral-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-400">Selected Work</h2>
          </div>
          <div className="md:col-span-8">
            <RevealText 
              text="A curation of projects" 
              tag="h3" 
              className="text-3xl md:text-4xl font-medium text-white leading-tight"
            />
            <RevealText 
              text="defining visual identities." 
              tag="h3" 
              className="text-3xl md:text-4xl font-medium text-white leading-tight"
              delay={0.1}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`group relative overflow-hidden bg-neutral-800 aspect-[4/3] cursor-none ${
                project.size === "large" ? "md:row-span-2 md:aspect-[3/4]" : ""
              }`}
            >
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-60"
              />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="border-t border-white/20 pt-6 flex justify-between items-end">
                  <div>
                    <h4 className="text-2xl font-bold mb-1">{project.title}</h4>
                    <p className="text-neutral-300">{project.category}</p>
                  </div>
                  <div className="bg-white text-black p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <button className="text-white border-b border-white pb-1 hover:text-neutral-300 hover:border-neutral-300 transition-colors uppercase tracking-widest text-sm">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
