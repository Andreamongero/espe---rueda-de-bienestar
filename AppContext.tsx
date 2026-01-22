
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { AppState, AppAction } from './types';
import { INITIAL_STATE } from './constants';

const AppContext = createContext<{
  state: AppState;
  dispatch: React.Dispatch<AppAction>;
} | undefined>(undefined);

function appReducer(state: AppState, action: AppAction): AppState {
  switch (action.type) {
    case 'UPDATE_USER':
      return { ...state, user: { ...state.user, ...action.payload } };
    case 'UPDATE_WHEEL_DIMENSION':
      return {
        ...state,
        wheel: {
          ...state.wheel,
          [action.id]: { ...state.wheel[action.id], ...action.payload }
        }
      };
    case 'UPDATE_POST':
      return { ...state, post: { ...state.post, ...action.payload } };
    case 'RESET_STATE':
      return INITIAL_STATE;
    default:
      return state;
  }
}

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, INITIAL_STATE);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useApp must be used within an AppProvider');
  return context;
};
