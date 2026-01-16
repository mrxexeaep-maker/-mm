
import React from 'react';
import { StageProps } from '../types';

const Stage8: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-cyan-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-cyan-600 mb-6 font-pacifico">You are irreplaceable.</h2>
      <p className="text-slate-600 mb-8 font-medium">I've met so many people, but nobody gets me like you do. Losing you would be the biggest mistake of my life.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-cyan-500 w-full font-black text-xl">I know I'm special.</button>
    </div>
  </div>
);
export default Stage8;
