
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useApp } from '../AppContext';

const ScreenSurvey: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  const { checkup, barrier } = state.post;

  const isComplete = checkup !== "" && (checkup !== "No" || barrier !== "");

  const handleBarrierToggle = (option: string) => {
    dispatch({ type: 'UPDATE_POST', payload: { barrier: option } });
  };

  return (
    <Layout className="px-5">
      <header className="p-4"><button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back</button></header>
      <main className="flex-1 flex flex-col justify-center pb-12 overflow-y-auto">
        <div className="bg-surface-dark rounded-[2.5rem] p-6 border border-white/10 shadow-2xl w-full">
          <div className="text-center mb-6 space-y-2">
            <p className="text-sm font-medium">En el marco del Día Mundial, <span className="text-white font-bold">diste un gran paso.</span></p>
            <p className="text-[13px] text-gray-400">Ayúdanos con estas últimas preguntas:</p>
          </div>
          
          <h3 className="text-center font-bold mb-4 text-sm">¿Te hiciste algún chequeo preventivo en el último año?</h3>
          <div className="space-y-2 mb-6">
            {['Sí', 'No', 'No recuerdo'].map(opt => (
              <label 
                key={opt} 
                className={`flex items-center gap-3 border p-4 rounded-2xl cursor-pointer transition-colors ${checkup === opt ? 'bg-primary/10 border-primary' : 'border-white/10'}`}
              >
                <input 
                  type="radio" 
                  name="chequeo" 
                  className="text-primary focus:ring-0 bg-transparent border-white/20" 
                  checked={checkup === opt}
                  onChange={() => dispatch({ type: 'UPDATE_POST', payload: { checkup: opt } })}
                />
                <span className="text-sm">{opt}</span>
              </label>
            ))}
          </div>

          {checkup === "No" && (
            <div className="pt-4 border-t border-white/10 animate-in fade-in slide-in-from-top-2 duration-300">
              <h4 className="text-center text-sm font-bold text-white/80 mb-4">¿Cuál es la razón principal?</h4>
              <div className="space-y-2">
                {["Falta de tiempo", "Factores económicos", "Sentimientos encontrados", "Desconfianza", "Otro"].map(label => (
                  <label 
                    key={label} 
                    className={`flex items-center gap-3 border p-3 rounded-xl cursor-pointer transition-colors ${barrier === label ? 'bg-primary/5 border-primary/50 text-white' : 'border-white/5 text-white/50'}`}
                  >
                    <input 
                      type="radio" 
                      name="barrier"
                      className="text-primary focus:ring-0 bg-transparent border-white/20" 
                      checked={barrier === label}
                      onChange={() => handleBarrierToggle(label)}
                    />
                    <span className="text-xs">{label}</span>
                  </label>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <footer className="p-5 pb-16 flex flex-col items-center gap-4">
        <button 
          disabled={!isComplete}
          onClick={() => navigate('/success')} 
          className={`px-12 py-4 rounded-full font-bold shadow-lg transition-all uppercase tracking-widest text-xs ${isComplete ? 'bg-primary active:scale-95' : 'bg-white/10 opacity-50 cursor-not-allowed'}`}
        >
          Finalizar
        </button>
      </footer>
    </Layout>
  );
};

export default ScreenSurvey;
