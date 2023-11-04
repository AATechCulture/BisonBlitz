import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import classNames from 'classnames';

import { motion } from 'framer-motion';

type Props = {
  mainText: string;
  subText: string;
  toRoute: string;
  type?: string;
};

const SignleQuestionForm = (props: Props) => {
  const [value, setValue] = useState(''); // Use state to store the input value
  const [onceActive, setOnceActive] = useState(false); // Use state to store the input value

  //   const validateInput = (
  //     inputElement: DetailedHTMLProps<
  //       InputHTMLAttributes<HTMLInputElement>,
  //       HTMLInputElement
  //     >
  //   ) => {
  //     const value = inputElement.value.trim(); // Trim whitespace
  //     if (value === '') {
  //       inputElement.style.borderColor = 'red'; // Set border color to red if input is empty
  //     } else {
  //       inputElement.style.borderColor = ''; // Remove border color (reset to default)
  //     }
  //   };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(value);
  };

  //   useEffect(() => {
  //     console.log(onceActive && value.length === 0, 'tesitng');
  //     setValue(value);
  //   }, [value]);

  console.log(value.length === 0, 'check-me');
  return (
    <div className='name-section'>
      <p className='first-name'>{props.mainText}</p>
      <p className='first-name-subtext'> {props.subText}</p>
      <div
        className={`input-form-overlay ${
          onceActive && value === '' ? 'wrong-field' : ''
        }`}
      >
        <motion.div
          className='inner-form-overlay'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <form onSubmit={handleSubmit} className='form-content'>
            <input
              className='form-input'
              type={props.type ? props.type : 'text'}
              value={value} // Bind the input value to the state
              onChange={(e) => {
                setValue(e.target.value);
                if (value) {
                  setOnceActive(true);
                }
              }} // Update the state when input changes
            />

            <button className='clean-button' type='submit'>
              {value !== '' ? <AiOutlineRightCircle size={30} /> : null}
            </button>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export { SignleQuestionForm };
