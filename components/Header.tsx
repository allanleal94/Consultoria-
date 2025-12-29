import React from 'react';
import { Dumbbell } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full z-50 py-6 px-4 md:px-8">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Dumbbell className="text-primary h-8 w-8" />
          <span className="text-2xl font-bold tracking-tighter uppercase text-white">
            Consultoria <span className="text-primary">Fitness</span>
          </span>
        </div>
        <a 
          href="#contato" 
          className="hidden md:block bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold transition-all border border-white/10"
        >
          Falar no WhatsApp
        </a>
      </div>
    </header>
  );
};

export default Header;