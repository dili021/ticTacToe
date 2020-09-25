import board from '../board';

describe('board', () => {
  const testBoard = board();
  it('returns the current state of the field', () => {
    expect(testBoard.getField()).toEqual([
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
  it('return the winning combinations', () => {
    expect(testBoard.getWinLines()).toEqual([
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]);
  });
  it('writes the current player\'s mark to the chosen spot', () => {
    testBoard.writeToField(2, 'X');
    expect(testBoard.getField()).toEqual([
      null,
      null,
      'X',
      null,
      null,
      null,
      null,
      null,
      null,
    ]);
  });
  it('doesn\'t return anything when writeToField is called', () => {
    expect(testBoard.writeToField(0, 'X')).toEqual(undefined);
  });
  it('throws an error if no arguments are passed', () => {
    expect(() => testBoard.writeToField()).toThrowError('Can\'t make a move with no vectors!');
  });
});
