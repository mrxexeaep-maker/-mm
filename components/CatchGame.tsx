
import React, { useState, useEffect } from 'react';
import { GameProps } from '../types';

const CatchGame: React.FC<GameProps> = ({ onComplete }) => {
  const [score, setScore] = useState(0);
  const [basketPos, setBasketPos] = useState(50);
  const [hearts, setHearts] = useState<{id: number, left: number, top: number}[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setHearts(h => [...h, { id: Date.now(), left: Math.random() * 90, top: 0 }]);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const fall = setInterval(() => {
      setHearts(prev => prev.map(h => ({ ...h, top: h.top + 2 })).filter(h => h.top < 100));
    }, 50);
    return () => clearInterval(fall);
  }, []);

  const catchHeart = (id: number) => {
    setScore(s => s + 1);
    setHearts(prev => prev.filter(h => h.id !== id));
  };

  return (
    <div className="w-full h-64 bg-blue-50 relative overflow-hidden rounded-2xl">
      {hearts.map(h => (
        <div 
          key={h.id} 
          onClick={() => catchHeart(h.id)}
          className="absolute text-2xl cursor-pointer animate-bounce"
          style={{ left: `${h.left}%`, top: `${h.top}%` }}
        >💖</div>
      ))}
      <div className="absolute bottom-0 left-0 w-full p-2 text-center font-bold text-blue-800">
        Score: {score} / 10
      </div>
      {score >= 10 && (
        <div className="absolute inset-0 bg-white/80 flex items-center justify-center">
            <button onClick={onComplete} className="clay-button px-6 py-2">Collected enough love!</button>
        </div>
      )}
    </div>
  );
};
export default CatchGame;
