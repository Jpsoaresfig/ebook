import React from 'react';
import { Mail, Shield, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-4">Sobre o Autor</h3>
            <p className="text-gray-300 leading-relaxed">
              <strong>Loje Pay</strong> é uma empresa digital que já ajudou milhares de pessoas a começarem a ganhar dinheiro online. Seu estilo direto ao ponto foca em métodos que realmente funcionam para pessoas reais.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Nossa Garantia</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Shield className="w-6 h-6 text-green-400 mr-3" aria-hidden="true" />
                <span className="text-gray-300">Garantia de 7 dias</span>
              </li>
              <li className="flex items-center">
                <Clock className="w-6 h-6 text-green-400 mr-3" aria-hidden="true" />
                <span className="text-gray-300">Entrega digital imediata</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-6 h-6 text-green-400 mr-3" aria-hidden="true" />
                <span className="text-gray-300">Suporte ao cliente 24/7</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Confiança & Qualidade</h3>
            <p className="text-gray-300 leading-relaxed mb-4">
              Nosso lema: <strong className="text-yellow-400">"Confiança, Qualidade e Resultados"</strong>
            </p>
            <p className="text-sm text-gray-400">
              Todos os métodos foram testados, são legais e comprovadamente eficazes. Compartilhamos apenas estratégias que realmente geram resultado para pessoas comuns.
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 João Pedro. Todos os direitos reservados.{' '}
            <span className="ml-2">Este produto conta com garantia de 7 dias</span>
          </p>
          <p className="text-gray-500 text-[7px] italic mt-2 max-w-xl mx-auto leading-relaxed opacity-60">
            Os resultados podem variar. O sucesso depende do esforço individual e da aplicação dos métodos apresentados (não garantimos resultados sem dedicação).
          </p>
          <p className="text-gray-500 text-[7px] italic mt-4 max-w-xl mx-auto leading-relaxed opacity-60">
            Este produto é apenas para fins educativos e informativos. Não oferecemos consultoria financeira, médica ou profissional.  
            Garantia de 7 dias para direito de arrependimento.  
            Todos os métodos requerem esforço e dedicação para resultados.  
            O conteúdo é baseado em experiências e não garante sucesso.  
            Respeite os termos de uso e direitos autorais.
          </p>
        </div>
      </div>
    </footer>
  );
}
