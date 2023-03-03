import React, { useState } from 'react';

function SameNumbers({num1, num2, num3}) {
  const [count, setCount] = useState(0);

  if (num1 === num2 || num1 === num3 || num2 === num3) {
    setCount(count + 1);
  }

  return (
    <div>
      <p>{count} de los 3 números son iguales.</p>
    </div>
  );
}

export default SameNumbers;
