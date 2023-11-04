import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './routes/LandingPage';
import ClimatePage from './routes/ClimatePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      {/* <Route path='/signup' element={<SignupPage />} /> */}
      <Route path='/climate' element={<ClimatePage />} />
    </Routes>
  );
}

export default App;
