import inputIsValid from '../utils';
import board from '../board';

describe('input validation', () => {
  const testBoard = board();
  it('returns true if the given index is valid and the cell is not occupied', () => {
    expect(inputIsValid(testBoard, 0)).toBe(true);
  });
  it('returns false if the index is out of bounds', () => {
    expect(inputIsValid(testBoard, 10)).toBe(false);
    expect(inputIsValid(testBoard, -10)).toBe(false);
  });
  it('returns false if the chosen spot is already occupied', () => {
    testBoard.writeToField(0, 'X');
    expect(inputIsValid(testBoard, 0)).toBe(false);
  });
});