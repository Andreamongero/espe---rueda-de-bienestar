
import { Dimension } from './types';

export const DIMENSIONS: Dimension[] = [
  { 
    id: 'fisica', 
    label: 'Física', 
    sub: 'Cuerpo y energía', 
    icon: 'fitness_center', 
    accent: '#15803d', // Green-700
    bg: 'rgba(21,128,61,0.15)',
    description: "La dimensión física tiene que ver con tu cuerpo y tu energía. No es solo hacer ejercicio, también es movimiento, descanso y recuperación.",
    tip: "Pequeñas pausas de movimiento ayudan a que tu cuerpo no quede ‘apagado’."
  },
  { 
    id: 'emocional', 
    label: 'Emocional', 
    sub: 'Cómo te sientes por dentro', 
    icon: 'favorite', 
    accent: '#0d9488', // Teal-600
    bg: 'rgba(13,148,136,0.15)',
    description: "La dimensión emocional no va de “ser fuerte”. Va de cómo te sientes por dentro hoy y cómo lo estás llevando. Es reconocer lo que estás sosteniendo.",
    tip: "A veces nombrar y externalizar lo que te pasa es el primer paso para aliviarlo."
  },
  { 
    id: 'social', 
    label: 'Social', 
    sub: 'Vínculos y sostén', 
    icon: 'groups', 
    accent: '#7c3aed', // Violet-600
    bg: 'rgba(124,58,237,0.15)',
    description: "La dimensión social habla de cómo te vinculas y cómo te sostienes con otras personas. No se trata de tener “muchos amigos”.",
    tip: "A veces el primer paso no es “buscar amigos”, sino identificar qué apoyo te serviría hoy."
  },
  { 
    id: 'espiritual', 
    label: 'Espiritual', 
    sub: 'Sentido y propósito', 
    icon: 'spa', 
    accent: '#4f46e5', // Indigo-600
    bg: 'rgba(79,70,229,0.15)',
    description: "La dimensión espiritual no significa religión. Conecta con un sentido mayor de propósito, dirección o significado.",
    tip: "Si hoy no encuentras un punto de anclaje, no lo fuerces. Pregúntate qué te inspira."
  },
  { 
    id: 'intelectual', 
    label: 'Intelectual', 
    sub: 'Estimulación y curiosidad', 
    icon: 'lightbulb', 
    accent: '#2563eb', // Blue-600
    bg: 'rgba(37,99,235,0.15)',
    description: "La dimensión intelectual se trata de expandir tus conocimientos y habilidades, compartiendo tus dones con los demás. Se trata de curiosidad y aprendizaje continuo.",
    tip: "Dedica 5 minutos a leer algo nuevo o aprender una palabra que no conocías."
  },
  { 
    id: 'finanzas', 
    label: 'Finanzas', 
    sub: 'Tu base y estabilidad', 
    icon: 'account_balance_wallet', 
    accent: '#ca8a04', // Yellow-600
    bg: 'rgba(202,138,4,0.15)',
    description: "La dimensión financiera tiene que ver con tu sensación de base: qué tan claro tienes lo que entra y sale, y cuánto margen sientes para decidir sin ansiedad.",
    tip: "Busca ver con claridad tus gastos comunes y tener orden."
  },
  { 
    id: 'ocupacional', 
    label: 'Ocupacional', 
    sub: 'Tu día a día', 
    icon: 'work', 
    accent: '#ea2a33', // Primary Red
    bg: 'rgba(234,42,51,0.15)',
    description: "La dimensión ocupacional tiene que ver con cómo se siente tu día a día. No solo “tener trabajo”, sino si tu rol te drena o te sostiene.",
    tip: "Elige un ajuste pequeño: una pausa real de 3 minutos sin culpa."
  }
];

export const INITIAL_STATE = {
  user: { name: "", ageRange: "", gender: "", email: "" },
  wheel: {
    fisica: { score: 5, step: "" },
    emocional: { score: 5, step: "" },
    social: { score: 5, step: "" },
    espiritual: { score: 5, step: "" },
    intelectual: { score: 5, step: "" },
    finanzas: { score: 5, step: "" },
    ocupacional: { score: 5, step: "" }
  },
  post: { checkup: "", barrier: "" }
};
