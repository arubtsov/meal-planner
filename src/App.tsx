import React from 'react';

import { Routes, Route } from "react-router-dom";
import { MainLayout } from './components/';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}></Route>
    </Routes>
  );
}

export default App;
