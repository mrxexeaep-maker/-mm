
import React from 'react';
import { StageProps } from '../types';
import QuestionScreen from '../screens/QuestionScreen';

const Stage14: React.FC<StageProps> = ({ onNext }) => (
  <QuestionScreen 
    index={14} 
    text="Do you agree that our future adventures will be 100x better than our past mistakes?" 
    onNext={onNext} 
  />
);
export default Stage14;
