
import React from 'react';
import { StageProps } from '../types';

const Stage6: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-orange-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-orange-600 mb-6">Am I just a memory now?</h2>
      <p className="text-slate-600 mb-8 italic">The thought of us being 'past tense' is unbearable. I'm fighting for our future.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-orange-500 w-full font-black text-xl">You're still here...</button>
    </div>
  </div>
);
export default Stage6;
