import React from 'react';
import { Shield, CheckCircle, Clock } from 'lucide-react';

export default function Guarantee() {
  return (
    <section className="py-20 bg-gradient-to-r from-green-50 to-blue-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border-2 border-green-200">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full">
              <Shield className="w-12 h-12 text-green-600" />
            </div>
          </div>

          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
            Garantia de Satisfação 100%
          </h2>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Estamos tão confiantes de que este guia vai te ajudar a começar a ganhar dinheiro, que oferecemos uma 
            <span className="font-bold text-green-600"> garantia total de 7 dias</span>. 
            Se você não tiver resultados, devolvemos seu dinheiro. Sem burocracia.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="flex flex-col items-center">
              <CheckCircle className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Teste Sem Risco</h3>
              <p className="text-sm text-gray-600">7 dias para aplicar todos os métodos</p>
            </div>
            <div className="flex flex-col items-center">
              <Clock className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Reembolso Rápido</h3>
              <p className="text-sm text-gray-600">Devolução em até 24h após o pedido</p>
            </div>
            <div className="flex flex-col items-center">
              <Shield className="w-8 h-8 text-green-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Sem Perguntas</h3>
              <p className="text-sm text-gray-600">Processo simples e direto</p>
            </div>
          </div>

          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
            <p className="text-green-800 font-medium">
              <strong>Nosso Compromisso:</strong> Se você não recuperar ao menos o valor investido neste guia em até 7 dias, devolvemos cada centavo. É assim que acreditamos nesses métodos.
            </p>
          </div>

          <button className="bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
            Comece a Ganhar Sem Risco Hoje!
          </button>
        </div>
      </div>
    </section>
  );
}
