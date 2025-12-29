import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-dark text-white selection:bg-primary selection:text-black">
      <Header />
      
      <main>
        <Hero />
        <About />
        <Features />
        <ContactForm />
        
        <section className="py-20 bg-gradient-to-b from-dark to-zinc-900 text-center px-4">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Dê o primeiro passo para o corpo que você deseja hoje.
          </h2>
          <a 
            href="https://wa.me/5511995918326?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20consultoria."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-black font-bold py-4 px-8 rounded-full text-lg transition-transform hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Começar Agora Pelo WhatsApp
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;