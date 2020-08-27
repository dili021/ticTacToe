export const isSpotFree = idx => field[idx] === null;
export const validIndex = idx => idx >= 0 && idx <= 8;
//
export const inputIsValid = idx => {
  return isSpotFree(idx) && validIndex(idx);
};

export const checkForWinner = board => {};

// export default {
//   inputIsValid,
//   isSpotFree,
//   validIndex,
// };
