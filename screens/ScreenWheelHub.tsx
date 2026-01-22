
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import { useApp } from '../AppContext';
import { DIMENSIONS } from '../constants';

const ScreenWheelHub: React.FC = () => {
  const { step } = useParams();
  const navigate = useNavigate();
  const { state } = useApp();
  const currentStep = parseInt(step || '0');
  const progress = Math.round(((currentStep) / 7) * 100);

  return (
    <Layout className="px-6 py-8">
      <header className="flex items-center mb-10">
        <button className="material-symbols-outlined" onClick={() => navigate('/wheel-overview')}>arrow_back_ios</button>
        <h1 className="flex-1 text-center font-bold text-base uppercase tracking-tight pr-6">Mi Progreso</h1>
      </header>
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <span className="text-[14px] font-extrabold uppercase tracking-widest">PASO {currentStep} DE 7</span>
          <span className="text-primary font-bold text-xl">{progress}%</span>
        </div>
        <div className="w-full h-6 bg-white/10 rounded-full overflow-hidden border border-white/10">
          <div className="h-full rounded-full progress-fill-premium transition-all duration-700 ease-out" style={{ width: `${progress}%` }}></div>
        </div>
      </div>
      <div className="space-y-3 flex-1 flex flex-col overflow-y-auto pb-10">
        {DIMENSIONS.map((d, i) => {
          const isCompleted = i < currentStep;
          const isActive = i === currentStep;
          const isLocked = i > currentStep;

          return (
            <div 
              key={d.id} 
              onClick={() => isActive && navigate(`/dimension/${d.id}/${i}`)}
              className={`area-card ${isActive ? 'active border-primary/40 bg-white/5' : ''} ${isCompleted ? 'completed' : ''} ${isLocked ? 'locked' : ''}`} 
              style={{ background: isActive ? `linear-gradient(90deg, ${d.bg} 0%, rgba(255,255,255,0.05) 100%)` : `linear-gradient(90deg, ${d.bg} 0%, rgba(255,255,255,0.02) 100%)` }}
            >
              <div className={`area-icon shadow-lg`} style={{ backgroundColor: isLocked ? '#333' : d.accent }}>
                <span className="material-symbols-outlined !text-lg">{d.icon}</span>
              </div>
              <div className="flex-1 ml-1">
                <h3 className="font-bold text-sm">{d.label}</h3>
                <p className="text-[10px] text-white/50 font-medium leading-tight">{d.sub}</p>
              </div>
              <div className={`size-5 rounded-full border border-white/30 flex items-center justify-center shrink-0 ${isCompleted ? 'bg-primary border-primary shadow-[0_0_10px_rgba(234,42,51,0.5)]' : ''}`}>
                {isCompleted && <span className="material-symbols-outlined text-white !text-xs font-bold">check</span>}
                {isLocked && <span className="material-symbols-outlined text-white/40 !text-[18px]">lock</span>}
                {isActive && <span className="material-symbols-outlined text-primary !text-[14px]">play_arrow</span>}
              </div>
            </div>
          );
        })}
        <div className="pt-10 pb-4 text-center">
          <p className="text-[13px] font-medium text-white/40">
            {currentStep < 7 ? `Toca ${DIMENSIONS[currentStep].label} para continuar →` : '¡Completado! Toca abajo para ver resultados'}
          </p>
        </div>
        {currentStep === 7 && (
          <button onClick={() => navigate('/balance-final')} className="mt-4 bg-primary py-4 rounded-full font-bold shadow-lg active:scale-95 transition-all animate-bounce">
            Ver mi balance final
          </button>
        )}
      </div>
    </Layout>
  );
};

export default ScreenWheelHub;
