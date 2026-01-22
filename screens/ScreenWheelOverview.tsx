
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useApp } from '../AppContext';
import { DIMENSIONS } from '../constants';

const ScreenWheelOverview: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  const email = state.user.email;

  const validateEmail = (e: string) => {
    return String(e)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const isEmailValid = !!validateEmail(email);

  return (
    <Layout className="px-6 bg-black">
      <header className="flex items-center pt-8 pb-6">
        <button className="material-symbols-outlined text-white/80" onClick={() => navigate(-1)}>arrow_back_ios</button>
        <h1 className="flex-1 text-center font-bold text-lg tracking-tight pr-8">Rueda de Bienestar</h1>
      </header>

      <main className="flex-1 pb-80 overflow-y-auto no-scrollbar">
        <div className="text-center mb-8 px-2">
          <h2 className="text-[17px] font-bold leading-tight tracking-tight">
            Vas a ver 7 áreas, y en cada una podrás explorar 3 enfoques: 
            <span className="text-primary"> Aprender, Identificar y Accionar</span> hacia un cuidado más consciente.
          </h2>
        </div>

        <div className="space-y-3">
          {DIMENSIONS.map(d => (
            <div key={d.id} className="relative group">
              <div 
                className="flex items-center gap-4 px-5 py-3 rounded-2xl border border-white/10 transition-all duration-300 bg-white/[0.03] hover:bg-white/[0.06]"
                style={{ background: `linear-gradient(90deg, ${d.bg} 0%, rgba(255,255,255,0.02) 100%)` }}
              >
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg shrink-0" 
                  style={{ backgroundColor: d.accent }}
                >
                  <span className="material-symbols-outlined text-white !text-xl" style={{ fontVariationSettings: "'FILL' 1" }}>{d.icon}</span>
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-[15px]">{d.label}</h3>
                  <p className="text-[11px] text-white/50 font-medium leading-tight">{d.sub}</p>
                </div>
                <span className="material-symbols-outlined text-white/30 !text-sm group-hover:text-white transition-colors">chevron_right</span>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Premium Overlay Bottom Sheet */}
      <div className="fixed inset-x-0 bottom-0 z-50 p-6 pointer-events-none">
        <div className="pointer-events-auto bg-[#1a1a1a]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-7 shadow-[0_-10px_40px_rgba(0,0,0,0.6)] max-w-md mx-auto">
          <p className="text-[13px] text-center text-white/70 mb-6 leading-relaxed">
            Al finalizar la experiencia, recibirás un resumen con los accionables que elijas.
          </p>
          
          <div className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-white/40 uppercase tracking-[0.15em] mb-3 ml-1">¿A QUÉ CORREO TE LO ENVÍO?</label>
              <input 
                className="w-full bg-white/[0.04] border border-white/10 rounded-2xl py-4 px-6 text-[15px] text-white placeholder:text-white/20 focus:ring-1 focus:ring-primary focus:border-primary transition-all" 
                placeholder="tucorreo@ejemplo.com"
                type="email"
                value={email}
                onChange={(e) => dispatch({ type: 'UPDATE_USER', payload: { email: e.target.value } })}
              />
            </div>

            <button 
              disabled={!isEmailValid}
              onClick={() => navigate('/wheel-hub/0')} 
              className={`w-full py-4 rounded-2xl font-bold text-lg shadow-2xl transition-all duration-300 transform active:scale-[0.97] ${
                isEmailValid 
                ? 'bg-primary text-white shadow-primary/30' 
                : 'bg-white/10 text-white/30 cursor-not-allowed opacity-50'
              }`}
            >
              Guardar
            </button>

            <p className="text-[9px] text-white/30 text-center font-bold uppercase tracking-[0.15em]">
              SI TE DESCUIDAS, CUIDAMOS TU E-MAIL. NO ENVIAMOS SPAM.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ScreenWheelOverview;
