import React from 'react';

const Informacoes = () => (
  <div className="informacoes-container">
    <h1>Informações do Evento</h1>
    <p><strong>Data:</strong> 22 de Março de 2025</p>
    <p><strong>Horário:</strong> 16:30</p>
    <p>Endereço: Estr. Maria Dolores Piaia Lorato, 2684, Sorocaba - SP, 18017-366</p>
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.618528438226!2d-47.40638049999999!3d-23.510245899999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cf6106b8917c6b%3A0xa9def70aaab2f6df!2sEstr.%20Maria%20Dolores%20Piaia%20Lorato%2C%202684%2C%20Sorocaba%20-%20SP%2C%2018017-366!5e0!3m2!1spt-BR!2sbr!4v1730420622922!5m2!1spt-BR!2sbr"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Local do Evento"
      ></iframe>
    </div>
  </div>
);

export default Informacoes;
