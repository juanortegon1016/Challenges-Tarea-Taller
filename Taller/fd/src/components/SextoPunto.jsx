import React, { useState } from "react";

function OddNumbers() {
  const [limit, setLimit] = useState(0);
  const [oddNumbers, setOddNumbers] = useState([]);

  const handleLimitChange = (event) => {
    const newLimit = parseInt(event.target.value);
    setLimit(newLimit);
    setOddNumbers(getOddNumbers(newLimit));
  };

  const getOddNumbers = (newLimit) => {
    const oddNumbers = [];
    for (let i = 1; i < newLimit; i += 2) {
      oddNumbers.push(i);
    }
    return oddNumbers;
  };

  return (
    <div>
      <label htmlFor="limit">Ingrese un número:</label>
      <input
        type="number"
        id="limit"
        value={limit}
        onChange={handleLimitChange}
      />
      <ul>
        {oddNumbers.map((number) => (
          <li key={number}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default OddNumbers;
