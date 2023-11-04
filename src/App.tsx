import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './routes/LandingPage';
import NameSection from './routes/NameSection';
import { MilesSection } from './routes/MilesSection';
import { TripSection } from './routes/TripSection';

function App() {
  return (
    <Routes>
      <Route path='/' element={<LandingPage />} />
      <Route path='/name-section' element={<NameSection />} />
      <Route path='/miles-question' element={<MilesSection />} />
      <Route path='/trip-section' element={<TripSection />} />
    </Routes>
  );
}

export default App;
