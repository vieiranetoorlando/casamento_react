import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Fotos from './pages/Fotos';
import Presentes from './pages/Presentes';
import Confirmacao from './pages/Confirmacao';
import Informacoes from './pages/Informacoes';
import Footer from './components/Footer';

function App() {
return (
<div>
<nav>
<ul>
<li><Link to="/">Home</Link></li>
<li><Link to="/fotos">Fotos</Link></li>
<li><Link to="/presentes">Presentes</Link></li>
<li><Link to="/confirmacao">Confirmação de Presença</Link></li>
<li><Link to="/informacoes">Informações do Evento</Link></li>
</ul>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/fotos" element={<Fotos />} />
<Route path="/presentes" element={<Presentes />} />
<Route path="/confirmacao" element={<Confirmacao />} />
<Route path="/informacoes" element={<Informacoes />} />
</Routes>
<Footer />
</div>
);
}

export default App;