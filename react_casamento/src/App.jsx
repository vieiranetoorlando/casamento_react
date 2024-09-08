
import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import Home from './pages/Home';
import Fotos from './pages/Fotos';
import Presentes from './pages/Presentes';
import Confirmacao from './pages/Confirmacao';
import Informacoes from './pages/Informacoes';
import Footer from './components/Footer';
import background from './assets/images/background.jpg';
import './index.css';

function App() {
const backgroundStyle = {
backgroundImage: `url(${background})`,
backgroundSize: 'cover',
backgroundPosition: 'center',
minHeight: '100vh',
width: '100%',
};

const navAnimation = useSpring({
from: { opacity: 0, transform: 'translateY(-20px)' },
to: { opacity: 1, transform: 'translateY(0)' },
});

return (
<div style={backgroundStyle}>
<animated.nav style={navAnimation} className="navbar">
<ul className="nav-list">
<li><Link to="/">Home</Link></li>
<li><Link to="/fotos">Fotos</Link></li>
<li><Link to="/presentes">Presentes</Link></li>
<li><Link to="/confirmacao">Confirmação de Presença</Link></li>
<li><Link to="/informacoes">Informações do Evento</Link></li>
</ul>
</animated.nav>
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
