import React, { useState } from "react";

function DivideArray() {
  const [array, setArray] = useState([4, 8, 2, 6, 1, 9, 7, 5, 3, 10]);
  const [dividerIndex, setDividerIndex] = useState(0);
  const [error, setError] = useState(null);

  const handleDividerIndexChange = (event) => {
    const newDividerIndex = parseInt(event.target.value);
    if (isNaN(newDividerIndex)) {
      setError("El valor ingresado no es un número");
    } else if (newDividerIndex < 0 || newDividerIndex >= array.length) {
      setError("La posición ingresada no es válida para el arreglo actual");
    } else {
      setError(null);
      setDividerIndex(newDividerIndex);
    }
  };

  const dividedArray = array.map((num, i) => {
    if (i === dividerIndex) {
      return "DIVISION BY 0";
    } else {
      return num / array[dividerIndex];
    }
  });

  return (
    <div>
      <label htmlFor="dividerIndex">Ingrese la posición del divisor:</label>
      <input
        type="number"
        id="dividerIndex"
        value={dividerIndex}
        onChange={handleDividerIndexChange}
      />
      {error && <p>{error}</p>}
      <ul>
        {dividedArray.map((num, i) => (
          <li key={i}>{num}</li>
        ))}
      </ul>
    </div>
  );
}

export default DivideArray;
