
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { useApp } from '../AppContext';
import { DIMENSIONS } from '../constants';

const ScreenBalanceFinal: React.FC = () => {
  const navigate = useNavigate();
  const { state } = useApp();

  // Simple radar polygon generator
  const getPolygonPoints = (scale: number = 1) => {
    const centerX = 200;
    const centerY = 200;
    const radius = 140 * scale;
    const points: string[] = [];
    
    for (let i = 0; i < 7; i++) {
      const dimensionId = DIMENSIONS[i].id;
      const score = state.wheel[dimensionId].score;
      const r = (radius * score) / 10;
      const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
      const x = centerX + r * Math.cos(angle);
      const y = centerY + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(' ');
  };

  return (
    <Layout className="bg-black overflow-y-auto">
      <header className="flex flex-col items-center pt-14 pb-4">
        <h1 className="font-bold text-xl tracking-tight">Mi Rueda hoy</h1>
        <p className="text-sm font-semibold text-primary mt-1">Completado • 100%</p>
      </header>
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative py-10">
        <div className="relative w-full aspect-square flex items-center justify-center">
          <svg className="w-full h-full drop-shadow-[0_0_15px_rgba(234,42,51,0.2)]" viewBox="0 0 400 400">
            {/* Grid */}
            <g fill="none" stroke="#3F3F46" strokeOpacity="0.3" strokeWidth="1">
              {[0.2, 0.4, 0.6, 0.8, 1].map((s, idx) => (
                <polygon key={idx} points={getPolygonPoints(s)} />
              ))}
              {/* Radial lines */}
              {DIMENSIONS.map((_, i) => {
                const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
                return (
                  <line key={i} x1="200" y1="200" x2={200 + 140 * Math.cos(angle)} y2={200 + 140 * Math.sin(angle)} />
                );
              })}
            </g>
            {/* User score polygon */}
            <polygon 
              fill="#ea2a33" 
              fillOpacity="0.25" 
              points={getPolygonPoints()} 
              stroke="#ea2a33" 
              strokeWidth="3"
            />
            {/* Labels */}
            {DIMENSIONS.map((d, i) => {
              const angle = (i * 2 * Math.PI) / 7 - Math.PI / 2;
              const x = 200 + 165 * Math.cos(angle);
              const y = 200 + 165 * Math.sin(angle);
              return (
                <text 
                  key={d.id} 
                  className="fill-white font-bold text-[10px] uppercase tracking-tighter" 
                  textAnchor="middle" 
                  dominantBaseline="middle"
                  x={x} 
                  y={y}
                >
                  {d.label}
                </text>
              );
            })}
          </svg>
        </div>
      </div>
      <div className="px-6 pb-12">
        <div className="bg-surface-dark/70 backdrop-blur-2xl rounded-[2rem] p-8 border border-white/10 flex flex-col items-center text-center">
          <h2 className="font-bold text-2xl mb-1">¡Felicidades, {state.user.name}!</h2>
          <p className="font-semibold text-white/90 mb-3">Así se ve tu balance hoy</p>
          <p className="text-white/40 text-sm mb-8">Hiciste algo que muy pocos hacen: <br/> <span className="text-white font-bold">Parar y observar.</span></p>
          <button onClick={() => navigate('/plan-accion')} className="bg-primary px-10 h-14 rounded-full font-bold shadow-lg active:scale-95 transition-all">Último paso</button>
        </div>
      </div>
    </Layout>
  );
};

export default ScreenBalanceFinal;
