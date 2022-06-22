import React from 'react';

import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout, Ingredients } from './components/';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/ingredients" element={<Ingredients />} />
        <Route path="*" element={<Navigate to="/ingredients" replace />} />
      </Route>
    </Routes>
  );
}

export default App;
