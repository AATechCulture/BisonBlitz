import React from 'react';
import { SingleQuestionForm } from '../compoents';

type Props = {};

const HomeAirportSection = (props: Props) => {
  return (
    <div className={'onboarding-section-base'}>
      <SingleQuestionForm
        mainText='Please Enter you Home Airport Code'
        subText='For example Baton Rouge Aiport would be BTR'
        toRoute='/survey:question:1'
        onError='Please enter a correct airport code'
        pref='airport'
      />
    </div>
  );
};

export { HomeAirportSection };
