import React, { useEffect, useState } from 'react';
import './App.scss';

const initMatrix = [];

function App() {
  const [matrix, setMatrix] = useState(initMatrix);
  const [matrixSize, setMatrixSize] = useState(3);
  const [currentPlayer, setCurrentPlayer] = useState('o');
  const [selRow, setSelRow] = useState(null);
  const [selCol, setSelCol] = useState(null);
  const [winner, setWinner] = useState(false);
  const [reset, setReset] = useState(false);

  useEffect(() => {

    setWinner(false);
    setSelCol(null);
    setSelRow(null);

    const row = new Array(matrixSize).fill(null);
    const tempMatrix = [];
    for (let i = 0; i < matrixSize; i++) {
      tempMatrix.push([...row]);
    }
    setMatrix(tempMatrix);
  }, [reset]);

  function squareClick(row, col) {
    if (!matrix[row][col] && !winner) {
      setSelCol(col);
      setSelRow(row);
      let nextPlayer = currentPlayer === 'x' ? 'o' : 'x';
      setCurrentPlayer(nextPlayer);
      const matrixCopy = [...matrix];
      matrixCopy[row][col] = nextPlayer;
      setMatrix(matrixCopy);
    }
  }

  function isWinner() {
    let vertical = true;
    let horizontal = true;
    let d1 = true;
    let d2 = true;

    if (selCol === null || selRow === null) {
      return;
    }

    for (let i = 0; i < matrixSize; i++) {
      if (matrix[i][selCol] !== currentPlayer) {
        vertical = false;
      }
      if (matrix[selRow][i] !== currentPlayer) {
        horizontal = false;
      }
      if (matrix[i][i] !== currentPlayer) {
        d1 = false;
      }
      if (matrix[i][matrixSize - i - 1] !== currentPlayer) {
        d2 = false;
      }
    }

    if (vertical || horizontal || d1 || d2) {
      setWinner(true);
    }
  }

  useEffect(() => {
    if (!winner) {
      isWinner();
    }
  });

  function resetGame() {
    setReset(!reset);
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <button onClick={resetGame}>Reset Game</button>
        <div>
          {matrix.map((valCol, indexCol) => (
            <div key={indexCol} className='col'>
              {valCol.map((valRow, indexRow) => (
                <div
                  key={indexRow}
                  onClick={() => {
                    squareClick(indexRow, indexCol);
                  }}
                  className='row'
                >
                  {matrix[indexRow][indexCol]}
                </div>
              ))}
            </div>
          ))}
        </div>
        <h2>{winner ? `Player ${currentPlayer} is the winner!` : ''}</h2>
      </header>
    </div>
  );
}

export default App;
