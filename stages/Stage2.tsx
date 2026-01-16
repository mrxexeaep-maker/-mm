
import React from 'react';
import { StageProps } from '../types';

const Stage2: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex items-center justify-center bg-blue-50 p-6">
    <div className="clay-card p-10 max-w-xl text-center">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Was I really that blind to your feelings?</h2>
      <p className="text-slate-600 mb-8 font-medium">I look back at our chats and I see the moment I failed you. It haunts me.</p>
      <button onClick={onNext} className="clay-button px-10 py-4 bg-blue-500 w-full font-black text-xl">You were, but I'm listening.</button>
    </div>
  </div>
);
export default Stage2;
