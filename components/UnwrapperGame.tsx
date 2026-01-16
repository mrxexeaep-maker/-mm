
import React, { useState } from 'react';
import { GameProps } from '../types';

const UnwrapperGame: React.FC<GameProps> = ({ onComplete }) => {
  const [clicks, setClicks] = useState(0);
  const target = 20;

  return (
    <div className="text-center">
      <div 
        className="w-40 h-40 bg-rose-400 mx-auto mb-8 rounded-3xl relative flex items-center justify-center text-4xl shadow-2xl transition-all"
        style={{ transform: `scale(${1 + clicks/50}) rotate(${clicks * 5}deg)` }}
      >
        🎁
        <div className="absolute w-full h-4 bg-yellow-300 shadow-md"></div>
        <div className="absolute h-full w-4 bg-yellow-300 shadow-md"></div>
      </div>
      <p className="mb-4 font-bold text-rose-600">Unwrap my sincere apology!</p>
      {clicks < target ? (
        <button onClick={() => setClicks(c => c + 1)} className="clay-button px-10 py-4">Click to Tear! ({target-clicks})</button>
      ) : (
        <div className="animate-bounce">
            <p className="mb-4 text-xl">✨ I'M SORRY ✨</p>
            <button onClick={onComplete} className="clay-button px-8 py-2">Continue</button>
        </div>
      )}
    </div>
  );
};
export default UnwrapperGame;
