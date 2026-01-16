
import React, { useState, useEffect, useRef } from 'react';
import IntroScreen from './screens/IntroScreen';
import Stage1 from './stages/Stage1';
import Stage2 from './stages/Stage2';
import Stage3 from './stages/Stage3';
import Stage4 from './stages/Stage4';
import Stage5 from './stages/Stage5';
import Stage6 from './stages/Stage6';
import Stage7 from './stages/Stage7';
import Stage8 from './stages/Stage8';
import Stage9 from './stages/Stage9';
import Stage10 from './stages/Stage10';
import Stage11 from './stages/Stage11';
import Stage12 from './stages/Stage12';
import Stage13 from './stages/Stage13';
import Stage14 from './stages/Stage14';
import Stage15 from './stages/Stage15';
import Stage16 from './stages/Stage16';
import Stage17 from './stages/Stage17';
import Stage18 from './stages/Stage18';
import Stage19 from './stages/Stage19';
import Stage20 from './stages/Stage20';
import BigApologyScreen from './screens/BigApologyScreen';
import FinalVerdictScreen from './screens/FinalVerdictScreen';
import { ScreenState } from './types';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('intro');
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio('https://actions.google.com/sounds/v1/ambiences/soft_gentle_wind.ogg');
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;
    return () => audio.pause();
  }, []);

  useEffect(() => {
    if (audioRef.current && musicPlaying) {
      if (currentScreen === 'final_verdict') {
        const fadeOut = setInterval(() => {
          if (audioRef.current && audioRef.current.volume > 0.01) {
            audioRef.current.volume -= 0.01;
          } else {
            audioRef.current?.pause();
            clearInterval(fadeOut);
          }
        }, 100);
      } else {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [currentScreen, musicPlaying]);

  const next = (target: ScreenState) => {
    setCurrentScreen(target);
    setMusicPlaying(true);
  };

  switch (currentScreen) {
    case 'intro': return <IntroScreen onNext={() => next('stage_1')} />;
    case 'stage_1': return <Stage1 onNext={() => next('stage_2')} />;
    case 'stage_2': return <Stage2 onNext={() => next('stage_3')} />;
    case 'stage_3': return <Stage3 onNext={() => next('stage_4')} />;
    case 'stage_4': return <Stage4 onNext={() => next('stage_5')} />;
    case 'stage_5': return <Stage5 onNext={() => next('stage_6')} />;
    case 'stage_6': return <Stage6 onNext={() => next('stage_7')} />;
    case 'stage_7': return <Stage7 onNext={() => next('stage_8')} />;
    case 'stage_8': return <Stage8 onNext={() => next('stage_9')} />;
    case 'stage_9': return <Stage9 onNext={() => next('stage_10')} />;
    case 'stage_10': return <Stage10 onNext={() => next('stage_11')} />;
    case 'stage_11': return <Stage11 onNext={() => next('stage_12')} />;
    case 'stage_12': return <Stage12 onNext={() => next('stage_13')} />;
    case 'stage_13': return <Stage13 onNext={() => next('stage_14')} />;
    case 'stage_14': return <Stage14 onNext={() => next('stage_15')} />;
    case 'stage_15': return <Stage15 onNext={() => next('stage_16')} />;
    case 'stage_16': return <Stage16 onNext={() => next('stage_17')} />;
    case 'stage_17': return <Stage17 onNext={() => next('stage_18')} />;
    case 'stage_18': return <Stage18 onNext={() => next('stage_19')} />;
    case 'stage_19': return <Stage19 onNext={() => next('stage_20')} />;
    case 'stage_20': return <Stage20 onNext={() => next('big_apology')} />;
    case 'big_apology': return <BigApologyScreen onNext={() => next('final_verdict')} />;
    case 'final_verdict': return <FinalVerdictScreen />;
    default: return <div>Error</div>;
  }
};

export default App;
