
export type ScreenState = 
  | 'intro'
  | 'stage_1' | 'stage_2' | 'stage_3' | 'stage_4' | 'stage_5'
  | 'stage_6' | 'stage_7' | 'stage_8' | 'stage_9' | 'stage_10'
  | 'stage_11' | 'stage_12' | 'stage_13' | 'stage_14' | 'stage_15'
  | 'stage_16' | 'stage_17' | 'stage_18' | 'stage_19' | 'stage_20'
  | 'big_apology'
  | 'final_verdict';

export interface StageProps {
  onNext: () => void;
}

export interface GameProps {
  onComplete: () => void;
}
