
import React, { useState } from 'react';
import InfoModal from './InfoModal';

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  showInfo?: boolean;
}

const Layout: React.FC<LayoutProps> = ({ children, className = "", showInfo = false }) => {
  const [isInfoOpen, setIsInfoOpen] = useState(false);

  return (
    <div className={`relative flex flex-col min-h-screen max-w-md mx-auto bg-black text-white font-sans ${className}`}>
      {showInfo && (
        <button 
          onClick={() => setIsInfoOpen(true)}
          className="absolute top-6 right-6 z-40 text-white/50 hover:text-white transition-colors"
        >
          <span className="material-symbols-outlined !text-2xl">info</span>
        </button>
      )}
      
      {children}

      {isInfoOpen && <InfoModal onClose={() => setIsInfoOpen(false)} />}
    </div>
  );
};

export default Layout;
