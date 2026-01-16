
import React from 'react';
import { StageProps } from '../types';

const Stage16: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-pink-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-pink-600 mb-6">I don't deserve this.</h2>
      <p className="text-slate-600 mb-8">I know forgiveness is a gift, not a right. I'm standing here with open hands, hoping for that gift.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-pink-500 w-full font-black text-xl">It's a heavy gift to give.</button>
    </div>
  </div>
);
export default Stage16;
