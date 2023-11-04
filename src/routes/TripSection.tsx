import React from 'react';
import { SignleQuestionForm } from '../components';

type Props = {};

const TripSection = (props: Props) => {
  return (
    <div className='onboarding-with-mutiple'>
      <SignleQuestionForm
        mainText='What is your first name?'
        subText='We use this for your personal experince'
        toRoute='/miles-question'
      />
      <SignleQuestionForm
        mainText='What is your first name?'
        subText='We use this for your personal experince'
        toRoute='/miles-question'
      />
      <SignleQuestionForm
        mainText='What is your first name?'
        subText='We use this for your personal experince'
        toRoute='/miles-question'
      />
    </div>
  );
};
export { TripSection };
