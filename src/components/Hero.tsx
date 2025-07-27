import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-indigo-700 text-white py-28 px-6 text-center relative overflow-hidden">
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-400 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>
      <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-indigo-400 opacity-20 rounded-full filter blur-3xl animate-pulse"></div>

      <div className="max-w-3xl mx-auto relative z-10">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          <span className="text-yellow-400">O Guia Nº 1</span> Para Quem Quer{" "}
          <span className="underline decoration-yellow-400">Ganhar Dinheiro</span> Ainda Hoje!
        </h1>

        <p className="text-lg md:text-xl mb-8 text-blue-100 font-medium">
          Descubra o <strong className="text-yellow-300">eBook S.O.S Renda Rápida</strong>, com 10 métodos testados e comprovados para faturar online ainda hoje usando apenas seu celular e disposição!
        </p>

        <ul className="text-left text-blue-100 text-base md:text-lg mb-10 list-disc list-inside space-y-3 px-4 md:px-8">
          <li>✅ Comece mesmo sem experiência</li>
          <li>✅ Ganhe usando apenas seu celular</li>
          <li>✅ 10 formas reais de fazer dinheiro</li>
          <li>✅ Ferramentas prontas para aplicar</li>
          <li>✅ Conteúdo direto, prático</li>
          <li>✅ Ideal para quem quer renda extra </li>
          <li>✅ 7 dias para aplicar os métodos</li>
        </ul>

        <p className="text-yellow-300 font-bold mb-6 text-lg md:text-xl animate-bounce">
          Aplique hoje e veja resultados ainda essa semana!
        </p>

        <a
          href="https://pay.kiwify.com.br/LqqZdyP"
          className="inline-block bg-yellow-400 text-gray-900 font-bold px-10 py-4 rounded-full shadow-lg hover:bg-yellow-300 transition-all transform hover:scale-105 hover:shadow-2xl animate-pulse"
        >
          SIM! EU QUERO COMEÇAR A FATURAR AGORA
        </a>
      </div>
    </section>
  );
};

export default Hero;
