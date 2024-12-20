import React from 'react';
import video from '../assets/videos/video.mp4'; // Altere o caminho para o local do seu vídeo

const Home = () => (
  <div className="section" style={{ maxWidth: '1200px', margin: '0 auto' }}>
    <h1></h1>
    <h1></h1>
    <h1 style={{ color: '#8b4f54' }}>"Como nos grandes romances do cinema, março trará nosso começo feliz. Prepare-se para viver esse momento inesquecível ao nosso lado."</h1>
    <video
      controls
      autoPlay
      muted
      loop // Adicione esta linha se quiser que o vídeo repita
      style={{ width: '100%', height: 'auto' }} // Ajusta o tamanho do vídeo
    >
      <source src={video} type="video/mp4" />
      Seu navegador não suporta o elemento de vídeo.
    </video>
  </div>
);

export default Home;
