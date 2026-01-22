
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ScreenIntro1: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="justify-center px-8" showInfo={true}>
      <div className="absolute top-6 left-6 flex items-center gap-3">
        <span className="text-primary text-xl font-bold">ESPE</span>
        <div className="w-[1px] h-4 bg-white/20"></div>
        <span className="text-[10px] font-medium tracking-[0.1em] opacity-80 uppercase">MICRO-EXPERIENCIA</span>
      </div>
      <div className="flex flex-col items-center mt-12">
        <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center mb-10">
          <span className="material-symbols-outlined text-primary !text-5xl">calendar_month</span>
        </div>
        <h1 className="text-3xl font-bold text-center leading-tight mb-6">El 4 de febrero es el Día Mundial frente al Cáncer</h1>
        <p className="text-white/80 text-lg font-light text-center leading-relaxed">
          Probablemente ya lo estás viendo: anuncios, <span className="text-primary font-medium">mucho contenido de prevención</span>, y lacitos por todos lados.
        </p>
        <div className="flex gap-2.5 mt-10 mb-8">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
        </div>
        <button onClick={() => navigate('/intro2')} className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined !text-3xl">arrow_forward</span>
        </button>
      </div>
    </Layout>
  );
};

export default ScreenIntro1;
