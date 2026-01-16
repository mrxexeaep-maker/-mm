
import React, { useState } from 'react';

interface Props { onComplete: () => void; }

const SpinWheelGame: React.FC<Props> = ({ onComplete }) => {
  const [rotation, setRotation] = useState(0);
  const [spinning, setSpinning] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const options = [
    "Big Hug",
    "Infinite Sorries",
    "Pizza Night",
    "Pure Forgiveness",
    "New Memories",
    "BFF Status"
  ];

  const spin = () => {
    if (spinning) return;
    setSpinning(true);
    setResult(null);
    const newRotation = rotation + 1440 + Math.random() * 360;
    setRotation(newRotation);
    
    setTimeout(() => {
      setSpinning(false);
      setResult("You won the 'Infinite Love' Jackpot! 💖");
    }, 4000);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="relative mb-12">
        {/* Pointer */}
        <div className={`absolute -top-6 left-1/2 -translate-x-1/2 z-20 text-4xl drop-shadow-lg ${spinning ? 'animate-bounce' : ''}`}>
          👇
        </div>
        
        {/* Wheel container with clay look */}
        <div className="p-4 clay-inset rounded-full bg-white shadow-2xl">
          <div 
            className="w-64 h-64 border-8 border-pink-100 rounded-full relative transition-transform duration-[4000ms] cubic-bezier(0.15, 0, 0.15, 1) overflow-hidden shadow-inner flex items-center justify-center bg-white"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {options.map((opt, i) => (
                <div 
                    key={i} 
                    className={`absolute text-[10px] font-black uppercase tracking-tight text-center w-full h-full flex items-start justify-center pt-8
                      ${i % 2 === 0 ? 'text-rose-500' : 'text-purple-500'}
                    `}
                    style={{ transform: `rotate(${i * (360/options.length)}deg)` }}
                >
                    <div className="bg-slate-50 px-2 py-1 rounded-full shadow-sm border border-slate-100">
                      {opt}
                    </div>
                </div>
            ))}
            {/* Center Hub */}
            <div className="w-12 h-12 bg-white rounded-full z-10 clay-card flex items-center justify-center shadow-lg border-2 border-pink-50">
               <div className="w-4 h-4 bg-pink-400 rounded-full shadow-inner animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="h-24 flex flex-col items-center justify-center">
        {result ? (
            <div className="text-center animate-soft">
                <p className="text-xl font-black text-rose-600 mb-4">{result}</p>
                <button 
                    onClick={onComplete}
                    className="clay-button bg-purple-500 text-white px-10 py-3 rounded-xl font-bold text-lg"
                >
                    Accept My Fate & Next
                </button>
            </div>
        ) : (
            <button 
                onClick={spin}
                disabled={spinning}
                className="clay-button bg-rose-500 text-white px-14 py-4 rounded-full font-black text-xl disabled:opacity-50 disabled:scale-95"
            >
                {spinning ? 'WISHING...' : 'SPIN FOR LUCK 🍀'}
            </button>
        )}
      </div>
    </div>
  );
};

export default SpinWheelGame;
