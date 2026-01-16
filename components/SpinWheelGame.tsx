
import React, { useState, useEffect } from 'react';
import { GameProps } from '../types';

const SpinWheelGame: React.FC<GameProps> = ({ onComplete }) => {
  const [rotation, setRotation] = useState(0);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [winningSegment, setWinningSegment] = useState("");

  const segments = [
    { label: "Free Pizza", color: "#f472b6" },
    { label: "Infinite Sorrys", color: "#fb7185" },
    { label: "Movie Night", color: "#34d399" },
    { label: "Big Hug", color: "#60a5fa" },
    { label: "New Memory", color: "#fbbf24" },
    { label: "Trust Reset", color: "#a78bfa" },
    { label: "BFF Status", color: "#ec4899" },
    { label: "Listen Pass", color: "#8b5cf6" }
  ];

  const spin = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setShowResult(false);
    
    // Calculate a random rotation (at least 5 full spins + random offset)
    const extraSpins = 5 + Math.floor(Math.random() * 5);
    const randomOffset = Math.floor(Math.random() * 360);
    const totalRotation = rotation + (extraSpins * 360) + randomOffset;
    
    setRotation(totalRotation);

    // Play sound effect
    const audio = new Audio('https://actions.google.com/sounds/v1/foley/wind_chime_vibrant.ogg');
    audio.volume = 0.2;
    audio.play().catch(() => {});

    // Logic to determine winner based on rotation
    setTimeout(() => {
      setIsSpinning(false);
      setShowResult(true);
      const normalizedRotation = (360 - (totalRotation % 360)) % 360;
      const index = Math.floor(normalizedRotation / (360 / segments.length));
      setWinningSegment(segments[index].label);
    }, 4000); // Matches the CSS transition duration
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 w-full max-w-md mx-auto">
      <div className="relative mb-12">
        {/* Pointer */}
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-30 filter drop-shadow-lg">
          <div className="text-5xl animate-bounce">👇</div>
        </div>

        {/* The Wheel Outer Ring */}
        <div className="clay-card p-4 bg-white rounded-full shadow-[20px_20px_60px_#bebebe,-20px_-20px_60px_#ffffff]">
          <div 
            className="relative w-72 h-72 rounded-full overflow-hidden border-8 border-white shadow-inner transition-transform duration-[4000ms] cubic-bezier(0.15, 0, 0.15, 1)"
            style={{ transform: `rotate(${rotation}deg)` }}
          >
            {segments.map((seg, i) => (
              <div 
                key={i}
                className="absolute top-0 left-1/2 w-1/2 h-full origin-left flex items-center justify-center"
                style={{ 
                  backgroundColor: seg.color,
                  transform: `rotate(${i * (360 / segments.length)}deg)`,
                  clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%)',
                  transformOrigin: '0% 50%'
                }}
              >
                <span 
                  className="absolute left-8 font-black text-[10px] uppercase tracking-tighter text-white drop-shadow-md whitespace-nowrap"
                  style={{ transform: `rotate(${(360 / segments.length) / 2}deg)` }}
                >
                  {seg.label}
                </span>
              </div>
            ))}
          </div>

          {/* Center Hub */}
          <button 
            onClick={spin}
            disabled={isSpinning}
            className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full z-20 flex items-center justify-center transition-all duration-300
              ${isSpinning ? 'scale-90 bg-slate-100 cursor-not-allowed' : 'clay-button bg-rose-500 hover:scale-110 active:scale-95'}
            `}
          >
            <span className="font-black text-white text-lg tracking-widest">
              {isSpinning ? '...' : 'SPIN'}
            </span>
          </button>
        </div>
      </div>

      <div className="h-32 flex flex-col items-center justify-center w-full text-center">
        {showResult ? (
          <div className="animate-pop-in">
            <h3 className="text-2xl font-black text-rose-600 mb-2">JACKPOT! 🎉</h3>
            <p className="text-slate-600 font-bold mb-6 italic">
              "You won: <span className="text-rose-500 uppercase">{winningSegment}</span>!"
            </p>
            <button 
              onClick={onComplete}
              className="clay-button bg-green-500 px-10 py-3 font-black text-xl animate-soft"
            >
              CLAIM PRIZE
            </button>
          </div>
        ) : (
          <p className="text-slate-400 font-medium italic">
            {isSpinning ? "The universe is deciding our fate..." : "Spin to win a piece of our future!"}
          </p>
        )}
      </div>

      <style>{`
        @keyframes pop-in {
          0% { transform: scale(0.5); opacity: 0; }
          70% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in { animation: pop-in 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }
        
        .cubic-bezier {
            transition-timing-function: cubic-bezier(0.15, 0, 0.15, 1);
        }
      `}</style>
    </div>
  );
};

export default SpinWheelGame;
