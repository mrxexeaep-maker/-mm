
import React from 'react';
import { StageProps } from '../types';

const Stage9: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-indigo-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-indigo-600 mb-6">I am truly, deeply, horribly sorry.</h2>
      <p className="text-slate-600 mb-8 italic font-bold">I wish I could go back and punch my past self for being so stupid to you.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-indigo-500 w-full font-black text-xl">I wish you could too.</button>
    </div>
  </div>
);
export default Stage9;
