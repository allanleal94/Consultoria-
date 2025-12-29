import React from 'react';
import { Instagram, Facebook, Dumbbell } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-12 border-t border-zinc-900">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
        
        <div className="flex items-center gap-2">
          <Dumbbell className="text-primary h-6 w-6" />
          <span className="text-xl font-bold tracking-tighter uppercase text-white">
            Consultoria <span className="text-primary">Fitness</span>
          </span>
        </div>

        <div className="text-center md:text-right">
          <div className="flex gap-4 justify-center md:justify-end mb-4">
            <a 
              href="https://www.instagram.com/_allanleal?igsh=MXZsNjNjN2RkbDhicg%3D%3D&utm_source=qr" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-zinc-500 hover:text-primary transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a href="#" className="text-zinc-500 hover:text-primary transition-colors">
              <Facebook size={24} />
            </a>
          </div>
          <p className="text-zinc-600 text-sm">
            © {new Date().getFullYear()} Consultoria Fitness. Todos os direitos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;