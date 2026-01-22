
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ScreenIntro4: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="justify-center px-8" showInfo={true}>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center mb-10">
          <span className="material-symbols-outlined text-primary !text-5xl">auto_awesome</span>
        </div>
        <h1 className="text-3xl font-bold text-center leading-tight mb-6">Por eso creamos esta Micro Experiencia</h1>
        <p className="text-white/80 text-lg text-center leading-relaxed mb-10">
          Para ayudarte a mirar ese resto del año, entenderte mejor y diseñar un ritmo de <span className="text-primary font-medium">cuidado sostenible</span>.
        </p>
        <div className="flex gap-2.5 mb-10">
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        </div>
        <button onClick={() => navigate('/onboarding')} className="bg-primary px-10 h-14 rounded-full text-white font-bold tracking-widest text-[13px] uppercase shadow-lg active:scale-95 transition-all">
          ¡EMPEZAR AHORA!
        </button>
      </div>
    </Layout>
  );
};

export default ScreenIntro4;
