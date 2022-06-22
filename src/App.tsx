import React from 'react';

import { Routes, Route, Navigate,  } from "react-router-dom";
import { MainLayout, Ingredients } from './components/';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/ingredients" />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Route>
    </Routes>
  );
}

export default App;
