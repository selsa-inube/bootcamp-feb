import { useState } from 'react';
import {StyledSection}  from './styles';


function Square({ value, onSquareClick, className }) {
  return (
    <button className={className} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares).winner  || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }

  const { winner, winningSquares } = calculateWinner(squares);
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  const rows = [];
  for (let i = 0; i < 3; i++) {
    const squaresRow = [];

    for (let j = 0; j < 3; j++) {
      const index = i * 3 + j;
      let className = "square";
      if ((winningSquares.includes(index))) {className+=' winner-square'};
      squaresRow.push(
        <Square key={index}
                value={squares[index]}
                className={className}
                onSquareClick={() => handleClick(index)}
        />
      );
    }

    rows.push(<div key={i} className="board-row">{squaresRow}</div>);
  }

  return (
    < >
      <div className="status">{status}</div>
      {rows}
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  const moves = history.map((squares, move) => {
    let description;
    if (move > 0) {
      if (move === currentMove) {
          return (<li key={move}><p>You are at move # {move}</p></li>);
      } else {
          description = 'Go to move #' + move;
      }
    } else {
      description = 'Go to game start';
    }
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );

  });

  return (
    <StyledSection>
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
    </StyledSection>
  );
}



function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return { winner: squares[a], winningSquares: [a, b, c] };
    }
  }
  return { winner: null, winningSquares: [] };
}
