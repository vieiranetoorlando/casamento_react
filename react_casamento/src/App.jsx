import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fotos from './pages/Fotos';
import Presentes from './pages/Presentes';

function App() {
return (
<Routes>
<Route path="/" element={<Home />} />
<Route path="/fotos" element={<Fotos />} />
<Route path="/presentes" element={<Presentes />} />
</Routes>
);
}

export default App;