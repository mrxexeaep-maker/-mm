
import React from 'react';
import { StageProps } from '../types';
import QuestionScreen from '../screens/QuestionScreen';

const Stage11: React.FC<StageProps> = ({ onNext }) => (
  <QuestionScreen 
    index={11} 
    text="Do you agree that we will prioritize laughing together over being right?" 
    onNext={onNext} 
  />
);
export default Stage11;
