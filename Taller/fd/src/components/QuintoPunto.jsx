import React, { useState } from "react";

function OrderedList() {
  const [numbers, setNumbers] = useState([]);

  const handleNewNumber = (event) => {
    const newNumber = parseInt(event.target.value);
    const newNumbers = [...numbers, newNumber];
    setNumbers(newNumbers.sort((a, b) => a - b));
  };

  return (
    <div>
      <input type="number" onChange={handleNewNumber} />
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
    </div>
  );
}

export default OrderedList;
