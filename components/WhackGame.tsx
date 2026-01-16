
import React, { useState, useEffect } from 'react';
import { GameProps } from '../types';

const WhackGame: React.FC<GameProps> = ({ onComplete }) => {
  const [active, setActive] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [lastHit, setLastHit] = useState<number | null>(null);

  useEffect(() => {
    if (score >= 8) return;
    const timer = setInterval(() => {
      setActive(Math.floor(Math.random() * 6));
    }, 900);
    return () => clearInterval(timer);
  }, [score]);

  const hit = (i: number) => {
    if (i === active) {
      setScore(s => s + 1);
      setLastHit(i);
      setActive(null);
      setTimeout(() => setLastHit(null), 300);
    }
  };

  return (
    <div className="text-center w-full">
      <p className="mb-6 font-bold text-slate-500 text-lg">Tap the grudges to let them go!</p>
      
      <div className="grid grid-cols-3 gap-6 mb-8">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i} 
            onClick={() => hit(i)}
            className="relative w-20 h-20 mx-auto clay-inset flex items-center justify-center cursor-pointer overflow-hidden group"
          >
            <div className={`
              absolute transition-all duration-300 ease-out clay-button bg-rose-400 w-16 h-16 flex items-center justify-center text-3xl
              ${active === i ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-20 opacity-0 scale-75'}
              ${lastHit === i ? 'bg-green-400 scale-125 rotate-12' : ''}
            `}>
              {lastHit === i ? '✨' : '😡'}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center gap-4">
        <div className="text-2xl font-black text-rose-500 flex items-center gap-2">
          Cleared: <span className="clay-card px-4 py-1 bg-white">{score} / 8</span>
        </div>
        
        {score >= 8 && (
          <button 
            onClick={onComplete} 
            className="clay-button bg-green-500 px-12 py-3 font-bold text-xl animate-float"
          >
            Heart is Lighter! Next
          </button>
        )}
      </div>
    </div>
  );
};
export default WhackGame;
