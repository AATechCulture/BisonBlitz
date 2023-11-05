import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { motion } from 'framer-motion';

import '../sass/LandingPage.scss';
type Props = {
  mainText: string;
  subText: string;
  toRoute: string;
  type?: string;
  onError: string;
  pref: 'name' | 'miles' | 'airport' | 'travel';
};

const SingleQuestionForm = (props: Props) => {
  const [value, setValue] = useState('');
  const [onceActive, setOnceActive] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <motion.div
      className='name-section'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <p className='first-name'>{props.mainText}</p>
      <p className='first-name-subtext'> {props.subText}</p>
      <div
        className={`input-form-overlay ${
          onceActive && value === '' ? 'wrong-field' : ''
        }`}
      >
        <div className='inner-form-overlay'>
          <form onSubmit={handleSubmit} className='form-content'>
            <input
              className='form-input'
              type={props.type ? props.type : 'text'}
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
                if (value) {
                  setOnceActive(true);
                }
                window.localStorage.setItem(props.pref, JSON.stringify(value));
              }}
            />

            <button className='clean-button' type='submit'>
              {value !== '' ? (
                <Link to={props.toRoute}>
                  <AiOutlineRightCircle size={30} />
                </Link>
              ) : null}
            </button>
          </form>
        </div>
      </div>

      {(props.pref === 'miles' || props.pref === 'name') &&
        onceActive &&
        value === '' && <p>{props.onError}</p>}
      {props.pref === 'airport' && onceActive && value === '' && (
        <p>{props.onError}</p>
      )}
    </motion.div>
  );
};

export { SingleQuestionForm };
