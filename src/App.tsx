import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './routes/LandingPage';
import NameSection from './routes/NameSection';
import { MilesSection } from './routes/MilesSection';
import { TripSection } from './routes/TripSection';
import { AnimatePresence } from 'framer-motion';

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/name-section' element={<NameSection />} />
        <Route path='/miles-question' element={<MilesSection />} />
        <Route path='/trip-section' element={<TripSection />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
