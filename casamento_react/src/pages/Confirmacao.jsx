import React from 'react';

const Confirmacao = () => {
  return (
    <div className="confirmacao-container">
      <h1>Confirmação de Presença</h1>
      <p>Para confirmar sua presença, clique no link abaixo:</p>
      <a
        href="https://forms.gle/EB894WCuWEAb4nqb9"
        target="_blank"
        rel="noopener noreferrer"
        className="confirmacao-link"
      >
        Confirmar Presença
      </a>
    </div>
  );
};

export default Confirmacao;
