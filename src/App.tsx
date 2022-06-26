import { Routes, Route, Navigate } from "react-router-dom";
import { MainLayout } from './components/';
import { Ingredients, Recepies } from './pages'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<Navigate to="/recepies" />} />
        <Route path="/recepies" element={<Recepies />} />
        <Route path="/ingredients" element={<Ingredients />} />
      </Route>
    </Routes>
  );
}

export default App;
