const playerFactory = (name, mark) => ({
  name,
  mark,
});

const game = ((p1 = 'Player One', p2 = 'Player Two') => ({
  // players
  player1: playerFactory(p1, 'X'),
  player2: playerFactory(p2, 'O'),
  players: [this.player1, this.player2],
  // board

  board: (() => {
    const field = ['x', 'o', null, null, null, null, null, null, null];
    const cells = [...document.querySelectorAll('.cell')];
    const winLines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    const render = () => {
      for (let i = 0; i < field.length; i++) {
        cells[i].textContent = field[i];
      }
    };
    return { render };
  })(),
  // logic
  logic: (() => {})(),
}))();
