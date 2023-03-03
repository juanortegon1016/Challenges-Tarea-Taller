import React, { useState } from "react";

function Table() {
  const [numRows, setNumRows] = useState(0);
  const [numCols, setNumCols] = useState(0);

  const handleNumRowsChange = (event) => {
    const newNumRows = parseInt(event.target.value);
    setNumRows(newNumRows);
  };

  const handleNumColsChange = (event) => {
    const newNumCols = parseInt(event.target.value);
    setNumCols(newNumCols);
  };

  const tableRows = [];
  for (let i = 0; i < numRows; i++) {
    const tableCells = [];
    for (let j = 0; j < numCols; j++) {
      tableCells.push(
        <td key={j}>
          {i + 1},{j + 1}
        </td>
      );
    }
    tableRows.push(<tr key={i}>{tableCells}</tr>);
  }

  return (
    <div>
      <label htmlFor="numRows">Número de filas:</label>
      <input
        type="number"
        id="numRows"
        value={numRows}
        onChange={handleNumRowsChange}
      />
      <label htmlFor="numCols">Número de columnas:</label>
      <input
        type="number"
        id="numCols"
        value={numCols}
        onChange={handleNumColsChange}
      />
      <table>
        <tbody>{tableRows}</tbody>
      </table>
    </div>
  );
}

export default Table;
