
import React from 'react';
import { StageProps } from '../types';

const Stage7: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-emerald-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-emerald-600 mb-6">Can we start with a clean slate?</h2>
      <p className="text-slate-600 mb-8">No grudges, no ego. Just two friends who care about each other. Can we try?</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-emerald-500 w-full font-black text-xl">Maybe... one step at a time.</button>
    </div>
  </div>
);
export default Stage7;
