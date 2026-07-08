import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import lifestyleImages from "./lifestyleImages.json";

const LifestyleSlider = () => {
  // Duplicate the images array to create a seamless infinite loop
  const duplicatedImages = [...lifestyleImages, ...lifestyleImages];
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="w-full bg-neutral-900 py-16 overflow-hidden relative border-t border-neutral-800">
        <div className="container mx-auto px-6 max-w-6xl relative z-10 mb-12">
          <h2 className="text-sm font-semibold tracking-widest uppercase text-neutral-400 mb-4">Lifestyle</h2>
          <div className="w-12 h-1 bg-white rounded-full mb-8" />
          <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight text-white">
            Discover our latest <br /> <span className="text-neutral-400">lifestyle moments.</span>
          </h3>
        </div>
        
        {/* Top and Bottom faded edges for a premium look */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-neutral-900 to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-neutral-900 to-transparent z-10 pointer-events-none" />

        <div className="flex w-[200vw] sm:w-[150vw] md:w-[100vw] lg:w-[max-content]">
          <motion.div
            className="flex gap-6 px-4"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 180, // Slower speed
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(`/Lifestyle/${image}`)}
                className="relative w-[240px] h-[360px] md:w-[320px] md:h-[480px] flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer"
              >
                <img
                  src={`/Lifestyle/${image}`}
                  alt={`Lifestyle ${index}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <span className="text-white text-sm tracking-widest uppercase bg-black/50 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-neutral-300 transition-colors bg-black/50 p-2 rounded-full backdrop-blur-sm"
              onClick={() => setSelectedImage(null)}
            >
              <X size={24} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              src={selectedImage}
              alt="Full view"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the image itself
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LifestyleSlider;
