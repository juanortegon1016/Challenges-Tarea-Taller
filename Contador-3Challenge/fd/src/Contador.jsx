import React, { useState } from 'react';

function Contador() {
  const [valor, setValor] = useState(0);

  const sumar = () => {
    setValor(valor + 1);
  };

  const restar = () => {
    setValor(valor - 1);
  };

  const resetear = () => {
    setValor(0);
  };

  return (
    <div>
      <h2>Contador</h2>
      <p>Valor: {valor}</p>
      <button onClick={sumar}>Sumar</button>
      <button onClick={restar}>Restar</button>
      <button onClick={resetear}>Resetear</button>
    </div>
  );
}

export default Contador;