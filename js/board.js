/* eslint-disable no-plusplus, no-return-assign, no-use-before-define,
import/extensions, implicit-arrow-linebreak, operator-linebreak  */

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
    if (!(idx, mark)) throw new Error('Can\'t make a move with no vectors!');
    field[idx] = mark;
  };


  return {
    writeToField,
    getField,
    getWinLines,
  };
};
export default board;