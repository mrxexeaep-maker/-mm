
import React, { useState } from 'react';
import { GameProps } from '../types';

const MusicGame: React.FC<GameProps> = ({ onComplete }) => {
  const [notes, setNotes] = useState<number[]>([]);
  const target = [0, 1, 2, 3];

  const play = (i: number) => {
    setNotes(prev => [...prev.slice(-3), i]);
    const audio = new Audio(`https://actions.google.com/sounds/v1/science_fiction/beep_mellow.ogg`);
    audio.playbackRate = 1 + (i * 0.2);
    audio.play().catch(() => {});
  };

  return (
    <div className="text-center">
      <p className="mb-6 font-bold text-slate-600">Play a melody of peace.</p>
      <div className="flex gap-4 mb-8">
        {['Do', 'Re', 'Mi', 'Fa'].map((n, i) => (
          <button 
            key={i} 
            onClick={() => play(i)}
            className="w-14 h-24 clay-button bg-white text-rose-500 font-bold flex items-end justify-center pb-4"
          >
            {n}
          </button>
        ))}
      </div>
      {notes.length >= 4 && (
        <button onClick={onComplete} className="clay-button px-8 py-2">That's Beautiful</button>
      )}
    </div>
  );
};
export default MusicGame;
