
import React from 'react';
import { StageProps } from '../types';
import QuestionScreen from '../screens/QuestionScreen';

const Stage15: React.FC<StageProps> = ({ onNext }) => (
  <QuestionScreen 
    index={15} 
    text="Do you agree that radical honesty is the only way for us to stay friends forever?" 
    onNext={onNext} 
  />
);
export default Stage15;
