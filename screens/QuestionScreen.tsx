
import React from 'react';

interface Props {
  index: number;
  text: string;
  onNext: () => void;
}

const QuestionScreen: React.FC<Props> = ({ index, text, onNext }) => (
  <div className="h-screen flex flex-col items-center justify-center bg-pink-50 p-6">
    <div className="clay-card p-10 max-w-2xl w-full flex flex-col items-center text-center">
      <div className="mb-6 p-2 clay-inset bg-white rounded-3xl">
        <img 
          src="https://m.media-amazon.com/images/I/41-lS0p6KDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg" 
          className="w-64 h-36 rounded-2xl object-cover shadow-inner opacity-90 animate-float"
          alt="Begging Cat"
        />
      </div>
      
      <div className="text-rose-400 font-black mb-4 uppercase tracking-widest text-sm">STAGE {index} / 10</div>
      
      <h2 className="text-3xl font-bold text-slate-800 mb-10 leading-snug px-4">
        "{text}"
      </h2>
      
      <div className="flex flex-col sm:flex-row gap-4 w-full px-8">
        <button 
          onClick={onNext}
          className="clay-button bg-green-500 flex-1 py-4 font-black text-xl hover:scale-105"
        >
          YES, I DO
        </button>
        <button 
          onClick={onNext}
          className="clay-button bg-rose-300 flex-1 py-4 font-black text-xl hover:scale-105"
        >
          I'M TRYING...
        </button>
      </div>
    </div>
    
    <div className="mt-8 text-rose-300 font-medium animate-pulse">
      Every answer brings us closer...
    </div>
  </div>
);

export default QuestionScreen;
