import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import foto1 from '../assets/images/foto1.jpg';
import foto1Thumb from '../assets/images/foto1-thumb.jpg';
import foto2 from '../assets/images/foto2.jpg';
import foto2Thumb from '../assets/images/foto2-thumb.jpg';
//import foto3 from '../assets/images/foto3.jpg';
//import foto3Thumb from '../assets/images/foto3-thumb.jpg';
import foto4 from '../assets/images/foto4.jpg';
import foto4Thumb from '../assets/images/foto4-thumb.jpg';
import foto5 from '../assets/images/foto5.jpg';
import foto5Thumb from '../assets/images/foto5-thumb.jpg';
import foto6 from '../assets/images/foto6.jpg';
import foto6Thumb from '../assets/images/foto6-thumb.jpg';
import foto7 from '../assets/images/foto7.jpg';
import foto7Thumb from '../assets/images/foto7-thumb.jpg';
import foto8 from '../assets/images/foto8.jpg';
import foto8Thumb from '../assets/images/foto8-thumb.jpg';
import foto9 from '../assets/images/foto9.jpg';
import foto9Thumb from '../assets/images/foto9-thumb.jpg';
import foto10 from '../assets/images/foto10.jpg';
import foto10Thumb from '../assets/images/foto10-thumb.jpg';
import foto11 from '../assets/images/foto11.jpg';
import foto11Thumb from '../assets/images/foto11-thumb.jpg';
import foto12 from '../assets/images/foto12.jpg';
import foto12Thumb from '../assets/images/foto12-thumb.jpg';
import foto13 from '../assets/images/foto13.jpg';
import foto13Thumb from '../assets/images/foto13-thumb.jpg';
import foto14 from '../assets/images/foto14.jpg';
import foto14Thumb from '../assets/images/foto14-thumb.jpg';
//import foto15 from '../assets/images/foto15.jpg';
//import foto15Thumb from '../assets/images/foto15-thumb.jpg';
import foto16 from '../assets/images/foto16.jpg';
import foto16Thumb from '../assets/images/foto16-thumb.jpg';
import foto17 from '../assets/images/foto17.jpg';
import foto17Thumb from '../assets/images/foto17-thumb.jpg';
import foto18 from '../assets/images/foto18.jpg';
import foto18Thumb from '../assets/images/foto18-thumb.jpg';

const images = [
  { original: foto1, thumbnail: foto1Thumb },
  { original: foto2, thumbnail: foto2Thumb },
  //{ original: foto3, thumbnail: foto3Thumb },
  { original: foto4, thumbnail: foto4Thumb },
  { original: foto5, thumbnail: foto5Thumb },
  { original: foto6, thumbnail: foto6Thumb },
  { original: foto7, thumbnail: foto7Thumb },
  { original: foto8, thumbnail: foto8Thumb },
  { original: foto9, thumbnail: foto9Thumb },
  { original: foto10, thumbnail: foto10Thumb },
  { original: foto11, thumbnail: foto11Thumb },
  { original: foto12, thumbnail: foto12Thumb },
  { original: foto13, thumbnail: foto13Thumb },
  { original: foto14, thumbnail: foto14Thumb },
  //{ original: foto15, thumbnail: foto15Thumb },
  { original: foto16, thumbnail: foto16Thumb },
  { original: foto17, thumbnail: foto17Thumb },
  { original: foto18, thumbnail: foto18Thumb },
];

const Fotos = () => (
  <div className="gallery-container">
    <h1>Nossas Fotos</h1>
    <ImageGallery items={images} />
  </div>
);

export default Fotos;
