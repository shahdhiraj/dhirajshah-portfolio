import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { RevealText } from "./ui/RevealText";
import { ChromaButton } from "./ui/ChromaButton";

// Mock Images using Unsplash
const projects = [
  {
    title: "Logitech Mouse Landing Website",
    category: "Digital Product Concept",
    image: "/mouse_main.png",
    size: "small",
    link: "https://www.behance.net/gallery/199906909/Logitech-Mouse-Landing-Website-Concept"
  },
  {
    title: "Loop Fashion",
    category: "Branding – Digital Marketplace",
    image: "/loop-project-thumbnail.jpg",
    size: "large",
    link: "https://drive.google.com/file/d/14cBQQ0bY1GIW0kzArLd1fbhvKNkmBDg8/view"
  },
  {
    title: "Aallu Restro",
    category: "Brand Identity & Strategy",
    image: "/aallu-project.jpg",
    size: "small",
    link: "https://bit.ly/45niORR"
  },
  {
    title: "Mypower",
    category: "Design System",
    image: "/mypower-project.png",
    size: "small",
    link: "https://www.mypower.com.np"
  },
  {
    title: "EduK",
    category: "Brand Identity & Guidelines",
    image: "/eduk-project.png",
    size: "large",
    link: "https://www.behance.net/gallery/235394107/EduK-Brand-Identity-Guidelines"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-24 md:py-32 bg-neutral-900 text-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-4">Selected Work</h2>
            <div className="w-12 h-1 bg-white rounded-full" />
          </div>
          <div className="md:col-span-8">
            <RevealText
              text="A curated selection of work"
              tag="h3"
              className="text-3xl md:text-4xl font-medium text-white leading-tight"
            />
            <RevealText
              text="defining modern digital standards."
              tag="h3"
              className="text-3xl md:text-4xl font-medium text-white leading-tight"
              delay={0.1}
            />
          </div>
        </div>

        <div className="columns-1 md:columns-2 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8, ease: "easeOut" }}
              className={`group relative overflow-hidden bg-neutral-800 block cursor-pointer break-inside-avoid ${project.size === "large" ? "aspect-[3/4]" : "aspect-[4/3]"}`}
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
            </motion.a>
          ))}
        </div>

        <div className="mt-16 text-center">
          <ChromaButton>
            View All Work
          </ChromaButton>
        </div>
      </div>
    </section>
  );
};

export default Projects;
