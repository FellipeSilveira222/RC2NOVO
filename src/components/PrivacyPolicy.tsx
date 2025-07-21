import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

+const PrivacyPolicy: React.FC = () => {
+  return (
+    <div className="min-h-screen bg-gray-50 py-16">
+      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
+        <motion.div
+          initial={{ opacity: 0, y: 30 }}
+          animate={{ opacity: 1, y: 0 }}
+          transition={{ duration: 0.8 }}
+        >
+          <Link 
+            to="/"
+            className="inline-flex items-center text-[#3f5c4f] hover:text-[#2d4238] mb-8 transition-colors"
+          >
+            <ArrowLeft className="w-4 h-4 mr-2" />
+            Voltar ao site
+          </Link>
+          
+          <motion.h1 
+            className="text-4xl font-bold text-gray-900 mb-8"
+            initial={{ opacity: 0, y: 20 }}
+            animate={{ opacity: 1, y: 0 }}
+            transition={{ duration: 0.8, delay: 0.2 }}
+          >
+            Política de Privacidade
+          </motion.h1>
+          
+          <motion.div 
+            className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none"
+            initial={{ opacity: 0, y: 20 }}
+            animate={{ opacity: 1, y: 0 }}
+            transition={{ duration: 0.8, delay: 0.4 }}
+          >
+            <p className="text-gray-700 leading-relaxed mb-6">
+              Sua privacidade é importante para nós. É política deste site respeitar a sua privacidade em relação a qualquer informação que possamos coletar.
+            </p>
+            
+            <p className="text-gray-700 leading-relaxed mb-6">
+              Coletamos nome, e-mail, telefone (quando fornecidos voluntariamente), dados de navegação (cookies e IP).
+            </p>
+            
+            <p className="text-gray-700 leading-relaxed mb-6">
+              As informações são usadas para garantir seu acesso ao conteúdo, suporte e comunicações.
+            </p>
+            
+            <p className="text-gray-700 leading-relaxed mb-6">
+              Seus dados são protegidos e jamais vendidos ou repassados a terceiros.
+            </p>
+            
+            <p className="text-gray-700 leading-relaxed">
+              Ao continuar navegando, você concorda com esta política.
+            </p>
+          </motion.div>
+        </motion.div>
+      </div>
+    </div>
+  );
+};
+
+export default PrivacyPolicy;