
import React from 'react';

interface Props { onNext: () => void; }

const IntroScreen: React.FC<Props> = ({ onNext }) => (
  <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-100 to-rose-200 text-center p-6">
    <div className="clay-card p-4 bg-white mb-8 animate-float">
      <img 
        src="https://m.media-amazon.com/images/I/41-lS0p6KDL._SR600%2C315_PIWhiteStrip%2CBottomLeft%2C0%2C35_SCLZZZZZZZ_.jpg" 
        className="w-72 h-48 rounded-3xl border-4 border-rose-100 object-cover shadow-inner" 
        alt="Begging Cat" 
      />
    </div>
    <h1 className="text-5xl font-pacifico text-rose-600 mb-4 drop-shadow-sm">Please Hear Me Out</h1>
    <p className="text-xl text-rose-800 max-w-lg mb-8 font-bold leading-relaxed">
      I know I've been difficult. I made this 20-stage quest to show you how much I truly regret my actions.
    </p>
    <button 
      onClick={onNext}
      className="clay-button px-14 py-5 text-2xl font-black uppercase tracking-widest"
    >
      Start My Quest
    </button>
  </div>
);

export default IntroScreen;
