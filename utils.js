const isSpotFree = (board, idx) => {
  board.getField()[idx] === null;
};
const validIndex = idx => idx >= 0 && idx <= 8;

export const inputIsValid = (board, idx) =>
  isSpotFree(board, idx) && validIndex(idx);
// export const checkForWinner = board => {};

// export default {
//   inputIsValid,
//   isSpotFree,
//   validIndex,
// };
