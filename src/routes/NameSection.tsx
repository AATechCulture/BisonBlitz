import React, { useEffect } from 'react';

import classnames from 'classnames';
import '../sass/LandingPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import { SingleQuestionForm } from '../compoents';
type Props = {};

const NameSection = (props: Props) => {
  return (
    <div className={'onboarding-section-base'}>
      <SingleQuestionForm
        mainText='What is your first name?'
        subText='We use this for your personal experince'
        toRoute='/survey:miles+section'
        onError='Please enter your first name 😊'
        pref='name'
      />
    </div>
  );
};

export default NameSection;
