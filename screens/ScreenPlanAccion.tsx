
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useApp } from '../AppContext';
import { DIMENSIONS } from '../constants';

const ScreenPlanAccion: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useApp();

  return (
    <Layout className="bg-black">
      <header className="px-6 pt-12 pb-6 flex items-center sticky top-0 bg-black/80 backdrop-blur-xl z-40">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined text-white/80">arrow_back</button>
        <h1 className="flex-1 text-center font-bold text-xl tracking-tight pr-10">Mi Plan de Acción</h1>
      </header>

      <main className="px-6 flex-1 pb-40 overflow-y-auto no-scrollbar">
        <div className="text-center mb-10 space-y-2">
          <p className="text-white/60 text-[15px] font-medium leading-relaxed">
            Estos son los compromisos que elegiste hoy. <br/>
            <span className="text-white">Te los enviaremos por correo ahora mismo.</span>
          </p>
        </div>

        <div className="space-y-3">
          {DIMENSIONS.map((d) => {
            const userStep = state.wheel[d.id].step;
            return (
              <div 
                key={d.id} 
                className="flex items-center gap-5 px-6 py-5 rounded-[2rem] border border-white/10 bg-white/[0.03]"
                style={{ background: `linear-gradient(135deg, ${d.bg} 0%, rgba(255,255,255,0.02) 100%)` }}
              >
                <div 
                  className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl shrink-0" 
                  style={{ backgroundColor: d.accent }}
                >
                  <span className="material-symbols-outlined text-white !text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>{d.icon}</span>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="text-[10px] font-black uppercase tracking-[0.2em]" style={{ color: d.accent }}>{d.label}</p>
                  <p className={`text-[15px] leading-snug ${userStep ? 'text-white font-medium' : 'text-white/20 italic'}`}>
                    {userStep || "(sin acción registrada)"}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      <div className="fixed bottom-0 left-0 right-0 p-8 flex justify-center bg-gradient-to-t from-black via-black/90 to-transparent">
        <button 
          onClick={() => navigate('/survey')} 
          className="bg-primary w-full py-5 rounded-2xl font-bold text-lg shadow-[0_10px_30px_rgba(234,42,51,0.3)] active:scale-[0.98] transition-all transform"
        >
          Continuar
        </button>
      </div>
    </Layout>
  );
};

export default ScreenPlanAccion;
