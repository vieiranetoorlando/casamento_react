import React, { useState } from 'react';

const Confirmacao = () => {
const [nome, setNome] = useState('');
const [email, setEmail] = useState('');
const [confirmado, setConfirmado] = useState(false);

const handleSubmit = (e) => {
e.preventDefault();
setConfirmado(true);
};

return (
<div className="confirmacao-container">
<h1>Confirmação de Presença</h1>
{confirmado ? (
<p>Obrigado por confirmar sua presença, {nome}!</p>
) : (
<form onSubmit={handleSubmit}>
<div>
<label>Nome:</label>
<input
type="text"
value={nome}
onChange={(e) => setNome(e.target.value)}
required
/>
</div>
<div>
<label>Email:</label>
<input
type="email"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
</div>
<button type="submit">Confirmar</button>
</form>
)}
</div>
);
};

export default Confirmacao;