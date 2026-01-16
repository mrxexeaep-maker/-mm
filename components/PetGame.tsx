
import React, { useState } from 'react';
import { GameProps } from '../types';

const PetGame: React.FC<GameProps> = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [isSquishing, setIsSquishing] = useState(false);
  const target = 15;

  const handlePet = () => {
    if (count >= target) return;
    setCount(c => c + 1);
    setIsSquishing(true);
    const audio = new Audio('https://actions.google.com/sounds/v1/cartoon/pop_01.ogg');
    audio.volume = 0.2;
    audio.play().catch(() => {});
    setTimeout(() => setIsSquishing(false), 300);
  };

  const progress = (count / target) * 100;

  return (
    <div className="text-center w-full flex flex-col items-center">
      <div className={`relative mb-8 transition-all duration-300 ${isSquishing ? 'scale-95' : 'scale-100'}`}>
        <div className="clay-card p-3 bg-white">
          <img 
            src="https://m.media-amazon.com/images/I/41-lS0p6KDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg" 
            className="w-80 h-48 rounded-2xl object-cover shadow-inner"
            alt="begging cat" 
          />
        </div>
        {isSquishing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-6xl animate-ping select-none">💖</span>
          </div>
        )}
      </div>
      
      <p className="mb-6 text-slate-700 font-black text-lg px-4 italic">
        {count < target 
          ? `Tap me ${target - count} more times to accept my prayer...` 
          : "Thank you for the gentle pets. I feel better already!"}
      </p>

      <div className="w-full max-w-xs clay-inset h-10 mb-8 p-1.5 relative overflow-hidden bg-slate-100">
        <div 
          className="bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 h-full rounded-full transition-all duration-700 ease-out shadow-lg relative" 
          style={{ 
            width: `${progress}%`,
            boxShadow: count > 0 ? '0 0 15px rgba(244, 114, 182, 0.4)' : 'none'
          }} 
        >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-[shimmer_2s_infinite] rounded-full" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center text-xs font-black text-slate-700 uppercase tracking-widest mix-blend-difference">
          Forgiveness: {Math.round(progress)}%
        </div>
      </div>

      <div className="flex justify-center h-20 w-full">
        {count < target ? (
          <button 
            onClick={handlePet} 
            className="clay-button px-12 py-4 font-black text-xl w-full max-w-xs active:scale-90 transition-transform"
          >
            PET ME 👋
          </button>
        ) : (
          <button 
            onClick={onComplete} 
            className="clay-button bg-green-500 hover:bg-green-600 px-12 py-4 font-black text-xl w-full max-w-xs animate-bounce"
          >
            CONTINUE ✨
          </button>
        )}
      </div>
    </div>
  );
};
export default PetGame;
