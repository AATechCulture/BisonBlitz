import React from 'react';

import '../sass/LandingPage.scss';
import { Link } from 'react-router-dom';
import { SignleQuestionForm } from '../components';
type Props = {};

const NameSection = (props: Props) => {
  return (
    <div className='onboarding-section-base'>
      <SignleQuestionForm
        mainText='What is your first name?'
        subText='We use this for your personal experince'
        toRoute='/miles-question'
      />
    </div>
  );
};

export default NameSection;
