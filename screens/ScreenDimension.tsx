
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useApp } from '../AppContext';
import { DIMENSIONS } from '../constants';

const ScreenDimension: React.FC = () => {
  const { id, index } = useParams();
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  
  const dim = DIMENSIONS.find(d => d.id === id);
  const idx = parseInt(index || '0');

  if (!dim) return null;

  const currentVal = state.wheel[dim.id];

  return (
    <Layout className="px-4">
      <header className="flex items-center justify-between py-5">
        <span className="material-symbols-outlined cursor-pointer" onClick={() => navigate(-1)}>arrow_back</span>
        <h1 className="text-lg font-bold">Dimensión {dim.label}</h1>
        <span className="text-white/40 text-[10px] font-bold uppercase tracking-widest">{idx + 1} DE 7</span>
      </header>
      <main className="flex-1 space-y-3 pb-4 overflow-y-auto">
        <section className="bg-surface-dark border border-white/5 rounded-xl p-5">
          <h2 className="text-primary text-[10px] font-extrabold uppercase tracking-widest mb-2">APRENDIZAJE</h2>
          <p className="text-sm text-white/80 leading-relaxed text-justify">{dim.description}</p>
          <div className="mt-3 p-3 bg-primary/5 border-l-2 border-primary rounded-r-lg">
            <p className="text-xs leading-tight"><span className="text-primary font-bold">Microtip:</span> {dim.tip}</p>
          </div>
        </section>

        <section className="bg-surface-dark border border-white/5 rounded-xl p-5">
          <div className="flex justify-between items-start mb-1">
            <h2 className="text-primary text-[10px] font-extrabold uppercase tracking-widest">IDENTIFICA</h2>
          </div>
          <h3 className="text-lg font-bold mb-4">¿Cómo estás hoy?</h3>
          <div className="relative px-2 pt-8 pb-1">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 text-white/30 text-[9px] font-bold tracking-widest">MUÉVELO</div>
            <div className="absolute top-3 left-[70%] -translate-x-1/2 text-primary text-2xl font-black">{currentVal.score}</div>
            <input 
              type="range" 
              max="10" 
              min="1" 
              className="w-full h-1.5 bg-white/10 rounded-full appearance-none custom-slider accent-primary cursor-pointer mt-4"
              value={currentVal.score}
              onChange={(e) => dispatch({ type: 'UPDATE_WHEEL_DIMENSION', id: dim.id, payload: { score: parseInt(e.target.value) } })}
            />
            <div className="flex justify-between mt-2 text-white/30 text-[9px] font-bold tracking-wider">
              <span>MUY BAJO</span>
              <span>MUY BIEN</span>
            </div>
          </div>
        </section>

        <section className="bg-surface-dark border border-white/5 rounded-xl p-5">
          <h2 className="text-primary text-[10px] font-extrabold uppercase tracking-widest mb-1">ACCIONA</h2>
          <h3 className="text-lg font-bold">Tu paso mínimo de hoy</h3>
          <p className="text-white/60 text-xs mb-3">Escribe un paso viable que te gustaría mejorar.</p>
          <textarea 
            className="w-full bg-black/50 border border-white/10 rounded-lg p-4 text-sm text-white focus:ring-primary focus:border-primary h-24 resize-none" 
            placeholder="Ej: Pequeña acción para hoy..."
            value={currentVal.step}
            onChange={(e) => dispatch({ type: 'UPDATE_WHEEL_DIMENSION', id: dim.id, payload: { step: e.target.value } })}
          ></textarea>
        </section>
      </main>
      <footer className="py-8 flex justify-center">
        <button 
          onClick={() => navigate(`/wheel-hub/${idx + 1}`)} 
          className="px-10 bg-primary py-4 rounded-xl font-extrabold shadow-lg active:scale-95 transition-all uppercase tracking-tight text-sm"
        >
          Guardar y seguir
        </button>
      </footer>
    </Layout>
  );
};

export default ScreenDimension;
