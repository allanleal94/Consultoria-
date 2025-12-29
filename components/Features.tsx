import React from 'react';
import { CheckCircle2, Phone, Zap, Star } from 'lucide-react';
import { FeatureCardProps } from '../types';

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon }) => (
  <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-xl hover:border-primary/50 transition-colors group">
    <div className="mb-4 text-zinc-400 group-hover:text-primary transition-colors">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">
      {description}
    </p>
  </div>
);

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-dark">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Por Que Escolher Minha Consultoria?</h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Tudo o que você precisa para atingir seus objetivos, simplificado em um único lugar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard 
            icon={<CheckCircle2 size={40} />}
            title="Plano Feito Para Você"
            description="Nada de copiar e colar. Seu treino é montado 100% com base nas suas necessidades."
          />
          <FeatureCard 
            icon={<Zap size={40} />}
            title="Método Simples"
            description="Foco no básico que funciona. Resultados consistentes sem invencionices."
          />
          <FeatureCard 
            icon={<Phone size={40} />}
            title="Suporte WhatsApp"
            description="Tire dúvidas sobre execução e dieta diretamente comigo pelo WhatsApp."
          />
          <FeatureCard 
            icon={<Star size={40} />}
            title="Para Todos os Níveis"
            description="Ideal tanto para quem nunca pisou na academia quanto para quem já treina há anos."
          />
        </div>
      </div>
    </section>
  );
};

export default Features;