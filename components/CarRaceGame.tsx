
import React, { useState, useEffect } from 'react';

interface Props { onComplete: () => void; }

const CarRaceGame: React.FC<Props> = ({ onComplete }) => {
  const [pos, setPos] = useState(0);
  const [finished, setFinished] = useState(false);
  const [isDriving, setIsDriving] = useState(false);

  useEffect(() => {
    if (pos >= 100) {
      setFinished(true);
    }
  }, [pos]);

  const handleDrive = () => {
    if (finished) return;
    setPos(p => Math.min(100, p + 5));
    setIsDriving(true);
    setTimeout(() => setIsDriving(false), 150);
  };

  return (
    <div className="w-full max-w-2xl clay-inset p-8 relative overflow-hidden bg-slate-100">
      <div className="h-48 relative border-b-4 border-dashed border-slate-300 mb-8 flex items-center">
        <div 
          className={`absolute transition-all duration-300 ease-out ${isDriving ? 'animate-bounce' : ''}`}
          style={{ left: `${pos}%`, transform: 'translateX(-50%)' }}
        >
          <div className="relative">
            {/* The Car Body - Claymorphic style */}
            <div className="bg-rose-500 w-28 h-14 rounded-t-3xl shadow-lg relative flex items-center justify-center border-b-4 border-rose-700">
                 <div className="bg-sky-200 w-12 h-6 rounded-t-xl absolute -top-4 left-4 border-2 border-white shadow-inner"></div>
                 <img src="https://picsum.photos/seed/catcar/60/60" className="w-10 h-10 rounded-full mb-1 border-2 border-white shadow-sm" alt="Driver" />
            </div>
            {/* Wheels */}
            <div className="flex justify-between px-2 -mt-2">
               <div className={`w-8 h-8 bg-slate-800 rounded-full border-4 border-slate-400 ${pos > 0 && !finished ? 'animate-spin' : ''}`}></div>
               <div className={`w-8 h-8 bg-slate-800 rounded-full border-4 border-slate-400 ${pos > 0 && !finished ? 'animate-spin' : ''}`}></div>
            </div>
            {/* Dust effect */}
            {isDriving && (
              <div className="absolute -left-8 bottom-0 flex gap-1">
                <div className="w-3 h-3 bg-slate-300 rounded-full animate-ping"></div>
                <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
              </div>
            )}
          </div>
          <p className="text-rose-800 text-xs text-center font-bold mt-2 bg-white/50 rounded px-1">Friendship 1</p>
        </div>

        <div className="absolute right-0 h-full w-6 bg-gradient-to-b from-red-500 to-red-600 flex items-center justify-center text-white font-black [writing-mode:vertical-lr] rounded-l-lg shadow-md border-l-4 border-white/30">
            FINISH LINE
        </div>
      </div>

      {!finished ? (
        <div className="flex flex-col items-center">
             <p className="text-slate-500 font-bold mb-6 text-center">TAP RAPIDLY TO OVERTAKE MY REGRETS!</p>
             <button 
                onClick={handleDrive}
                className="clay-button px-14 py-6 font-black text-3xl shadow-xl active:scale-95 transition-transform"
             >
                ACCELERATE!
             </button>
             <div className="mt-4 text-slate-400 text-sm">Distance: {Math.floor(pos)}%</div>
        </div>
      ) : (
        <div className="text-center p-4 bg-white/50 rounded-2xl clay-card">
            <h3 className="text-4xl font-black text-rose-500 mb-6 animate-bounce">🏆 YOU WON! 🏆</h3>
            <p className="text-slate-600 font-bold mb-6">Our friendship crossed the line!</p>
            <button 
                onClick={onComplete}
                className="clay-button bg-green-500 text-white px-12 py-4 rounded-xl font-black text-xl"
            >
                Claim Victory & Proceed
            </button>
        </div>
      )}
    </div>
  );
};

export default CarRaceGame;
