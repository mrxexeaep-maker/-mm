
import React from 'react';
import { StageProps } from '../types';

const Stage20: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-slate-900 p-6">
    <div className="clay-card p-12 max-w-2xl text-center bg-white shadow-[0_0_50px_rgba(255,255,255,0.3)]">
      <h2 className="text-4xl font-black text-slate-800 mb-6">The Final Threshold.</h2>
      <p className="text-slate-600 mb-10 text-xl font-medium leading-relaxed">You've walked through 19 stages of my regret. Only one thing remains. My absolute, unfiltered truth.</p>
      <button onClick={onNext} className="clay-button px-16 py-6 bg-slate-800 text-white w-full font-black text-2xl animate-pulse">SHOW ME THE TRUTH</button>
    </div>
  </div>
);
export default Stage20;
