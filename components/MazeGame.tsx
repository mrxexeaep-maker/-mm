
import React, { useState } from 'react';
import { GameProps } from '../types';

const MazeGame: React.FC<GameProps> = ({ onComplete }) => {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const goal = { x: 3, y: 3 };

  const move = (dx: number, dy: number) => {
    const nx = Math.max(0, Math.min(3, pos.x + dx));
    const ny = Math.max(0, Math.min(3, pos.y + dy));
    setPos({ x: nx, y: ny });
  };

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-4 grid-rows-4 gap-2 bg-slate-100 p-2 rounded-xl">
        {[...Array(16)].map((_, i) => {
           const x = i % 4; const y = Math.floor(i / 4);
           return (
             <div key={i} className="w-12 h-12 clay-card bg-white flex items-center justify-center text-xl">
               {pos.x === x && pos.y === y && '🐱'}
               {goal.x === x && goal.y === y && '🏠'}
             </div>
           );
        })}
      </div>
      <div className="grid grid-cols-3 gap-2 mt-6">
        <div /> <button onClick={() => move(0, -1)} className="clay-button p-3">↑</button> <div />
        <button onClick={() => move(-1, 0)} className="clay-button p-3">←</button>
        <button onClick={() => move(0, 1)} className="clay-button p-3">↓</button>
        <button onClick={() => move(1, 0)} className="clay-button p-3">→</button>
      </div>
      {pos.x === goal.x && pos.y === goal.y && (
        <button onClick={onComplete} className="clay-button mt-4 px-6 py-2">Home safe!</button>
      )}
    </div>
  );
};
export default MazeGame;
