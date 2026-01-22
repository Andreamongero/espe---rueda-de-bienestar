
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ScreenIntro3: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="justify-center px-8" showInfo={true}>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center mb-10">
          <span className="material-symbols-outlined text-primary !text-5xl">visibility</span>
        </div>
        <h1 className="text-3xl font-bold text-center leading-tight mb-6">Encontramos algo clave</h1>
        <p className="text-white/80 text-lg text-center leading-relaxed mb-10">
          Culturalmente, la palabra ‘prevención’ está asociada a ‘hacerte un examen’. Cuando en realidad, empieza con el <span className="text-primary font-medium">cuidado consciente</span> que se construye TODO el año.
        </p>
        <div className="flex gap-2.5 mb-8">
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
        </div>
        <button onClick={() => navigate('/intro4')} className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined !text-3xl">arrow_forward</span>
        </button>
      </div>
    </Layout>
  );
};

export default ScreenIntro3;
