
import React, { useMemo, useEffect, useRef } from 'react';

interface Props { onNext: () => void; }

const BigApologyScreen: React.FC<Props> = ({ onNext }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const apologyText = useMemo(() => {
    const intro = `My Dearest Friend,

I am writing this because I truly don't know how else to reach the depths of the sorrow I feel for how I treated you. In the past, I was abusive, selfish, and blind to the pain I was causing the one person who deserved only my kindness. I took your patience for granted. I took your loyalty as a given. I was wrong, and I am a different person now because the loss of your friendship broke me in a way I needed to be broken to grow.

I miss every single thing about our friendship. I miss the jokes that only we understood. I miss the way you'd call me out when I was being ridiculous. I miss the light you brought into every room. I am begging for your forgiveness not just because I want my friend back, but because I want you to know that I recognize your worth. You are a diamond, and I treated you like gravel. 

I have committed to 10,000 sorries here. It sounds like a lot, but it's only a fraction of the times I've said it in my head. Please scroll through, feel the weight of my regret, and know that I will never, ever let history repeat itself.

`;

    const sorries = Array.from({ length: 10000 })
      .map((_, i) => `${i + 1}. I AM SORRY.`)
      .join(" ");
    
    return intro + "\n\n" + sorries + "\n\nAND ONE LAST TIME: I AM SORRY FOR EVERYTHING.";
  }, []);

  return (
    <div className="min-h-screen bg-rose-50 p-4 md:p-12 flex flex-col items-center">
      <div className="clay-card bg-white p-6 md:p-12 w-full max-w-5xl shadow-2xl border-4 border-rose-100 relative overflow-hidden">
        <h1 className="text-4xl font-pacifico text-rose-600 mb-8 text-center animate-float">The 10,000 Sorries Wall</h1>
        
        <div className="mb-8 p-2 clay-inset bg-slate-50 rounded-2xl flex justify-center">
          <img 
            src="https://m.media-amazon.com/images/I/41-lS0p6KDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg" 
            className="w-full max-w-md h-64 object-cover rounded-xl shadow-md transition-transform hover:scale-105"
            alt="Begging Cat"
          />
        </div>

        <div 
          ref={scrollRef}
          className="w-full bg-rose-50 p-8 rounded-2xl shadow-inner h-[50vh] overflow-y-auto mb-8 custom-scrollbar border-2 border-rose-200"
        >
          <div className="text-lg leading-relaxed whitespace-pre-wrap font-serif text-slate-800">
            {apologyText}
          </div>
        </div>
        
        <div className="flex flex-col items-center gap-6">
          <div className="p-4 bg-yellow-50 rounded-xl border-2 border-yellow-200 text-yellow-800 text-sm italic font-bold text-center">
             "I will never abuse your heart again. I promise on my life."
          </div>
          
          <button 
            onClick={onNext}
            className="clay-button bg-rose-600 hover:bg-rose-500 text-white px-16 py-6 rounded-full font-black text-3xl shadow-xl transition-all transform hover:scale-110 active:scale-95 border-b-8 border-rose-800 w-full md:w-auto"
          >
            I FORGIVE YOU ❤️
          </button>
        </div>
      </div>
      
      <style>{`
        .custom-scrollbar::-webkit-scrollbar { width: 14px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: #fff1f2; border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: #fb7185; border-radius: 10px; border: 3px solid #fff1f2; }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover { background: #f43f5e; }
      `}</style>
    </div>
  );
};

export default BigApologyScreen;
