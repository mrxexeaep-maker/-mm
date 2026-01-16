
import React, { useState, useEffect } from 'react';
import { GameProps } from '../types';

const MemoryGame: React.FC<GameProps> = ({ onComplete }) => {
  const icons = ['🐱', '💖', '🍪', '🌈'];
  const [cards, setCards] = useState(() => [...icons, ...icons].sort(() => Math.random() - 0.5));
  const [flipped, setFlipped] = useState<number[]>([]);
  const [solved, setSolved] = useState<number[]>([]);

  useEffect(() => {
    if (flipped.length === 2) {
      if (cards[flipped[0]] === cards[flipped[1]]) {
        setSolved(prev => [...prev, ...flipped]);
        setFlipped([]);
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  }, [flipped]);

  return (
    <div className="grid grid-cols-4 gap-4">
      {cards.map((card, i) => (
        <div 
          key={i}
          onClick={() => flipped.length < 2 && !flipped.includes(i) && !solved.includes(i) && setFlipped([...flipped, i])}
          className={`w-16 h-16 flex items-center justify-center text-2xl clay-card cursor-pointer transition-all ${flipped.includes(i) || solved.includes(i) ? 'bg-white' : 'bg-rose-200'}`}
        >
          {(flipped.includes(i) || solved.includes(i)) ? card : '?'}
        </div>
      ))}
      {solved.length === cards.length && (
        <button onClick={onComplete} className="clay-button col-span-4 mt-4 py-2 font-bold">Memories Restored!</button>
      )}
    </div>
  );
};
export default MemoryGame;
