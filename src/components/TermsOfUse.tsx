import React from 'react';
+import { motion } from 'framer-motion';
+import { ArrowLeft } from 'lucide-react';
+import { Link } from 'react-router-dom';
+
+const TermsOfUse: React.FC = () => {
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
+            Termos de Uso
+          </motion.h1>
+          
+          <motion.div 
+            className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none"
+            initial={{ opacity: 0, y: 20 }}
+            animate={{ opacity: 1, y: 0 }}
+            transition={{ duration: 0.8, delay: 0.4 }}
+          >
+            <p className="text-gray-700 leading-relaxed mb-6">
+              Ao acessar este site ou adquirir nossos produtos digitais, você concorda com os seguintes termos:
+            </p>
+            
+            <div className="space-y-4">
+              <p className="text-gray-700 leading-relaxed">
+                <strong>Uso pessoal</strong> – conteúdo exclusivo do comprador.
+              </p>
+              
+              <p className="text-gray-700 leading-relaxed">
+                <strong>Garantia</strong> – reembolso conforme prazos legais.
+              </p>
+              
+              <p className="text-gray-700 leading-relaxed">
+                <strong>Resultados</strong> – variam de pessoa para pessoa, sem promessas.
+              </p>
+              
+              <p className="text-gray-700 leading-relaxed">
+                <strong>Responsabilidade</strong> – recomenda-se consultar um profissional de saúde antes de seguir qualquer orientação.
+              </p>
+              
+              <p className="text-gray-700 leading-relaxed">
+                <strong>Alterações</strong> – os termos podem mudar sem aviso prévio.
+              </p>
+            </div>
+          </motion.div>
+        </motion.div>
+      </div>
+    </div>
+  );
+};
+
+export default TermsOfUse;