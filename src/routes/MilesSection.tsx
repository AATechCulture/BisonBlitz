import React, { useEffect, useState } from 'react';
import { SingleQuestionForm } from '../compoents';
import { Link, useNavigate } from 'react-router-dom';

type Props = {};

const MilesSection = (props: Props) => {
  const nav = useNavigate();
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const data = window.localStorage.getItem('name');
    console.log(data, 'data');
    if (data === null) {
      nav('/');
    } else {
      const parsedData = JSON.parse(data);
      setUserName(parsedData);
      // Now you can work with 'parsedData' which is guaranteed to be a string.
      // For example, you can set it to a state variable if needed.
    }
  }, [setUserName, nav]);

  return (
    <>
      {/* <div className='name-greating'>
        <p>Hello, {userName}</p>
      </div> */}
      <div className='onboarding-section-base'>
        <SingleQuestionForm
          mainText='How many AA miles do you have?'
          subText='Dont have an account? Sign up via aa.com'
          toRoute='/survey:home+airport+section'
          type='number'
          onError='Please enter your AA miles 😊'
          pref='miles'
        />
      </div>
    </>
  );
};
export { MilesSection };
