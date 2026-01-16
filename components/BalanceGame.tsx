
import React, { useState } from 'react';
import { GameProps } from '../types';

const BalanceGame: React.FC<GameProps> = ({ onComplete }) => {
  const [val, setVal] = useState(0);
  const isBalanced = val > 45 && val < 55;

  return (
    <div className="w-full text-center">
      <p className="mb-8 font-bold text-slate-600">Relationships need balance. Get the heart to the middle.</p>
      <div className="relative h-12 w-full flex items-center">
        <input 
          type="range" value={val} onChange={(e) => setVal(parseInt(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
        />
        <div 
           className={`absolute text-3xl transition-all duration-300`} 
           style={{ left: `${val}%`, transform: 'translateX(-50%)' }}
        >⚖️</div>
      </div>
      <div className="mt-12 h-10">
        {isBalanced && (
          <button onClick={onComplete} className="clay-button px-8 py-2 animate-soft">Perfectly Balanced</button>
        )}
      </div>
    </div>
  );
};
export default BalanceGame;
