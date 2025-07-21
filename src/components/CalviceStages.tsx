import React from 'react';
import { motion } from 'framer-motion';
import { Circle } from 'lucide-react';

const CalviceStages: React.FC = () => {
  const stages = [
    {
      stage: "Estágio 1",
      description: "Queda leve, entradas discretas",
      color: "bg-yellow-500",
      textColor: "text-yellow-700"
    },
    {
      stage: "Estágio 2", 
      description: "Entradas profundas, rarefação no topo",
      color: "bg-orange-500",
      textColor: "text-orange-700"
    },
    {
      stage: "Estágio 3",
      description: "Região da coroa praticamente sem fios",
      color: "bg-red-500",
      textColor: "text-red-700"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Em que estágio da calvície você está?
          </motion.h2>
          <motion.div 
            className="mt-8"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.img 
              src="/assets/Design sem nome (3).png"
              alt="Estágios da calvície"
              className="w-full max-w-2xl h-auto object-contain mx-auto"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="grid md:grid-cols-3 gap-6 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {stages.map((stage, index) => (
            <motion.div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center mb-4">
                <Circle className={`w-6 h-6 mr-3 ${stage.color} rounded-full`} fill="currentColor" />
                <h3 className={`text-xl font-bold ${stage.textColor}`}>{stage.stage}</h3>
              </div>
              <p className="text-gray-600">{stage.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="text-center p-6 bg-[#3f5c4f]/10 rounded-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.p 
            className="text-lg font-semibold text-[#3f5c4f]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            Todos os estágios são compatíveis com o protocolo — mas o quanto antes começar, melhores os resultados.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CalviceStages;