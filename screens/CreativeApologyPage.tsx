
import React, { useState } from 'react';

interface Props {
  id: number;
  title: string;
  message: string;
  action: string;
  onNext: () => void;
}

const CreativeApologyPage: React.FC<Props> = ({ id, title, message, action, onNext }) => {
  const [activated, setActivated] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number, left: string, delay: string, color: string, duration: string }[]>([]);
  const [buttonBurst, setButtonBurst] = useState<{ id: number, x: number, y: number, color: string, size: number, delay: number }[]>([]);

  const handleAction = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (activated) return;
    setActivated(true);

    const colors = ['#f472b6', '#fb7185', '#34d399', '#60a5fa', '#fbbf24', '#a78bfa', '#ec4899', '#8b5cf6'];
    
    // Top-down screen confetti
    const newConfetti = Array.from({ length: 50 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
      duration: `${2 + Math.random() * 3}s`,
      color: colors[Math.floor(Math.random() * colors.length)]
    }));
    setConfetti(newConfetti);

    // Subtle Particle Burst around the button
    const burst = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 450, // Wider spread
      y: (Math.random() - 0.5) * 300, 
      color: colors[Math.floor(Math.random() * colors.length)],
      size: Math.random() * 8 + 4, // Varied sizes
      delay: Math.random() * 0.2 // Staggered start
    }));
    setButtonBurst(burst);

    const audio = new Audio('https://actions.google.com/sounds/v1/cartoon/pop_01.ogg');
    audio.volume = 0.3;
    audio.play().catch(() => {});

    setTimeout(onNext, 3500);
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-white p-6 overflow-hidden relative">
      {/* Global Screen Confetti */}
      <div className="absolute inset-0 pointer-events-none z-50">
        {confetti.map(p => (
          <div 
            key={p.id}
            className="absolute top-[-20px] w-3 h-3 rounded-sm animate-confetti-fall"
            style={{ 
              left: p.left, 
              backgroundColor: p.color,
              animationDelay: p.delay,
              animationDuration: p.duration
            }}
          />
        ))}
      </div>

      <div className={`clay-card p-10 max-w-xl w-full flex flex-col items-center text-center transition-all duration-700 ease-in-out ${activated ? 'scale-95 opacity-0 blur-md' : 'scale-100'}`}>
        <div className="text-rose-400 font-black mb-2 uppercase tracking-widest text-xs animate-pulse">
          HEALING STAGE {id} / 20
        </div>
        <h1 className="text-4xl font-pacifico text-slate-800 mb-6 drop-shadow-sm">{title}</h1>
        
        <div className="mb-8 p-4 clay-inset bg-slate-50 rounded-3xl relative overflow-hidden group">
          <img 
            src="https://m.media-amazon.com/images/I/41-lS0p6KDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg" 
            className={`w-64 h-36 rounded-2xl object-cover shadow-inner transition-transform duration-700 ${activated ? 'scale-125' : 'animate-float group-hover:scale-105'}`}
            alt="Begging Cat"
          />
          {activated && (
            <div className="absolute inset-0 flex items-center justify-center text-8xl animate-pop-in">
                💝
            </div>
          )}
        </div>

        <p className="text-xl text-slate-600 font-bold mb-10 leading-relaxed italic px-4">
          "{message}"
        </p>

        <div className="relative w-full">
          {/* Particle Burst Elements */}
          {buttonBurst.map(p => (
            <div 
              key={p.id}
              className="absolute left-1/2 top-1/2 rounded-full z-0 animate-particle-burst"
              style={{ 
                backgroundColor: p.color,
                width: `${p.size}px`,
                height: `${p.size}px`,
                '--tx': `${p.x}px`,
                '--ty': `${p.y}px`,
                animationDelay: `${p.delay}s`
              } as React.CSSProperties}
            />
          ))}
          
          <button 
            onClick={handleAction}
            disabled={activated}
            className={`clay-button w-full py-5 font-black text-2xl transition-all duration-300 relative z-10 
              ${activated 
                ? 'bg-green-500 scale-95 opacity-50 shadow-none' 
                : 'bg-rose-500 animate-soft'
              }`}
          >
            <span className="relative z-10">{activated ? 'THANK YOU... ❤️' : action}</span>
          </button>
        </div>
      </div>

      {!activated && (
        <div className="mt-8 flex gap-2">
            {[...Array(20)].map((_, i) => (
                <div 
                  key={i} 
                  className={`h-2 rounded-full transition-all duration-500 ${i + 1 === id ? 'w-10 bg-rose-400' : 'w-2 bg-rose-100'}`} 
                />
            ))}
        </div>
      )}

      <style>{`
        @keyframes pop-in {
          0% { transform: scale(0); opacity: 0; }
          70% { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }
        .animate-pop-in { animation: pop-in 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards; }

        @keyframes confetti-fall {
          0% { transform: translateY(0) rotate(0deg); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        .animate-confetti-fall { animation: confetti-fall linear forwards; }

        @keyframes particle-burst {
          0% { 
            transform: translate(-50%, -50%) scale(0); 
            opacity: 1; 
          }
          20% {
             transform: translate(-50%, -50%) scale(1.2);
          }
          100% { 
            transform: translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0); 
            opacity: 0; 
          }
        }
        .animate-particle-burst { 
          animation: particle-burst 1.2s cubic-bezier(0.1, 0.8, 0.3, 1) forwards; 
        }
      `}</style>
    </div>
  );
};

export default CreativeApologyPage;
