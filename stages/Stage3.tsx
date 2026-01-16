
import React from 'react';
import { StageProps } from '../types';

const Stage3: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-slate-100 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">The silence is the loudest thing in my room.</h2>
      <p className="text-slate-600 mb-8 italic font-medium">I miss your laugh more than I miss sleep. Is there even a small spark of us left?</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-slate-800 text-white w-full font-black text-xl">Maybe a small one...</button>
    </div>
  </div>
);
export default Stage3;
