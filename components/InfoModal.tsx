
import React from 'react';

interface InfoModalProps {
  onClose: () => void;
}

const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/60 backdrop-blur-sm">
      <div className="glass-satin-card w-full max-w-sm rounded-[2rem] p-8 animate-in fade-in zoom-in duration-300">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold">Información</h2>
          <button onClick={onClose} className="text-white/40 hover:text-white">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        <div className="space-y-4 text-white/80 text-sm leading-relaxed">
          <p>
            Esta micro-experiencia interactiva ha sido diseñada para fomentar la reflexión consciente sobre las diversas dimensiones que componen tu bienestar integral.
          </p>
          <p>
            A través de un ejercicio de auto-observación, podrás identificar tu estado actual y proponer acciones mínimas y sostenibles para mejorar tu calidad de vida.
          </p>
          <p className="text-xs text-white/40 italic">
            Importante: Este ejercicio no constituye consejo médico, diagnóstico o tratamiento profesional. Consulta siempre a un especialista para temas de salud.
          </p>
        </div>
        <button 
          onClick={onClose}
          className="w-full mt-8 bg-primary py-4 rounded-full font-bold shadow-lg active:scale-95 transition-all"
        >
          Entendido
        </button>
      </div>
    </div>
  );
};

export default InfoModal;
