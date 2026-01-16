
import React, { useState, useRef } from 'react';

interface Props {
  index: number;
  text: string;
  onNext: () => void;
}

const QuestionScreen: React.FC<Props> = ({ index, text, onNext }) => {
  // Fix: Explicitly type the position as 'relative' | 'absolute' to avoid type mismatch on line 23
  const [noButtonPos, setNoButtonPos] = useState({ top: '0px', left: '0px', position: 'relative' as 'relative' | 'absolute' });
  const [moveCount, setMoveCount] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const teleportNo = () => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.random() * (rect.width - 150);
    const y = Math.random() * (rect.height - 100);
    setNoButtonPos({ 
      top: `${y}px`, 
      left: `${x}px`, 
      position: 'absolute' 
    });
    setMoveCount(prev => prev + 1);
    
    // Play a tiny sound
    const audio = new Audio('https://actions.google.com/sounds/v1/ui/click_01.ogg');
    audio.playbackRate = 3;
    audio.play().catch(() => {});
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-50 p-6 overflow-hidden relative" ref={containerRef}>
      <div className="clay-card p-10 max-w-2xl w-full flex flex-col items-center text-center relative z-10">
        <div className="mb-6 p-2 clay-inset bg-white rounded-3xl">
          <img 
            src="https://m.media-amazon.com/images/I/41-lS0p6KDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg" 
            className="w-64 h-36 rounded-2xl object-cover shadow-inner opacity-90 animate-float"
            alt="Begging Cat"
          />
        </div>
        
        <div className="text-rose-400 font-black mb-4 uppercase tracking-widest text-sm">STAGE {index} / 20</div>
        
        <h2 className="text-3xl font-bold text-slate-800 mb-10 leading-snug px-4">
          "{text}"
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-6 w-full px-8 items-center justify-center min-h-[80px]">
          <button 
            onClick={onNext}
            className="clay-button bg-green-500 w-full sm:w-auto px-12 py-4 font-black text-xl hover:scale-110 active:scale-95 z-20"
          >
            I AGREE 🤝
          </button>
          
          <button 
            onMouseEnter={teleportNo}
            onClick={teleportNo}
            style={{ 
              top: noButtonPos.top, 
              left: noButtonPos.left, 
              position: noButtonPos.position,
              transition: 'all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
            className="clay-button bg-slate-300 w-full sm:w-auto px-8 py-3 font-bold text-lg text-slate-500 whitespace-nowrap opacity-80"
          >
            {moveCount > 5 ? "STILL NO? 😂" : "I DISAGREE"}
          </button>
        </div>
      </div>
      
      <div className="mt-8 text-rose-300 font-medium animate-pulse">
        {moveCount > 0 ? "Friendship is the only way forward! ✨" : "Every agreement heals a piece of us..."}
      </div>
    </div>
  );
};

export default QuestionScreen;
