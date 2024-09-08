
import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

import foto1 from '../assets/images/foto1.jpg';
import foto1Thumb from '../assets/images/foto1-thumb.jpg';
import foto2 from '../assets/images/foto2.jpg';
import foto2Thumb from '../assets/images/foto2-thumb.jpg';
import foto3 from '../assets/images/foto3.jpg';
import foto3Thumb from '../assets/images/foto3-thumb.jpg';

const images = [
{
original: foto1,
thumbnail: foto1Thumb,
},
{
original: foto2,
thumbnail: foto2Thumb,
},
{
original: foto3,
thumbnail: foto3Thumb,
},
// Adicione mais fotos aqui
];

const Home = () => (
<div className="gallery-container">
<h1>Bem-vindos ao nosso casamento!</h1>
<p>Estamos muito felizes em compartilhar este momento com vocês.</p>
<ImageGallery items={images} />
</div>
);

export default Home;