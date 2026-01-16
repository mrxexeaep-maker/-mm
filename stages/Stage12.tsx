
import React from 'react';
import { StageProps } from '../types';
import QuestionScreen from '../screens/QuestionScreen';

const Stage12: React.FC<StageProps> = ({ onNext }) => (
  <QuestionScreen 
    index={12} 
    text="Do you agree to let me prove my loyalty as your best friend, one day at a time?" 
    onNext={onNext} 
  />
);
export default Stage12;
