import React from 'react';
import { Route, Routes } from 'react-router-dom';

import LandingPage from './routes/LandingPage';
import NameSection from './routes/NameSection';
import { MilesSection } from './routes/MilesSection';
import { TripSection } from './routes/TripSection';
import { AnimatePresence } from 'framer-motion';
import { HomeAirportSection } from './routes/HomeAirportSection';
import { IdealTimeing } from './routes/IdealTimeing';
import { GetFlightData } from './routes/GetFlightData';

function App() {
  return (
    <AnimatePresence>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/survey:name+section' element={<NameSection />} />
        <Route path='/survey:miles+section' element={<MilesSection />} />
        <Route
          path='/survey:home+airport+section'
          element={<HomeAirportSection />}
        />
        <Route path='/survey:question:1' element={<IdealTimeing />} />
        {/* <Route path='/survey:question:2' element={<IdealTimeing />} /> */}
        {/* <Route path='/survey:question:3' element={<IdealTimeing />} /> */}
        <Route
          path='/load-data-flight-information'
          element={<GetFlightData />}
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
