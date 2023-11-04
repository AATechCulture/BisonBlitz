import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.scss';
import LandingPage from './routes/LandingPage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {/* <Route path='/signup' element={<SignupPage />} /> */}
    </Routes>
  );
}

export default App;
