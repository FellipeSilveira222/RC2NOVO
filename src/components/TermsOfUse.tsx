import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfUse: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link 
            to="/"
            className="inline-flex items-center text-[#3f5c4f] hover:text-[#2d4238] mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Voltar ao site
          </Link>
          
          <motion.h1 
            className="text-4xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Termos de Uso
          </motion.h1>
          
          <motion.div 
            className="bg-white rounded-lg shadow-lg p-8 prose prose-lg max-w-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-sm text-gray-500 mb-6">
              Última atualização: Julho de 2025
            </p>
            
            <p className="text-gray-700 leading-relaxed mb-6">
              Bem-vindo ao nosso site. Ao acessar ou usar este site e/ou adquirir nossos produtos e serviços, você concorda em cumprir e estar vinculado aos seguintes Termos de Uso. Caso você não concorde com estes termos, recomendamos que não utilize este site.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">1. Definições</h3>
                <p className="text-gray-700 leading-relaxed">
                  Neste documento, os termos "nós", "nosso(a)" ou "empresa" referem-se à equipe responsável por este site e produto.
                  "Usuário" ou "você" refere-se a qualquer pessoa que acesse ou use este site e seus serviços.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">2. Objeto</h3>
                <p className="text-gray-700 leading-relaxed">
                  Estes Termos de Uso regulam o uso do site, o acesso a conteúdos gratuitos e pagos, bem como a aquisição de produtos digitais, incluindo e-books, vídeos, protocolos ou qualquer outro material disponibilizado.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">3. Conteúdo e Propriedade Intelectual</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Todo o conteúdo deste site, incluindo textos, imagens, vídeos, nomes, marcas, logotipos, gráficos e arquivos disponibilizados são de propriedade exclusiva da empresa, sendo protegidos pelas leis de direitos autorais e propriedade intelectual.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  É expressamente proibido copiar, reproduzir, distribuir, publicar ou transmitir qualquer conteúdo deste site sem autorização por escrito.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">4. Uso Pessoal e Intransferível</h3>
                <p className="text-gray-700 leading-relaxed">
                  O acesso ao conteúdo adquirido é individual e intransferível. É proibido o compartilhamento de login, download não autorizado, redistribuição ou revenda do conteúdo. O descumprimento pode resultar em bloqueio de acesso sem reembolso.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">5. Garantia e Reembolso</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Nossos produtos digitais podem oferecer garantia de satisfação de até 7 dias, conforme previsto no Código de Defesa do Consumidor. Após este prazo, não será possível solicitar reembolso.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Para solicitar o reembolso dentro do prazo, o cliente deve entrar em contato pelos canais de suporte fornecidos no momento da compra.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">6. Limitação de Responsabilidade</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Os conteúdos têm caráter educacional e informativo. Embora sejam baseados em práticas testadas, não constituem aconselhamento médico, e os resultados podem variar de pessoa para pessoa.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  A empresa não se responsabiliza por qualquer efeito adverso ou resultado indesejado decorrente da aplicação das informações disponibilizadas. Sempre consulte um profissional de saúde qualificado.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">7. Modificações dos Termos</h3>
                <p className="text-gray-700 leading-relaxed">
                  Reservamo-nos o direito de modificar, atualizar ou alterar estes Termos de Uso a qualquer momento, sem aviso prévio. É responsabilidade do usuário revisá-los periodicamente. A continuação do uso do site após as alterações constitui aceitação dos novos termos.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">8. Links para Terceiros</h3>
                <p className="text-gray-700 leading-relaxed">
                  Este site pode conter links para páginas externas, como plataformas de pagamento, WhatsApp, entre outras. Não nos responsabilizamos por conteúdos, práticas ou políticas de privacidade desses sites terceiros.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">9. Política de Privacidade</h3>
                <p className="text-gray-700 leading-relaxed">
                  O tratamento de dados pessoais está descrito em nossa Política de Privacidade, disponível no rodapé deste site.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">10. Legislação Aplicável</h3>
                <p className="text-gray-700 leading-relaxed">
                  Este Termo é regido pela legislação brasileira, em especial a Lei Geral de Proteção de Dados (LGPD). Quaisquer conflitos serão resolvidos no foro da comarca da cidade do titular da empresa responsável.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">11. Contato</h3>
                <p className="text-gray-700 leading-relaxed mb-2">
                  Em caso de dúvidas, solicitações ou reclamações, entre em contato através do WhatsApp oficial:
                </p>
              <p className="text-gray-700 leading-relaxed">
                <strong>Uso pessoal</strong> – conteúdo exclusivo do comprador.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                  📲 <a href="https://wa.me/message/AECKACT3GUQ2F1" target="_blank" rel="noopener noreferrer" className="text-[#3f5c4f] hover:underline">https://wa.me/message/AECKACT3GUQ2F1</a>
              </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfUse;