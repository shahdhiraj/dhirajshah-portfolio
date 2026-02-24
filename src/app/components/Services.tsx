import { motion } from "motion/react";
import { PenTool, Layout, Layers, TrendingUp, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "Brand Identity & Strategy",
    description: "Building memorable brands with comprehensive guidelines, visual languages, and strategic positioning."
  },
  {
    icon: <Layout className="w-8 h-8" />,
    title: "UI/UX & Design Systems",
    description: "Creating scalable design libraries and intuitive user interfaces that streamline development and enhance usability."
  },
  {
    icon: <Layers className="w-8 h-8" />,
    title: "Creative Direction",
    description: "Guiding visual narratives across all touchpoints to ensure consistency and premium quality execution."
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Performance & Growth",
    description: "Data-driven design optimizations focused on increasing engagement, retention, and conversion rates."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 md:py-32 bg-neutral-50">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 mb-16">
          <div className="md:col-span-4">
            <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-500">Services</h2>
          </div>
          <div className="md:col-span-8">
            <h3 className="text-3xl md:text-4xl font-medium text-neutral-900">
              Comprehensive design solutions for ambitious brands.
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-white p-8 group hover:bg-neutral-900 hover:text-white transition-all duration-300 border border-neutral-100 hover:border-neutral-900 flex flex-col justify-between min-h-[320px]"
            >
              <div>
                <div className="text-neutral-900 group-hover:text-white mb-6 transition-colors">
                  {service.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{service.title}</h4>
                <p className="text-neutral-500 group-hover:text-neutral-300 leading-relaxed text-sm transition-colors">
                  {service.description}
                </p>
              </div>
              
              <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
                <ArrowUpRight size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
