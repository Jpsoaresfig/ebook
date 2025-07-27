import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Preciso de dinheiro para começar?",
    answer: "Definitivamente não! Todos os 10 métodos apresentados neste guia não exigem investimento inicial. Você pode começar com seu celular e conexão com a internet. Escolhemos métodos acessíveis para quem está começando do zero."
  },
  {
    question: "Em quanto tempo verei resultados?",
    answer: "Muitas pessoas começam a ganhar em 24-48 horas. Métodos como tarefas por aplicativo e microtarefas podem gerar renda já no mesmo dia. O segredo é agir assim que terminar de ler o guia."
  },
  {
    question: "Consigo fazer tudo apenas com meu celular?",
    answer: "Sim! Todos os métodos foram pensados para funcionar apenas com um smartphone. Você não precisa de computador, equipamentos caros ou conhecimentos técnicos. Se você usa WhatsApp, consegue aplicar esses métodos."
  },
  {
    question: "É legal e seguro?",
    answer: "Com certeza! Todos os métodos são 100% legais e confiáveis. Selecionamos apenas estratégias comprovadas, utilizadas por milhares de pessoas. Nada de esquemas milagrosos ou investimentos arriscados."
  },
  {
    question: "Quanto posso ganhar de verdade?",
    answer: "Os ganhos variam conforme seu esforço e os métodos escolhidos. Iniciantes costumam ganhar de R$ 50 a R$ 200 por dia. Com dedicação e mais de um método, é possível ultrapassar R$ 1.000 a R$ 5.000 por mês."
  },
  {
    question: "Preciso ter experiência ou habilidades especiais?",
    answer: "Não! O guia foi feito para iniciantes. Cada método é explicado passo a passo, com dicas práticas e alertas sobre erros comuns. Qualquer pessoa pode começar do zero."
  },
  {
    question: "E se eu tiver dúvidas depois da compra?",
    answer: "Você terá acesso à nossa comunidade de suporte, onde poderá tirar dúvidas e trocar experiências. Além disso, o guia tem seções específicas para solucionar dúvidas frequentes."
  },
  {
    question: "Tem garantia de reembolso?",
    answer: "Sim! Você tem 7 dias de garantia total. Se não ficar satisfeito por qualquer motivo, é só pedir o reembolso. Sem perguntas e sem complicações."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-600">
            Tudo o que você precisa saber antes de começar
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md border border-gray-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-blue-600 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Ainda tem dúvidas? Fale com a gente!
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
            Quero Começar Agora!
          </button>
        </div>
      </div>
    </section>
  );
}
