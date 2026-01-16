
import React from 'react';
import { StageProps } from '../types';

const Stage1: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-rose-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-rose-600 mb-6 font-pacifico">Do you know how much it hurts to be apart?</h2>
      <p className="text-slate-600 mb-8 font-medium italic">Every notification makes my heart skip, hoping it's you.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-rose-500 w-full font-black text-xl">I understand...</button>
    </div>
  </div>
);
export default Stage1;
