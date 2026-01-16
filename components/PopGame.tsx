
import React, { useState } from 'react';
import { GameProps } from '../types';

const PopGame: React.FC<GameProps> = ({ onComplete }) => {
  const [popped, setPopped] = useState<number[]>([]);
  const bubbles = ["Anger", "Lies", "Meanness", "Selfishness", "Ego", "Mistakes"];

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {bubbles.map((b, i) => (
        <button 
          key={i}
          disabled={popped.includes(i)}
          onClick={() => setPopped(p => [...p, i])}
          className={`w-24 h-24 rounded-full flex items-center justify-center text-xs font-bold transition-all shadow-xl
            ${popped.includes(i) ? 'scale-0 opacity-0' : 'bg-blue-200 text-blue-800 animate-pulse'}
          `}
          style={{ boxShadow: 'inset -5px -5px 10px rgba(0,0,0,0.1), inset 5px 5px 10px white' }}
        >
          {b}
        </button>
      ))}
      {popped.length === bubbles.length && (
        <button onClick={onComplete} className="clay-button w-full mt-6 py-3">All Bad Vibes Popped!</button>
      )}
    </div>
  );
};
export default PopGame;
