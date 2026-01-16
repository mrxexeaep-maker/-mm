
export type ScreenState = 
  | 'intro'
  | 'game_pet'
  | 'game_memory'
  | 'game_catch'
  | 'game_balance'
  | 'game_maze'
  | 'game_pop'
  | 'game_unwrapper'
  | 'game_click_storm'
  | 'game_music'
  | 'game_whack'
  | 'game_spin'
  | 'game_race'
  | 'creative_1' | 'creative_2' | 'creative_3' | 'creative_4' | 'creative_5'
  | 'creative_6' | 'creative_7' | 'creative_8' | 'creative_9' | 'creative_10'
  | 'creative_11' | 'creative_12' | 'creative_13' | 'creative_14' | 'creative_15'
  | 'creative_16' | 'creative_17' | 'creative_18' | 'creative_19'
  | 'big_apology'
  | 'final_verdict';

export interface GameProps {
  onComplete: () => void;
}
