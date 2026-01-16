
import React from 'react';
import { StageProps } from '../types';
import QuestionScreen from '../screens/QuestionScreen';

const Stage13: React.FC<StageProps> = ({ onNext }) => (
  <QuestionScreen 
    index={13} 
    text="Do you agree to always tell me when I'm crossing a boundary so I can fix it?" 
    onNext={onNext} 
  />
);
export default Stage13;
