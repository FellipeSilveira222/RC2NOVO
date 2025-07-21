import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Award, CheckCircle2 } from 'lucide-react';

const Footer: React.FC = () => {
  const seals = [
    {
      icon: Shield,
      title: "Pagamento Seguro",
      subtitle: "SSL 256 bits"
    },
    {
      icon: Lock,
      title: "Dados Protegidos",
      subtitle: "LGPD Compliance"
    },
    {
      icon: Award,
      title: "Qualidade Garantida",
      subtitle: "Protocolo Testado"
    },
    {
      icon: CheckCircle2,
      title: "Satisfação",
      subtitle: "15.000+ Clientes"
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Security Seals */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {seals.map((seal, index) => {
            const Icon = seal.icon;
            return (
              <motion.div 
                key={index} 
                className="flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Icon className="w-12 h-12 text-green-400 mb-3" />
                <h3 className="font-semibold text-white mb-1">{seal.title}</h3>
                <p className="text-gray-400 text-sm">{seal.subtitle}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <motion.div 
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.h3 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              Reconquista Capilar
            </motion.h3>
            <motion.p 
              className="text-gray-400 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              Protocolo natural e científico para recuperação capilar. Mais de 15.000 homens já transformaram suas vidas.
            </motion.p>
            
            {/* Legal Info */}
            <motion.div 
              className="space-y-2 text-sm text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <p>© 2024 Reconquista Capilar. Todos os direitos reservados.</p>
              <p>Este produto não substitui orientação médica profissional.</p>
              <p>Resultados podem variar de pessoa para pessoa.</p>
              
              {/* Legal Links */}
              <div className="flex justify-center gap-6 mt-4 pt-4 border-t border-gray-700">
                <Link 
                  to="/privacy-policy"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Política de Privacidade
                </Link>
                <Link 
                  to="/terms-of-use"
                  className="text-gray-400 hover:text-white transition-colors text-sm"
                >
                  Termos de Uso
                </Link>
              </div>
            </motion.div>

            {/* Final CTA */}
            <motion.div 
              className="mt-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <motion.a 
                href="https://pay.kirvano.com/f6d3ddf1-b6c0-4f47-8c9c-e50f287fde14"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#3f5c4f] hover:bg-[#2d4238] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 animate-pulse-border"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="hidden sm:inline">RECUPERAR MEU CABELO AGORA</span>
                <span className="sm:hidden">RECUPERAR MEU CABELO</span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;