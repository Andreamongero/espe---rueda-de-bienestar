
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';

const ScreenReframe: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Layout className="px-8" showInfo={true}>
      <header className="py-6 flex justify-between items-center">
        <span className="material-symbols-outlined cursor-pointer" onClick={() => navigate(-1)}>chevron_left</span>
        <span className="text-sm font-medium">Rueda de Bienestar</span>
        <div className="w-6"></div>
      </header>
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-2xl font-bold text-center mb-10">Venimos con un reencuadre</h1>
        <div className="glass-satin-card rounded-[2rem] p-8 mb-8">
          <p className="text-lg leading-relaxed text-center">
            Un enfoque diferente… y hasta lúdico. <br/>
            Hablemos del <span className="text-primary">cuidado diario</span>: el que se construye todo el año, no solo el día del chequeo.
          </p>
        </div>
        <div className="bg-primary rounded-xl py-5 px-6">
          <p className="font-bold text-center">Y para eso, te presento la Rueda de Bienestar.</p>
        </div>
      </div>
      <div className="py-12 flex flex-col items-center">
        <div className="flex gap-2 mb-10">
          <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
          <div className="h-1.5 w-1.5 rounded-full bg-white/20"></div>
        </div>
        <button onClick={() => navigate('/wheel-overview')} className="bg-primary w-16 h-16 rounded-full flex items-center justify-center shadow-lg active:scale-95 transition-all">
          <span className="material-symbols-outlined !text-3xl">arrow_forward</span>
        </button>
      </div>
    </Layout>
  );
};

export default ScreenReframe;
