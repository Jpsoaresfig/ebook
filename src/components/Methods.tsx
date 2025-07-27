import React from "react";
import {
  Smartphone,
  Share2,
  ShoppingBag,
  Users,
  Briefcase,
  Camera,
} from "lucide-react";

const methods = [
  {
    icon: Smartphone,
    title: "Comece com o que você tem",
    description:
      "Descubra por que agir hoje mesmo é essencial e como o seu celular pode se tornar uma verdadeira ferramenta de renda.",
  },
  {
    icon: Share2,
    title: "Programas de Afiliados",
    description:
      "Aprenda o que são afiliados, como escolher produtos lucrativos e as melhores estratégias de divulgação nas redes sociais.",
  },
  {
    icon: ShoppingBag,
    title: "Venda de Produtos Usados",
    description:
      "Saiba onde vender itens usados, como tirar fotos atrativas e criar descrições que realmente vendem.",
  },
  {
    icon: Users,
    title: "Oferecendo Serviços Locais",
    description:
      "Descubra serviços simples que você pode oferecer em sua vizinhança e como conquistar clientes satisfeitos.",
  },
  {
    icon: Briefcase,
    title: "Freelancer e Microtarefas",
    description:
      "Conheça as plataformas para iniciantes, monte um portfólio e defina preços competitivos pelos seus serviços.",
  },
  {
    icon: Camera,
    title: "Criação de Conteúdo",
    description:
      "Gere renda criando vídeos curtos, oferecendo gestão de redes sociais ou testando aplicativos e respondendo pesquisas.",
  },
];

export default function Methods() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            6 Formas Práticas de Ganhar Dinheiro Ainda Hoje
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Todas as estratégias foram pensadas para iniciantes, com explicações
            passo a passo, dicas práticas e plataformas que funcionam de
            verdade.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {methods.map((method, index) => {
            const IconComponent = method.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition duration-300 border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <IconComponent className="w-6 h-6 text-blue-600" />
                  </div>
                  <span className="bg-yellow-400 text-blue-900 text-sm font-bold px-3 py-1 rounded-full">
                    #{index + 1}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {method.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {method.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition duration-200"
          >
            Baixar o eBook Agora
          </button>
        </div>
      </div>
    </section>
  );
}
