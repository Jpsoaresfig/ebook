
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Maria Silva",
    age: 28,
    location: "São Paulo, SP",
    image: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    story: "Estava desempregada e insegura. Após seguir o método #2 e divulgar nas redes sociais, consegui vender R$ 200 em produtos na primeira semana. Hoje faço uma média de R$ 800 por mês nas horas vagas.",
    earnings: "R$ 800/mês (extra)",
    timeframe: "Primeira semana"
  },
  {
    name: "Carlos Mendes",
    age: 27,
    location: "Rio de Janeiro, RJ",
    image: "https://images.pexels.com/photos/709188/pexels-photo-709188.jpeg",
    story: "Sou estudante e sempre busquei algo rápido e sem investimento. O método #5 me ajudou a ganhar R$ 30 por dia fazendo microtarefas. Uso esse dinheiro para ajudar nas despesas da faculdade.",
    earnings: "R$ 30/dia",
    timeframe: "2 dias depois"
  },
  {
    name: "Ana Costa",
    age: 38,
    location: "Belo Horizonte, MG",
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
    story: "Depois de ser demitida, encontrei neste guia a motivação que precisava. Com o método #1 e o #4, comecei a oferecer serviços de digitação e organização de arquivos. Já fiz mais de R$ 1.200 em dois meses.",
    earnings: "R$ 1.200 em 2 meses",
    timeframe: "Comecei na 1ª semana"
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pessoas Reais, Resultados Reais
          </h2>
          <p className="text-xl text-gray-600">
            Veja como esse guia transformou a vida de quem decidiu dar o primeiro passo
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 shadow-lg border border-blue-100 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-blue-200" />
              
              <div className="flex items-center mb-6">
                <img 
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.age} anos • {testimonial.location}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.story}"
              </p>
              
              <div className="border-t border-blue-100 pt-4">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Ganhos</p>
                    <p className="font-bold text-green-600">{testimonial.earnings}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-gray-600">Início</p>
                    <p className="font-bold text-blue-600">{testimonial.timeframe}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Faça parte de quem está lucrando com métodos simples e acessíveis
          </p>
          <button className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold text-lg px-8 py-4 rounded-lg shadow-lg transform hover:scale-105 transition-all duration-200">
            Quero Resultados Também!
          </button>
        </div>
      </div>
    </section>
  );
}
