import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import foto1 from '../assets/images/fotohome.jpg';
import foto1Thumb from '../assets/images/fotohome-thumb.jpg';

const images = [
  { original: foto1, thumbnail: foto1Thumb },
  // Adicione mais fotos aqui
];

const Home = () => (
  <div className="gallery-container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h1></h1>
    <h1></h1>
    <h1>"Como nos grandes romances do cinema, março trará nosso começo feliz. Prepare-se para viver esse momento inesquecível ao nosso lado."</h1>

    <ImageGallery items={images} />
  </div>
);

export default Home;
