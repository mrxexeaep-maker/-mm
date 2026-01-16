
import React, { useState } from 'react';
import { GameProps } from '../types';

const JigsawGame: React.FC<GameProps> = ({ onComplete }) => {
  const [pieces, setPieces] = useState([1, 0, 3, 2]); // shuffled indices
  const correct = [0, 1, 2, 3];

  const swap = (i: number) => {
    const next = (i + 1) % 4;
    const newPieces = [...pieces];
    [newPieces[i], newPieces[next]] = [newPieces[next], newPieces[i]];
    setPieces(newPieces);
  };

  const isSolved = pieces.every((v, i) => v === correct[i]);

  return (
    <div className="text-center">
      <div className="grid grid-cols-2 gap-1 bg-slate-200 p-1 rounded-lg mb-6">
        {pieces.map((p, i) => (
          <div 
            key={i} 
            onClick={() => swap(i)}
            className="w-24 h-24 bg-white cursor-pointer overflow-hidden border-2 border-slate-100"
          >
            <img 
              src="https://picsum.photos/seed/jigsawcat/200/200" 
              style={{ 
                transform: `translate(${(p % 2) * -50}%, ${Math.floor(p / 2) * -50}%) scale(2)`,
                transformOrigin: 'top left'
              }}
              alt="jigsaw"
            />
          </div>
        ))}
      </div>
      {isSolved ? (
        <button onClick={onComplete} className="clay-button px-8 py-2">Whole Again! Next</button>
      ) : (
        <p className="text-sm text-slate-500">Tap pieces to swap until the cat is whole.</p>
      )}
    </div>
  );
};
export default JigsawGame;
