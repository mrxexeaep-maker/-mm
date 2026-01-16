
import React, { useState, useEffect, useRef } from 'react';
import IntroScreen from './screens/IntroScreen';
import PetGame from './components/PetGame';
import MemoryGame from './components/MemoryGame';
import CatchGame from './components/CatchGame';
import BalanceGame from './components/BalanceGame';
import MazeGame from './components/MazeGame';
import PopGame from './components/PopGame';
import UnwrapperGame from './components/UnwrapperGame';
import ClickStormGame from './components/ClickStormGame';
import MusicGame from './components/MusicGame';
import WhackGame from './components/WhackGame';
import SpinWheelGame from './components/SpinWheelGame';
import CarRaceGame from './components/CarRaceGame';
import CreativeApologyPage from './screens/CreativeApologyPage';
import BigApologyScreen from './screens/BigApologyScreen';
import FinalVerdictScreen from './screens/FinalVerdictScreen';
import { ScreenState } from './types';

const playSound = (type: 'click' | 'complete' | 'pop' | 'race') => {
  const sounds = {
    click: 'https://actions.google.com/sounds/v1/ui/click_01.ogg',
    complete: 'https://actions.google.com/sounds/v1/foley/wind_chime_vibrant.ogg',
    pop: 'https://actions.google.com/sounds/v1/cartoon/pop_01.ogg',
    race: 'https://actions.google.com/sounds/v1/transportation/car_passing_fast.ogg'
  };
  const audio = new Audio(sounds[type]);
  audio.volume = 0.2;
  audio.play().catch(() => {});
};

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<ScreenState>('intro');
  const [musicPlaying, setMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize background music
  useEffect(() => {
    // Soft, uplifting ambient melody
    const audio = new Audio('https://actions.google.com/sounds/v1/ambiences/soft_gentle_wind.ogg');
    audio.loop = true;
    audio.volume = 0.15;
    audioRef.current = audio;

    return () => {
      audio.pause();
    };
  }, []);

  // Control music based on screen and user interaction
  useEffect(() => {
    if (audioRef.current) {
      if (currentScreen === 'final_verdict') {
        // Fade out music for the final verdict to make it more emotional/dramatic
        const fadeOut = setInterval(() => {
          if (audioRef.current && audioRef.current.volume > 0.02) {
            audioRef.current.volume -= 0.02;
          } else {
            audioRef.current?.pause();
            clearInterval(fadeOut);
          }
        }, 200);
      } else if (musicPlaying) {
        audioRef.current.play().catch(() => {
            // Autoplay might be blocked until interaction
        });
      }
    }
  }, [currentScreen, musicPlaying]);

  const handleStartMusic = () => {
    setMusicPlaying(true);
  };

  const next = (target: ScreenState) => {
    playSound('complete');
    setCurrentScreen(target);
    if (!musicPlaying) handleStartMusic();
  };

  const Layout = ({ children, title }: { children: React.ReactNode, title: string }) => (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-pink-50" onClick={() => { playSound('click'); handleStartMusic(); }}>
      <h2 className="text-3xl font-bold text-rose-500 mb-8 font-pacifico">{title}</h2>
      <div className="clay-card p-8 w-full max-w-2xl flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );

  switch (currentScreen) {
    case 'intro': return <IntroScreen onNext={() => next('game_pet')} />;
    
    // Games Sequence - Wrapping game components inside Layout tags to correctly pass them as children
    case 'game_pet': return <Layout title="Pet the Sad Cat"><PetGame onComplete={() => next('game_memory')} /></Layout>;
    case 'game_memory': return <Layout title="Remember Our Joy"><MemoryGame onComplete={() => next('game_catch')} /></Layout>;
    case 'game_catch': return <Layout title="Catch My Love"><CatchGame onComplete={() => next('game_balance')} /></Layout>;
    case 'game_balance': return <Layout title="Balance Our Friendship"><BalanceGame onComplete={() => next('game_maze')} /></Layout>;
    case 'game_maze': return <Layout title="Find the Way Back"><MazeGame onComplete={() => next('game_pop')} /></Layout>;
    case 'game_pop': return <Layout title="Pop the Bad Vibes"><PopGame onComplete={() => next('game_unwrapper')} /></Layout>;
    case 'game_unwrapper': return <Layout title="Unwrap the Truth"><UnwrapperGame onComplete={() => next('game_click_storm')} /></Layout>;
    case 'game_click_storm': return <Layout title="Shower of Sorry"><ClickStormGame onComplete={() => next('game_music')} /></Layout>;
    case 'game_music': return <Layout title="A Song for You"><MusicGame onComplete={() => next('game_whack')} /></Layout>;
    case 'game_whack': return <Layout title="Whack the Grudges"><WhackGame onComplete={() => next('game_spin')} /></Layout>;
    case 'game_spin': return <Layout title="The Wheel of Mercy"><SpinWheelGame onComplete={() => next('game_race')} /></Layout>;
    case 'game_race': return <Layout title="Race to Forgiveness"><CarRaceGame onComplete={() => next('creative_1')} /></Layout>;
    
    // Creative Stages
    case 'creative_1': return <CreativeApologyPage id={1} title="The Peace Lily" message="Water our friendship. Even the driest desert can bloom again." action="Water 💧" onNext={() => next('creative_2')} />;
    case 'creative_2': return <CreativeApologyPage id={2} title="Digital Pinky Swear" message="I swear I'll never hurt you like that again." action="Pinky Swear 🤙" onNext={() => next('creative_3')} />;
    case 'creative_3': return <CreativeApologyPage id={3} title="Starry Regrets" message="Look at the sky. Each star is a time I wished I could take it back." action="Wish ✨" onNext={() => next('creative_4')} />;
    case 'creative_4': return <CreativeApologyPage id={4} title="The Echo of Sorry" message="If I could shout it from the mountains, I would." action="Echo 🗣️" onNext={() => next('creative_5')} />;
    case 'creative_5': return <CreativeApologyPage id={5} title="The Repairing Heart" message="Tap to stitch back the pieces I tore." action="Stitch 🧵" onNext={() => next('creative_6')} />;
    case 'creative_6': return <CreativeApologyPage id={6} title="Friendship Battery" message="Charge us back up to 100%." action="Charge 🔋" onNext={() => next('creative_7')} />;
    case 'creative_7': return <CreativeApologyPage id={7} title="The Eraser" message="Rub the screen to erase the bad days." action="Erase 🧼" onNext={() => next('creative_8')} />;
    case 'creative_8': return <CreativeApologyPage id={8} title="The Peace Dove" message="Release the dove to carry my apology." action="Release 🕊️" onNext={() => next('creative_9')} />;
    case 'creative_9': return <CreativeApologyPage id={9} title="The Rewind" message="I wish I could go back and change everything." action="Rewind 🕰️" onNext={() => next('creative_10')} />;
    case 'creative_10': return <CreativeApologyPage id={10} title="Infinity" message="I've said it 1,000 times, here is 1,001." action="Sorry #1001 🖋️" onNext={() => next('creative_11')} />;
    case 'creative_11': return <CreativeApologyPage id={11} title="The Guard" message="I will protect you from my mistakes from now on." action="Equip 🛡️" onNext={() => next('creative_12')} />;
    case 'creative_12': return <CreativeApologyPage id={12} title="The Compass" message="I lost my way, but you are my North Star." action="Find North 🧭" onNext={() => next('creative_13')} />;
    case 'creative_13': return <CreativeApologyPage id={13} title="Smile Jar" message="Collecting every smile I owe you." action="Open Jar 🫙" onNext={() => next('creative_14')} />;
    case 'creative_14': return <CreativeApologyPage id={14} title="The Bridge" message="Building trust one brick at a time." action="Place Brick 🧱" onNext={( ) => next('creative_15')} />;
    case 'creative_15': return <CreativeApologyPage id={15} title="The Broom" message="Sweep away the clouds of my stupidity." action="Sweep ☀️" onNext={() => next('creative_16')} />;
    case 'creative_16': return <CreativeApologyPage id={16} title="The Anchor" message="I'm staying put. I'm not going anywhere." action="Drop Anchor ⚓" onNext={() => next('creative_17')} />;
    case 'creative_17': return <CreativeApologyPage id={17} title="Sprout" message="I planted a seed of change. See it grow." action="Grow 🌿" onNext={() => next('creative_18')} />;
    case 'creative_18': return <CreativeApologyPage id={18} title="The Bottle" message="I sent this across the sea of my regret." action="Read Note 🍾" onNext={() => next('creative_19')} />;
    case 'creative_19': return <CreativeApologyPage id={19} title="The Key" message="This opens my heart's most honest chamber." action="Unlock 🔑" onNext={() => next('big_apology')} />;
    
    case 'big_apology': return <BigApologyScreen onNext={() => next('final_verdict')} />;
    case 'final_verdict': return <FinalVerdictScreen />;
    default: return <div>Error</div>;
  }
};

export default App;
