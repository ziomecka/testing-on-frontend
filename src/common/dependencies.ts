export const firstDependency = (num: number): number => {
  return num;
};

export const secondDependency = (num: number): void => {
  if (num < 0) {
    return;
  }

  const result = num / 2;
  const isOdd = result - Math.floor(result);

  if (isOdd) {
    console.log('odd');

    return;
  }

  console.log('even');
};
