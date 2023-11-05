import React from 'react';
import {
  Card,
  MutipleChoiceCardForm,
} from '../compoents/MutipleChoiceCardForm';
import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
import { v4 as uuidv4 } from 'uuid';
import { SingleQuestionForm } from '../compoents';

type Props = {};

const IdealTimeing = (props: Props) => {
  const generateUniqueID = () => {
    const uniqueID: string = uuidv4();
    return uniqueID;
  };

  const cards: Card[] = [
    {
      title: 'Closer to home airport',
      imageUrl:
        'https://clipart-library.com/newhp/top-60-airplane-clip-art-vector-graphics-and-illustrations-istock-prodigous-clipart-attractive-7.jpg',
    },
    {
      title: 'Somewhere in the middle',
      imageUrl:
        'https://t3.ftcdn.net/jpg/03/62/61/04/360_F_362610466_igW2Bdxk9keisDxpftdxMCGLkyhPeY6D.jpg',
    },
    {
      title: 'Out of country',
      imageUrl:
        'https://clipart-library.com/newhp/top-60-airplane-clip-art-vector-graphics-and-illustrations-istock-prodigous-clipart-attractive-7.jpg',
    },
  ];

  return (
    <div className='onboarding-section-base'>
      <SingleQuestionForm
        mainText={'What is your ideal distance'}
        subText='Please enter in miles'
        toRoute={'/load-data-flight-information'}
        onError=''
        pref={'travel'}
      />
    </div>
  );
};

export { IdealTimeing };
