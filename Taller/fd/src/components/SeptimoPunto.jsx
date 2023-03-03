import React, { useState } from "react";

function SalaryList() {
  const [salaries, setSalaries] = useState([]);
  const [error, setError] = useState(null);

  const handleSalarySubmit = (event) => {
    event.preventDefault();
    const newSalary = parseInt(event.target.elements.salary.value);
    if (isNaN(newSalary)) {
      setError("El valor ingresado no es un número");
    } else if (salaries.length >= 10) {
      setError("Ya se han ingresado 10 salarios");
    } else {
      setError(null);
      const newSalaries = [...salaries, newSalary];
      setSalaries(newSalaries);
    }
  };

  const handleIncreaseClick = () => {
    if (salaries.length < 10) {
      setError("Debe ingresar 10 salarios primero");
    } else {
      const increasedSalaries = salaries.map((salary) => salary * 1.08);
      console.log(increasedSalaries);
      // Aquí podrías imprimir los salarios en pantalla en lugar de mostrarlos en la consola
    }
  };

  return (
    <div>
      <form onSubmit={handleSalarySubmit}>
        <label htmlFor="salary">Ingrese un salario:</label>
        <input type="number" id="salary" />
        <button type="submit">Agregar salario</button>
      </form>
      {error && <p>{error}</p>}
      <button onClick={handleIncreaseClick}>Aumentar salarios</button>
    </div>
  );
}

export default SalaryList;
