import React from 'react';
import { motion } from 'framer-motion';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Seu cabelo pode voltar a <span className="text-[#3f5c4f]">crescer</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl text-gray-600 leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Você não clicou aqui por acaso. Tem dois caminhos a partir daqui: encarar o espelho com orgulho ou com arrependimento.
            </motion.p>
            <motion.a 
              href="https://pay.kirvano.com/35919e34-a71f-448d-9b0b-fa8c86e060be"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#3f5c4f] hover:bg-[#2d4238] text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-border"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="hidden sm:inline">RECUPERAR MEU CABELO AGORA</span>
              <span className="sm:hidden">RECUPERAR MEU CABELO</span>
            </motion.a>
          </motion.div>
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src="/assets/86s6YabMVxBWTODSW4UJymsHXmjhZnchQSNwSEw7.jpeg" 
              alt="Homem com cabelo recuperado" 
              className="rounded-2xl shadow-2xl max-w-md w-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;