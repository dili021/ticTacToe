/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */
import * as elements from './DOMelements.js';

import playerFactory from './factories.js';

import inputIsValid from './utils.js';

const board = () => {
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

  return {
    render,
    writeToField,
    getField,
    getWinLines,
  };
};
// init game
elements.startButton.addEventListener('click', () => {
  const game = ((gameBoard, p1, p2) => {
    const board = gameBoard();
    const player1 = playerFactory(p1 || 'Player One', 'X');
    const player2 = playerFactory(p2 || 'Player Two', 'O');
    elements.playerOne.textContent = `${player1.name} is ${player1.mark}`;
    elements.playerTwo.textContent = `${player2.name} is ${player2.mark}`;
    let currentPlayer = player1;

    const changePlayer = () => {
      currentPlayer = currentPlayer === player1 ? player2 : player1;
    };
    // check for end game
    const checkEndGame = () => {
      if (playerHasWon(currentPlayer) || gameIsDraw()) endGame();
    };

    const endGame = () =>
      showEndModal() && elements.grid.replayEventListener('click', game.play);

    const playerHasWon = player => {
      board.getWinLines().forEach(line => {
        if (line.every(spot => board.getField()[spot] === player.mark)) {
          elements.winner.textContent = `Congratulations ${currentPlayer.name} you won!`;
          endGame();
        }
      });
    };

    const gameIsDraw = () => {
      if (
        board.getField().every(spot => spot !== null) &&
        !playerHasWon(currentPlayer)
      ) {
        elements.winner.textContent = 'The game is draw. Want a rematch?';
        endGame();
      }
    };

    const showEndModal = () => {
      elements.endModal.style.display = 'grid';
    };

    const play = e => {
      const index = e.target.dataset.cellIdx;
      const { mark } = currentPlayer;
      if (!inputIsValid(board, index)) return;
      board.writeToField(index, mark);
      checkEndGame(board);
      changePlayer();
      board.render();
    };

    return { play };
  })(board, elements.playerOneInput.value, elements.playerTwoInput.value);
  elements.grid.addEventListener('click', game.play);
});

export default board;
