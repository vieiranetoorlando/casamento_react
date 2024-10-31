import React from 'react';

const Informacoes = () => (
<div className="informacoes-container">
<h1>Informações do Evento</h1>
<p><strong>Data:</strong> 22 de Março de 2025</p>
<p><strong>Horário:</strong> 16:30</p>
<p>Endereço: Endereço Estr. Maria Dolores Piaia Lorato, 2684, Sorocaba - SP, 18017-366</p>
<div className="map-container">
<iframe
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.155123456789!2d-47.060123456789!3d-23.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x123456789abcdef!2sEspa%C3%A7o%20de%20Eventos%20Jardim%20Encantado!5e0!3m2!1spt-BR!2sbr!4v1234567890"
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