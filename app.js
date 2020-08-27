import { playerFactory } from './factories.js';
// import { checkForWinner, checkForDraw } from './utils.js';

// TODO const gameLogic = (() => {})();

const board = () => {
  const field = [null, null, null, null, null, null, null, null, null];
  const cells = [...document.querySelectorAll('.cell')];

  const writeToField = (idx, mark) => {
    field[idx] = mark;
  };

  const render = () => {
    for (let i = 0; i < field.length; i++) {
      cells[i].textContent = field[i];
    }
  };

  return { render, writeToField };
};

const game = ((gameBoard, p1 = 'Player One', p2 = 'Player Two') => {
  const board = gameBoard();
  const player1 = playerFactory(p1, 'X');
  const player2 = playerFactory(p2, 'O');
  let currentPlayer = player1;

  (() => {
    board.render();
  })();

  const changePlayer = () => {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };

  const move = e => {
    const { mark } = currentPlayer;
    const index = e.target.dataset.cellIdx;
    board.writeToField(index, mark);
    // checkForWinner(board);
    // checkForDraw();
    changePlayer();
    board.render();
  };

  return {
    move,
  };
})(board);

(() => {
  const grid = document.querySelector('.board');
  grid.addEventListener('click', e => game.move(e));
})();
