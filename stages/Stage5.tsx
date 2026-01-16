
import React from 'react';
import { StageProps } from '../types';

const Stage5: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-purple-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-purple-600 mb-6 font-pacifico">I feel so empty without my partner in crime.</h2>
      <p className="text-slate-600 mb-8">Remember our 3 AM talks? The world felt safe then. I broke that safety. I am so sorry.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-purple-500 w-full font-black text-xl">I miss those talks too.</button>
    </div>
  </div>
);
export default Stage5;
