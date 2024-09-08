import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const images = [
{
original: 'url-da-sua-foto-1.jpg',
thumbnail: 'url-da-sua-foto-1-thumb.jpg',
},
{
original: 'url-da-sua-foto-2.jpg',
thumbnail: 'url-da-sua-foto-2-thumb.jpg',
},
// Adicione mais fotos aqui
];

const Fotos = () => (
<div>
<h1>Nossas Fotos</h1>
<ImageGallery items={images} />
</div>
);

export default Fotos;