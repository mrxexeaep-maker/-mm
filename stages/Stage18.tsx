
import React from 'react';
import { StageProps } from '../types';

const Stage18: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-cyan-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-cyan-600 mb-6">Take all the time you need.</h2>
      <p className="text-slate-600 mb-8 italic">If you need a week, a month, or a year—I'll be waiting right here. I'm not going anywhere.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-cyan-500 w-full font-black text-xl">Thank you for waiting.</button>
    </div>
  </div>
);
export default Stage18;
