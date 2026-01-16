
import React from 'react';
import { StageProps } from '../types';

const Stage19: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-rose-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-rose-600 mb-6">We were a team.</h2>
      <p className="text-slate-600 mb-8 font-bold">Us against the world. I broke the team. I'm asking for a chance to rebuild the roster.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-rose-500 w-full font-black text-xl">Teamwork makes the dream work.</button>
    </div>
  </div>
);
export default Stage19;
