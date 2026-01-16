
import React from 'react';
import { StageProps } from '../types';
import SpinWheelGame from '../components/SpinWheelGame';

const Stage10: React.FC<StageProps> = ({ onNext }) => (
  <div className="h-screen flex flex-col items-center justify-center bg-rose-100 p-6 overflow-hidden">
    <div className="mb-8 text-center">
      <h2 className="text-4xl font-black text-rose-600 mb-2 font-pacifico">The Wheel of Fortune!</h2>
      <p className="text-rose-800 font-bold italic">Spin to see what our future friendship holds...</p>
    </div>
    <div className="clay-card p-8 bg-white shadow-2xl scale-110">
      <SpinWheelGame onComplete={onNext} />
    </div>
  </div>
);
export default Stage10;
