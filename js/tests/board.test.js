import board from '../board';


describe('board', () => {
  test('returns the current state of the field',
    () => {
      expect(board.getField()).toEqual([null, null, null, null, null, null, null, null, null]);
    });
});


// const render = () => {
//   for (let i = 0; i < field.length; i++) {
//     elements.cells[i].textContent = field[i];
//   }
// };