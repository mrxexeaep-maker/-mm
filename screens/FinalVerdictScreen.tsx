
import React, { useState, useEffect, useRef } from 'react';

const FinalVerdictScreen: React.FC = () => {
  const [accepted, setAccepted] = useState(false);
  const [noButtonPos, setNoButtonPos] = useState({ top: 'auto', left: 'auto' });
  const [message, setMessage] = useState("Will you please be my best friend again?");
  const [clickCount, setClickCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const teleportNo = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Keep button within a safe margin of the container
    const randomX = Math.random() * (rect.width - 120);
    const randomY = Math.random() * (rect.height - 60);
    setNoButtonPos({ top: `${randomY}px`, left: `${randomX}px` });
    setClickCount(prev => prev + 1);
    
    const responses = [
      "Wait, that button is shy! 🙈",
      "It keeps moving! Magic? ✨",
      "Friendship portal activated! 🌀",
      "I think 'Yes' is easier to catch...",
      "Still trying to be mad? It's hard! 😂",
      "That button is on a break! ☕",
      "Just give in to the power of friendship!",
      "Best friends don't click No! ❤️"
    ];
    setMessage(responses[Math.min(clickCount, responses.length - 1)]);
    
    const audio = new Audio('https://actions.google.com/sounds/v1/ui/click_01.ogg');
    audio.playbackRate = 2.5;
    audio.play().catch(() => {});
  };

  if (accepted) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-emerald-50 text-center p-6 animate-in fade-in duration-1000">
        <div className="clay-card p-12 bg-white flex flex-col items-center max-w-2xl border-4 border-emerald-200 shadow-2xl">
          <div className="mb-8 p-2 clay-inset bg-white rounded-3xl animate-bounce">
            <img 
              src="https://m.media-amazon.com/images/I/41-lS0p6KDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg" 
              className="w-80 h-48 rounded-2xl object-cover shadow-2xl" 
              alt="Happy Friend Cat" 
            />
          </div>
          <h1 className="text-6xl font-pacifico text-emerald-600 mb-6">FRIENDS FOREVER!</h1>
          <p className="text-2xl text-slate-700 font-bold leading-relaxed px-4">
            Thank you for giving our friendship another shot. I promise to be the best friend you've ever had. Let's make some memories! 🫂
          </p>
          <div className="mt-8 flex gap-4">
             {['🤜','🤛','🔥','🥨','🍕'].map((e, i) => (
               <span key={i} className="text-5xl animate-bounce" style={{ animationDelay: `${i * 0.15}s` }}>{e}</span>
             ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-rose-50 p-8 relative overflow-hidden" ref={containerRef} onMouseMove={(e) => {
        // Extra check: if mouse is too close to "No" button, move it
        if (noButtonPos.top !== 'auto') {
            // Basic proximity check could go here if needed
        }
    }}>
      <div className="clay-card p-10 bg-white flex flex-col items-center max-w-2xl w-full z-10 border-4 border-rose-100 relative shadow-2xl">
        <div className="mb-6 p-2 clay-inset bg-white rounded-3xl">
          <img 
            src="https://m.media-amazon.com/images/I/41-lS0p6KDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg" 
            className="w-64 h-36 rounded-2xl object-cover shadow-inner opacity-90"
            alt="Begging Cat"
          />
        </div>
        <h1 className="text-4xl font-black text-slate-800 mb-4 text-center leading-tight">
          One Last Decision...
        </h1>
        <p className="text-xl text-rose-500 font-bold mb-12 text-center h-16 flex items-center px-4 italic">
          "{message}"
        </p>
        
        <div className="flex gap-8 items-center justify-center w-full relative h-40">
          <button 
            onClick={() => {
              setAccepted(true);
              const audio = new Audio('https://actions.google.com/sounds/v1/foley/wind_chime_vibrant.ogg');
              audio.play().catch(() => {});
            }}
            className="px-20 py-10 bg-green-500 text-white rounded-3xl font-black text-5xl shadow-2xl hover:scale-110 active:scale-90 transition-all z-20 border-b-8 border-green-700 animate-pulse"
          >
            YES!
          </button>

          <button 
            onMouseEnter={teleportNo}
            onClick={teleportNo}
            style={{ 
              position: noButtonPos.top === 'auto' ? 'relative' : 'absolute',
              top: noButtonPos.top,
              left: noButtonPos.left,
              transition: 'all 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
              zIndex: 30
            }}
            className="px-8 py-4 bg-slate-200 text-slate-400 rounded-2xl font-bold text-xl cursor-default shadow-md"
          >
            No
          </button>
        </div>
      </div>

      <div className="absolute bottom-10 left-0 w-full flex justify-around opacity-10 select-none pointer-events-none">
        <span className="text-9xl font-black rotate-12 uppercase">Besties</span>
        <span className="text-9xl font-black -rotate-12 uppercase">Friends</span>
      </div>
    </div>
  );
};

export default FinalVerdictScreen;
