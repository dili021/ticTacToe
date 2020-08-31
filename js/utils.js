const isSpotFree = (board, idx) => board.getField()[idx] === null;
const validIndex = idx => idx >= 0 && idx <= 8;

const inputIsValid = (board, idx) => isSpotFree(board, idx) && validIndex(idx);

export default inputIsValid;
