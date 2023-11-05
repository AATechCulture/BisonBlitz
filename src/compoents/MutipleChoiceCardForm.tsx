import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import '../sass/LandingPage.scss';
import { CardComponent } from './CardComponent';

export type Card = {
  imageUrl: string;
  title: string;
};
type Props = {
  mainText: string;
  subText: string;
  toRoute: string;
  type?: string;
  onError: string;
  pref: 'name' | 'miles' | 'airport' | 'travel';
  cards: Card[];
};

const MutipleChoiceCardForm = (props: Props) => {
  const [value, setValue] = useState('');
  const [onceActive, setOnceActive] = useState(false);

  return (
    <motion.div
      className='mutiple-choice-card-overlay'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Link to={''}>
        <p className='first-name'>{props.mainText}</p>
        <p className='first-name-subtext'> {props.subText}</p>
        {props.cards.map((card, index) => (
          <CardComponent
            key={index}
            title={card.title}
            imageUrl={card.imageUrl}
            pref={props.pref}
          />
        ))}
      </Link>
    </motion.div>
  );
};

export { MutipleChoiceCardForm };
