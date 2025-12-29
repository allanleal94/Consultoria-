import React from 'react';
import { Activity, Apple, Users, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section className="py-20 bg-zinc-900/50 border-t border-zinc-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          <div className="order-2 md:order-1 relative">
            <div className="absolute -inset-4 bg-primary/20 rounded-2xl blur-xl"></div>
            <img 
              src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
              alt="Personal Trainer orientando aluno na academia" 
              className="relative rounded-2xl shadow-2xl w-full object-cover aspect-square border border-zinc-700 grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>

          <div className="order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Resultados Reais Com Método Comprovado
            </h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              Chega de treinos genéricos que não funcionam. Meu trabalho é entender a sua rotina, suas dificuldades e seus objetivos para traçar o melhor caminho para o seu sucesso.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-primary">
                  <Activity size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Treinos Personalizados</h3>
                  <p className="text-zinc-400">Exercícios selecionados especificamente para o seu nível e objetivo.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-primary">
                  <Apple size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Dietas Flexíveis</h3>
                  <p className="text-zinc-400">Plano alimentar adaptado à sua rotina, sem passar fome.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-zinc-800 p-3 rounded-lg text-primary">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Acompanhamento Diário</h3>
                  <p className="text-zinc-400">Suporte e orientação constante para manter sua disciplina.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;