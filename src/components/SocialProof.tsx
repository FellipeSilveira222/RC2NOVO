import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Users, Star } from 'lucide-react';

const SocialProof: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const carouselImages = [
    "/assets/1 copy.png",
    "/assets/2 copy.png", 
    "/assets/3 copy.png"
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const stats = [
    { icon: Users, value: "15.000+", label: "Homens" },
    { icon: Star, value: "4.9/5", label: "média de avaliação" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Mais de 15.000 homens já transformaram suas vidas
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Resultados reais, comprovados cientificamente.
          </motion.p>
        </motion.div>

        {/* Image Carousel */}
        <motion.div 
          className="relative mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex items-center justify-center">
            <button 
              onClick={prevSlide}
              className="absolute left-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            
            <div className="flex items-center justify-center">
              <img 
                src={carouselImages[currentSlide]}
                alt={`Resultado ${currentSlide + 1}`}
                className="max-w-md w-full h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
            
            <button 
              onClick={nextSlide}
              className="absolute right-0 z-10 p-2 rounded-full bg-white shadow-lg hover:bg-gray-50 transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex justify-center mt-6 gap-2">
            {carouselImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-[#3f5c4f]' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="flex justify-center gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div 
                key={index} 
                className="flex items-center gap-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Icon className="w-8 h-8 text-[#3f5c4f]" />
                <div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default SocialProof;