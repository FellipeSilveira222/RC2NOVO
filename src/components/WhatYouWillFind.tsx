import React from 'react';
import { motion } from 'framer-motion';
import { Bot as Bottle, ClipboardList, Apple, RotateCcw, UserCheck, DollarSign, BookOpen } from 'lucide-react';

const WhatYouWillFind: React.FC = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Guia 100% natural com protocolo de 30 dias"
    },
    {
      icon: Bottle,
      title: "Rotina capilar completa"
    },
    {
      icon: ClipboardList,
      title: "Protocolo prático de 30 dias que ajudou mais de 15 mil homens"
    },
    {
      icon: Apple,
      title: "Alimentos, suplementos e produtos certos"
    },
    {
      icon: RotateCcw,
      title: "Hábitos que sabotam (e os que potencializam) o crescimento"
    },
    {
      icon: UserCheck,
      title: "Atendimento individual com profissionais da saúde"
    },
    {
      icon: DollarSign,
      title: "Cancele quando quiser — Garantia de 7 dias"
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
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Você irá encontrar
          </motion.h2>
        </motion.div>

        <motion.div 
          className="flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center justify-center text-center w-[200px] sm:w-[220px] lg:w-[240px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-7 h-7 text-[#3f5c4f] mb-4" />
                <h3 className="text-base font-semibold text-gray-900">
                  {feature.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default WhatYouWillFind;