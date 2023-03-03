import React, { useState } from 'react';

function Saludo() {
  const [nombre, setNombre] = useState('');
  const [hora, setHora] = useState('');

  function handleNombreChange(event) {
    setNombre(event.target.value);
  }

  function handleHoraChange(event) {
    setHora(event.target.value);
  }

  function getSaludo() {
    const horaActual = parseInt(hora);
    if (horaActual >= 6 && horaActual < 12) {
      return `Buenos días, ${nombre}!`;
    } else if (horaActual >= 12 && horaActual < 20) {
      return `Buenas tardes, ${nombre}!`;
    } else {
      return `Buenas noches, ${nombre}!`;
    }
  }

  return (
    <div>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <br />
      <label>
        Hora:
        <input type="text" value={hora} onChange={handleHoraChange} />
      </label>
      <br />
      <p>{getSaludo()}</p>
    </div>
  );
}

export default Saludo;
