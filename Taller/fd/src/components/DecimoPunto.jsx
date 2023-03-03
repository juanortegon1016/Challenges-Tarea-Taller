import React, { useState } from "react";

function Matrix() {
  const [matrix, setMatrix] = useState([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ]);

  const numRows = matrix.length;
  const numCols = matrix[0].length;

  const sumColumns = Array(numCols).fill(0);
  for (let j = 0; j < numCols; j++) {
    for (let i = 0; i < numRows; i++) {
      sumColumns[j] += matrix[i][j];
    }
  }

  const tableRows = matrix.map((row, i) => {
    const tableCells = row.map((cell, j) => {
      return <td key={j}>{cell}</td>;
    });
    return <tr key={i}>{tableCells}</tr>;
  });

  const sumRowCells = sumColumns.map((sum, j) => {
    return <td key={j}>{sum}</td>;
  });

  const table = (
    <table>
      <tbody>
        {tableRows}
        <tr>
          {sumRowCells}
        </tr>
      </tbody>
    </table>
  );

  return (
    <div>
      {table}
    </div>
  );
}

export default Matrix;
