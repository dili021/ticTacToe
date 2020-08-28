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

const game = (() => {
  const init = (gameBoard, p1 = 'Player One', p2 = 'Player Two') => {
    elements.startModal.style.display = 'none';
    const player1 = playerFactory(p1, 'X');
    const player2 = playerFactory(p2, 'O');
    let currentPlayer = player1;
    const board = gameBoard();
    (() => board.render())();
    elements.grid.addEventListener('click', e => {
      game.move(e, currentPlayer, player1, player2, board);
    });

    // elements.startModal.display = 'none';
    // clearBoard(board);
    // elements.grid.addEventListener('click', e => game.move(e));
  };

  const changePlayer = (player, p1, p2) => {
    player = player === player1 ? p2 : p1;
  };
  // check for end game
  const hasGameEnded = (player, board) => {
    if (playerHasWon(player, board) || gameIsDraw(player, board)) endGame();
  };

  const showEndModal = () => {
    elements.endModal.style.display = 'grid';
  };

  const endGame = () => {
    showEndModal() && grid.removeEventListener('click', game.move);
  };

  const playerHasWon = (player, board) => {
    board.getWinLines().forEach(line => {
      if (line.every(spot => board.getField()[spot] === player.mark)) {
        endGame();
      }
    });
  };

  const gameIsDraw = (player, board) => {
    if (
      board.getField().every(spot => spot !== null) &&
      !playerHasWon(player)
    ) {
      console.log("It's a draw!");
    }
  };

  // const askForInput = (board, index) => inputIsValid(board, index);
  // const validateMove = () => {};

  const move = (click, player, player1, player2, board) => {
    console.log(click.target);
    let index = click.target;
    const { mark } = player;
    if (!inputIsValid(board, index)) move();
    board.writeToField(index, mark);
    hasGameEnded(player, board);
    changePlayer(player, player1, player2);
    board.render();
  };

  return {
    move,
    init,
  };
})(board);

// (() => {
//   elements.grid.addEventListener('click', e => game.move(e));
// })();
export const restartButton = elements.endModal.querySelector('button');
restartButton.addEventListener('click', () => game.init());
export const startButton = elements.startModal.querySelector('button');
startButton.addEventListener('click', e => {
  e.preventDefault();
  game.init(
    board,
    elements.playerOneInput.value,
    elements.playerTwoInput.value
  );
});
