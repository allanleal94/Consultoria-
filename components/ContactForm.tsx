import React, { useState } from 'react';
import { Send, Smartphone } from 'lucide-react';
import { LeadFormData } from '../types';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    age: '',
    height: '',
    weight: '',
    goal: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `Olá! Quero iniciar um acompanhamento fitness.
Nome: ${formData.name}
Idade: ${formData.age}
Altura: ${formData.height}
Peso: ${formData.weight}
Objetivo: ${formData.goal === 'ganhar_massa' ? 'Ganhar Massa Muscular' : 'Perder Peso'}
Celular: ${formData.phone}`;

    const encodedText = encodeURIComponent(text);
    // Target number: 5511995918326
    const whatsappUrl = `https://wa.me/5511995918326?text=${encodedText}`;

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contato" className="py-24 relative overflow-hidden bg-zinc-900">
        
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>

        <div className="max-w-xl mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <span className="text-primary font-bold uppercase tracking-widest text-sm">Comece Hoje</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">Preencha e Inicie Sua Transformação</h2>
            <p className="text-zinc-400">
              Responda rápido para que eu possa entender seu perfil. Você será redirecionado para falar comigo no WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-zinc-950 p-6 md:p-8 rounded-2xl border border-zinc-800 shadow-2xl space-y-5">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-zinc-400 mb-1">Nome Completo</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="Ex: João Silva"
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-zinc-600"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="age" className="block text-sm font-medium text-zinc-400 mb-1">Idade</label>
                <input
                  type="number"
                  id="age"
                  name="age"
                  required
                  value={formData.age}
                  onChange={handleChange}
                  placeholder="25"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-zinc-600"
                />
              </div>
              <div>
                <label htmlFor="height" className="block text-sm font-medium text-zinc-400 mb-1">Altura (m)</label>
                <input
                  type="text"
                  id="height"
                  name="height"
                  required
                  value={formData.height}
                  onChange={handleChange}
                  placeholder="1.75"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-zinc-600"
                />
              </div>
              <div>
                <label htmlFor="weight" className="block text-sm font-medium text-zinc-400 mb-1">Peso (kg)</label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  required
                  value={formData.weight}
                  onChange={handleChange}
                  placeholder="70"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-zinc-600"
                />
              </div>
            </div>

            <div>
              <label htmlFor="goal" className="block text-sm font-medium text-zinc-400 mb-1">Objetivo Principal</label>
              <select
                id="goal"
                name="goal"
                required
                value={formData.goal}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary transition-all appearance-none"
              >
                <option value="" disabled className="text-zinc-600">Selecione seu objetivo...</option>
                <option value="ganhar_massa">💪 Ganhar Massa Muscular</option>
                <option value="perder_peso">🔥 Perder Peso / Secar</option>
              </select>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-zinc-400 mb-1">Celular / WhatsApp</label>
              <div className="relative">
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(11) 99999-9999"
                  className="w-full bg-zinc-900 border border-zinc-800 rounded-lg pl-10 pr-4 py-3 text-white focus:outline-none focus:border-primary transition-all placeholder:text-zinc-600"
                />
                <Smartphone className="absolute left-3 top-3.5 h-5 w-5 text-zinc-500" />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full bg-primary hover:bg-secondary text-darker font-bold text-lg py-4 rounded-lg transition-colors flex items-center justify-center gap-2 mt-4"
            >
              Enviar e Falar Com o Personal
              <Send className="w-5 h-5" />
            </button>
            
            <p className="text-xs text-center text-zinc-600 mt-4">
              Ao clicar em enviar, você concorda em ser contatado via WhatsApp.
            </p>
          </form>
        </div>
    </section>
  );
};

export default ContactForm;