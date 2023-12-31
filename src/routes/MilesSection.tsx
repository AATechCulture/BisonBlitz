import React from 'react';
import { SignleQuestionForm } from '../components';

type Props = {};

const MilesSection = (props: Props) => {
  return (
    <div className='onboarding-section-base'>
      <SignleQuestionForm
        mainText='How many AA miles do you have?'
        subText='Dont have an account? Sign up via aa.com'
        toRoute='/trip-section'
        type='number'
      />
    </div>
  );
};
export { MilesSection };
