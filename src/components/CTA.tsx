import React from "react";
import { ArrowRight } from "lucide-react";

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-400 py-12 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Comece a transformar sua vida financeira hoje
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Aprenda métodos testados, práticos e 100% aplicáveis que já ajudaram milhares de pessoas a faturar online.
        </p>
        <a
          href="#"
          className="inline-flex items-center bg-white text-green-600 font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-gray-100 transition"
        >
          Acessar Agora
          <ArrowRight className="ml-2 w-5 h-5" />
        </a>
      </div>
    </section>
  );
};

export default CTA;
