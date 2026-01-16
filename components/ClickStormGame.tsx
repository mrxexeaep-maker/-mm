
import React, { useState, useEffect } from 'react';
import { GameProps } from '../types';

const ClickStormGame: React.FC<GameProps> = ({ onComplete }) => {
  const [clicks, setClicks] = useState(0);
  const target = 40;
  const [timeLeft, setTimeLeft] = useState(10);

  useEffect(() => {
    if (timeLeft > 0 && clicks < target) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && clicks < target) {
      setClicks(0);
      setTimeLeft(10);
    }
  }, [timeLeft, clicks]);

  return (
    <div className="text-center w-full">
      <p className="mb-4 text-slate-600 font-bold italic">
        The "Sorry Storm" is coming! Click {target} times in 10 seconds!
      </p>
      <div className="text-4xl font-black text-rose-500 mb-6">
        {timeLeft}s
      </div>
      <div className="w-full bg-slate-100 rounded-full h-4 mb-8 clay-inset overflow-hidden">
        <div 
          className="bg-rose-500 h-full transition-all duration-300"
          style={{ width: `${(clicks / target) * 100}%` }}
        />
      </div>
      <div className="relative">
        <button 
          onClick={() => setClicks(c => c + 1)}
          className="clay-button w-32 h-32 rounded-full text-4xl transform active:scale-90 transition-transform"
        >
          🙏
        </button>
        {clicks >= target ? (
          <div className="mt-8 animate-bounce">
            <button onClick={onComplete} className="clay-button px-8 py-3 bg-green-500">
              Storm Passed! Next
            </button>
          </div>
        ) : (
          <p className="mt-4 font-black text-slate-400">{clicks} / {target}</p>
        )}
      </div>
    </div>
  );
};

export default ClickStormGame;
