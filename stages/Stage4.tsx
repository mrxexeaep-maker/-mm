
import React from 'react';
import { StageProps } from '../types';

const Stage4: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-green-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center border-b-8 border-green-200">
      <h2 className="text-3xl font-bold text-green-600 mb-6">If I promised to never be that person again...</h2>
      <p className="text-slate-600 mb-8 font-medium leading-relaxed">I've been in therapy/self-reflection. I've learned. I've grown. Would you believe in a new version of me?</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-green-500 w-full font-black text-xl">Show me you have.</button>
    </div>
  </div>
);
export default Stage4;
