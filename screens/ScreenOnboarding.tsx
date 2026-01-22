
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useApp } from '../AppContext';

const ScreenOnboarding: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();
  const { name, ageRange, gender } = state.user;

  const isComplete = name.trim() !== "" && ageRange !== "" && gender !== "";

  return (
    <Layout>
      <header className="flex items-center p-4">
        <button onClick={() => navigate(-1)} className="material-symbols-outlined">arrow_back_ios</button>
        <h2 className="flex-1 text-center font-bold text-base pr-8">Hagámoslo personal</h2>
      </header>
      <main className="flex-1 px-8 py-10 flex flex-col items-center overflow-y-auto">
        <h1 className="text-4xl font-extrabold mb-2">¡Mucho gusto!</h1>
        <p className="text-white/60 mb-8">¿Cómo quieres que te llame?</p>
        <input 
          className="w-full bg-white/5 border border-white/20 rounded-full h-14 px-6 mb-10 focus:ring-primary focus:border-primary text-white" 
          placeholder="Tu nombre o apodo"
          value={name}
          onChange={(e) => dispatch({ type: 'UPDATE_USER', payload: { name: e.target.value } })}
        />
        
        <h3 className="font-bold mb-6">¿En qué rango de edad estás?</h3>
        <div className="grid grid-cols-2 gap-3 w-full mb-10">
          {['18-24', '25-34', '35-44', '45+'].map(age => (
            <button 
              key={age} 
              onClick={() => dispatch({ type: 'UPDATE_USER', payload: { ageRange: age } })}
              className={`py-3.5 rounded-full border transition-all text-sm font-semibold ${ageRange === age ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(234,42,51,0.4)]' : 'border-white/20 bg-white/5 hover:border-primary/50'}`}
            >
              {age}
            </button>
          ))}
        </div>

        <h3 className="font-bold mb-6">¿Cómo te identificas?</h3>
        <div className="grid grid-cols-2 gap-3 w-full mb-14">
          {['Mujer', 'Hombre', 'No binario', 'Prefiero no decir'].map(id => (
            <button 
              key={id} 
              onClick={() => dispatch({ type: 'UPDATE_USER', payload: { gender: id } })}
              className={`py-3.5 rounded-full border transition-all text-sm font-semibold ${gender === id ? 'bg-primary border-primary text-white shadow-[0_0_15px_rgba(234,42,51,0.4)]' : 'border-white/20 bg-white/5 hover:border-primary/50'}`}
            >
              {id}
            </button>
          ))}
        </div>

        <button 
          disabled={!isComplete}
          onClick={() => navigate('/wellness-explanation')} 
          className={`px-12 py-4 rounded-full font-bold shadow-lg transition-all flex items-center gap-2 mb-10 ${isComplete ? 'bg-primary active:scale-95' : 'bg-white/10 opacity-50 cursor-not-allowed'}`}
        >
          Continuar <span className="material-symbols-outlined">arrow_forward</span>
        </button>
      </main>
    </Layout>
  );
};

export default ScreenOnboarding;
