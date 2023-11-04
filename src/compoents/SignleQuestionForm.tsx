import React, { DetailedHTMLProps, InputHTMLAttributes } from 'react';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { Link } from 'react-router-dom';

type Props = {
  mainText: string;
  subText: string;
  toRoute: string;
  type?: string;
};

const SignleQuestionForm = (props: Props) => {
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
  return (
    <div className='name-section'>
      <p className='first-name'>{props.mainText}</p>
      <p className='first-name-subtext'> {props.subText}</p>
      <div className='input-form-overlay'>
        <div className='inner-form-overlay'>
          <input
            className='form-input'
            type={props.type ? props.type : 'text'}
          />
          <button className='clean-button' type='submit'>
            <Link className='icon-form-next' to={props.toRoute}>
              <AiOutlineRightCircle size={30} />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export { SignleQuestionForm };
