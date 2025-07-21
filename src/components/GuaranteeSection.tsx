import React from 'react';
import { motion } from 'framer-motion';
import { Shield, RefreshCw, Clock, CheckCircle } from 'lucide-react';

const GuaranteeSection: React.FC = () => {
  const guarantees = [
    {
      icon: Shield,
      title: "Garantia de 7 dias",
      description: "Se não ficar satisfeito, devolvemos 100% do seu dinheiro"
    },
    {
      icon: RefreshCw,
      title: "Reembolso total",
      description: "Processo simples e rápido, sem burocracias"
    },
    {
      icon: Clock,
      title: "Suporte 24/7",
      description: "Atendimento especializado sempre que precisar"
    },
    {
      icon: CheckCircle,
      title: "Sem riscos",
      description: "Teste o protocolo com total segurança"
    }
  ];

  return (
    <section className="py-16 bg-[#3f5c4f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Sua satisfação é garantida
          </motion.h2>
          <motion.p 
            className="text-xl text-green-100"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experimente sem riscos por 7 dias completos
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <motion.div 
                key={index} 
                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-12 h-12 text-white mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2">{guarantee.title}</h3>
                <p className="text-green-100 text-sm">{guarantee.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.a 
            href="https://pay.kirvano.com/f6d3ddf1-b6c0-4f47-8c9c-e50f287fde14"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white hover:bg-gray-100 text-[#3f5c4f] font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-pulse-border"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="hidden sm:inline">COMEÇAR AGORA - GARANTIA DE 7 DIAS</span>
            <span className="sm:hidden">RECUPERAR MEU CABELO</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default GuaranteeSection;