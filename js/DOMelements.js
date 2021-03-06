export const endModal = document.querySelector('#end-modal');
export const cells = [...document.querySelectorAll('.cell')];
export const grid = document.querySelector('.board');
export const startModal = document.querySelector('#start-modal');
export const playerOneInput = startModal.querySelector('#p1');
export const playerTwoInput = startModal.querySelector('#p2');
export const startButton = startModal.querySelector('button');
export const restartButton = endModal.querySelector('button');
export const winner = endModal.querySelector('#winner');
export const playerOne = document.querySelector('#player-one');
export const playerTwo = document.querySelector('#player-two');

// start and restart
restartButton.addEventListener('click', () => window.location.reload());
startButton.addEventListener('click', e => {
  e.preventDefault();
  startModal.style.display = 'none';
});


export const render = board => {
  for (let i = 0; i < board.getField().length; i += 1) {
    cells[i].textContent = board.getField()[i];
  }
};
