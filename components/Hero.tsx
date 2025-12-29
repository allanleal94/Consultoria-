import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
          alt="Homem e mulher com físico atlético na academia" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark hero-gradient"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-bold tracking-wider mb-6 uppercase">
          Consultoria Online
        </span>
        
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Transforme Seu Corpo Com <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-green-300">Treino e Dieta</span> Personalizados
        </h1>
        
        <p className="text-lg md:text-2xl text-zinc-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          Acompanhamento individual para quem quer ganhar massa muscular ou perder peso de forma eficiente e saudável.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#contato" 
            className="group bg-primary hover:bg-secondary text-darker font-bold text-lg py-4 px-8 rounded-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(34,197,94,0.4)]"
          >
            Quero Meu Plano Personalizado
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;