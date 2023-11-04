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
  onError: string;
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
              value={value} // Bind the input value to the state
              onChange={(e) => {
                setValue(e.target.value);
                if (value) {
                  setOnceActive(true);
                }
              }} // Update the state when input changes
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
      {onceActive && value === '' && <p>{props.onError}</p>}
    </motion.div>
  );
};

export { SignleQuestionForm };
