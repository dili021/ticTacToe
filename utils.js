const isSpotFree = (board, idx) => {
  return board.getField()[idx] === null;
};
const validIndex = idx => idx >= 0 && idx <= 8;
export const inputIsValid = (board, idx) => {
  return isSpotFree(board, idx) && validIndex(idx);
};