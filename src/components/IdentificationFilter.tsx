import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, Bath, Camera, Scissors, TrendingDown } from 'lucide-react';

const IdentificationFilter: React.FC = () => {
  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const situations = [
    { icon: Eye, text: "Percebeu que a entrada aumentou nos últimos meses?" },
    { icon: Bath, text: "Notou mais fios no travesseiro ou no ralo?" },
    { icon: Camera, text: "Evita tirar fotos por vergonha da calvície?" },
    { icon: Scissors, text: "Já pensou em transplante, mas achou caro demais?" },
    { icon: TrendingDown, text: "Sua autoestima caiu por causa da perda capilar?" }
  ];

  const toggleSelection = (index: number) => {
    setSelectedItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-white">
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
            Você se identifica com alguma dessas situações?
          </motion.h2>
        </motion.div>
        
        <motion.div 
          className="space-y-4 mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {situations.map((situation, index) => {
            const Icon = situation.icon;
            const isSelected = selectedItems.includes(index);
            
            return (
              <motion.div
                key={index}
                onClick={() => toggleSelection(index)}
                className={`flex items-center p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? 'border-[#3f5c4f] bg-[#3f5c4f]/5' 
                    : 'border-gray-200 hover:border-[#3f5c4f]/50'
                }`}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Icon className={`w-6 h-6 mr-4 ${isSelected ? 'text-[#3f5c4f]' : 'text-gray-400'}`} />
                <span className="text-lg text-gray-700">{situation.text}</span>
              </motion.div>
            );
          })}
        </motion.div>
        
        {selectedItems.length > 0 && (
          <motion.div 
            className="text-center p-6 bg-[#3f5c4f]/10 rounded-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <motion.p 
              className="text-lg font-semibold text-[#3f5c4f]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Se respondeu sim para pelo menos 1, esse protocolo foi feito pra você.
            </motion.p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default IdentificationFilter;