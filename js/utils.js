const validIndex = idx => idx >= 0 && idx <= 8;
const isSpotFree = (board, idx) => board.getField()[idx] === null;
const inputIsValid = (board, idx) => isSpotFree(board, idx) && validIndex(idx);

export default inputIsValid;
