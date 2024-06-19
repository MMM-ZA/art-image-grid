import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import CityGallery from './components/CityGallery';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Cards />} />
      <Route path="/city/:cityName" element={<CityGallery />} />
    </Routes>
  </Router>
);

export default App;
