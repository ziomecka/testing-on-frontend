export const throwError = (shouldThrow?: boolean): void => {
  if (shouldThrow) {
    throw new Error('Error thrown');
  }
};
