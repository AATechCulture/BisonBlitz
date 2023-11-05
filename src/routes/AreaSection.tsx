import React from 'react';
import {
  Card,
  MutipleChoiceCardForm,
} from '../compoents/MutipleChoiceCardForm';
import { Link } from 'react-router-dom';

type Props = {};

const AreaSection = (props: Props) => {
  const cards: Card[] = [
    {
      title: 'Fairly Close',
      imageUrl:
        'https://clipart-library.com/newhp/top-60-airplane-clip-art-vector-graphics-and-illustrations-istock-prodigous-clipart-attractive-7.jpg',
    },
    {
      title: 'Somewehre in the middle',
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
    <MutipleChoiceCardForm
      mainText='What type of sceeery do you like'
      subText=''
      toRoute='/survey:question:3'
      onError=''
      pref='travel'
      cards={cards}
    />
  );
};

export { AreaSection };
