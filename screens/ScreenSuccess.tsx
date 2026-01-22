
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useApp } from '../AppContext';

const ScreenSuccess: React.FC = () => {
  const navigate = useNavigate();
  const { state, dispatch } = useApp();

  const handleExportJSON = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state, null, 2));
    const downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", `bienestar_${state.user.name || 'user'}.json`);
    document.body.appendChild(downloadAnchorNode);
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
  };

  const handleClose = () => {
    dispatch({ type: 'RESET_STATE' });
    navigate('/');
  };

  return (
    <Layout className="justify-center items-center px-6">
      <div className="relative w-full max-w-sm bg-surface-dark border border-white/5 rounded-3xl p-10 flex flex-col items-center shadow-2xl">
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
          <span className="material-symbols-outlined text-5xl" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        </div>
        <h1 className="text-3xl font-bold mb-4 text-center">¡Muchas gracias!</h1>
        <p className="text-[#c992a4] text-center mb-2">Revisa tu correo: te enviamos tus resultados allí.</p>
        <p className="text-[#c992a4]/50 text-xs text-center mb-10">Si no lo ves, revisa también la carpeta de spam.</p>
        
        <div className="w-full space-y-4">
          <button 
            onClick={handleClose} 
            className="bg-primary w-full py-4 rounded-full font-bold shadow-lg active:scale-95 transition-all"
          >
            Cerrar
          </button>
          
          <button 
            onClick={handleExportJSON}
            className="w-full py-2 text-[10px] text-white/30 hover:text-white/60 font-bold uppercase tracking-widest transition-colors"
          >
            Exportar JSON
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default ScreenSuccess;
