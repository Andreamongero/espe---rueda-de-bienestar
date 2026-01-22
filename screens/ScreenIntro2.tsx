
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ScreenIntro2: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="justify-center px-8" showInfo={true}>
      <div className="flex flex-col items-center">
        <div className="w-24 h-24 rounded-full bg-primary/15 flex items-center justify-center mb-10">
          <span className="material-symbols-outlined text-primary !text-5xl">search</span>
        </div>
        <h1 className="text-3xl font-bold text-center leading-tight mb-6">Nosotros quisimos hacer algo diferente</h1>
        <p className="text-white/80 text-lg text-center mb-4">¿Por qué las personas no acuden a ellos, incluso cuando cada vez hay más acceso?</p>
        <p className="text-primary font-medium text-lg text-center mb-10">Incluso cuando es gratuito.</p>
        <div className="flex gap-2.5 mb-8">
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
          <div className="h-2 w-2 rounded-full bg-white/20"></div>
        </div>
        <button onClick={() => navigate('/intro3')} className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined !text-3xl">arrow_forward</span>
        </button>
      </div>
    </Layout>
  );
};

export default ScreenIntro2;
