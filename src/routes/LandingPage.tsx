import React from 'react';
import { useNavigate } from 'react-router-dom';

import '../sass/LandingPage.scss';

type Props = {};

const LandingPage = (props: Props) => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/name-question');
  };
  return (
    <div className='landing-base'>
      <div className='photo-container'></div>
      <div className='content-container'>
        <p className='welcome-header'>
          Welcome to PL<span className='first-a-name'>A</span>
          <span className='second-a-name'>A</span>N-IT
        </p>
        <div className='subtext-container'>
          <p>
            This tool allows you to find a personalized flight based on your
            American Airlines based on your AAdvantage miles
          </p>
        </div>
        <button className='get-started-button' onClick={handleStartClick}>
          Let's start
        </button>
        Powered By:
        <div className=''>
          <hr className='line-breaker' />
          <div className='powered-section'>
            <img
              src='https://static.vecteezy.com/system/resources/previews/024/558/798/original/openai-chatgpt-logo-icon-free-png.png'
              className='open-ai-logo'
              alt=''
            />
            <p>OpenAI</p>
          </div>
          <hr className='line-breaker' />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
