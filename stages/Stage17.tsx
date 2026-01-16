
import React from 'react';
import { StageProps } from '../types';

const Stage17: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-violet-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-violet-600 mb-6">I want to be your biggest fan again.</h2>
      <p className="text-slate-600 mb-8 font-medium">I want to cheer for your wins and sit with you in your losses. Like we used to.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-violet-500 w-full font-black text-xl">I missed my cheerleader.</button>
    </div>
  </div>
);
export default Stage17;
