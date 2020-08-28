import * as elements from './DOMelements.js';
import playerFactory from './factories.js';
import { inputIsValid } from './utils.js';
export const board = () => {
  const field = [null, null, null, null, null, null, null, null, null];
  const winLines = [
    // horizontal
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    // vertical
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    // diagonal
    [0, 4, 8],
    [2, 4, 6],
  ];

  const getField = () => field;

  const getWinLines = () => winLines;

  const writeToField = (idx, mark) => {
    field[idx] = mark;
  };

  const render = () => {
    for (let i = 0; i < field.length; i++) {
      elements.cells[i].textContent = field[i];
    }
  };

  return { render, writeToField, getField, getWinLines };
};

const game = ((gameBoard, p1 = 'Player One', p2 = 'Player Two') => {
  const board = gameBoard();
  const player1 = playerFactory(p1, 'X');
  const player2 = playerFactory(p2, 'O');

  let currentPlayer = player1;

  (() => board.render())();

  const changePlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };
  // check for end game
  const hasGameEnded = () => {
    console.log(playerHasWon(currentPlayer));
    if (playerHasWon(currentPlayer) || gameIsDraw()) endGame();
  };

  const showEndModal = () => {
    elements.endModal.style.display = 'grid';
  };

  const endGame = () => {
    showEndModal() && grid.removeEventListener('click', game.move);
  };

  const playerHasWon = player => {
    board.getWinLines().forEach(line => {
      if (line.every(spot => board.getField()[spot] === player.mark)) {
        endGame();
      }
    });
  };

  const gameIsDraw = () => {
    if (
      board.getField().every(spot => spot !== null) &&
      !playerHasWon(currentPlayer)
    ) {
      console.log("It's a draw!");
    }
  };

  const validateMove = () => {};

  const move = e => {
    const index = e.target.dataset.cellIdx;
    const { mark } = currentPlayer;
    if (!inputIsValid(board, index)) move();
    board.writeToField(index, mark);
    hasGameEnded(board);
    changePlayer();
    board.render();
  };

  return {
    move,
  };
})(board);

(() => {
  elements.grid.addEventListener('click', game.move);
})();
