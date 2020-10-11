type ReturnAsyncBoolean = (bool?: boolean) => Promise<boolean>;

export const returnAsyncBoolean: ReturnAsyncBoolean = bool => {
  return new Promise((resolve, reject) => {
    if (bool) {
      resolve(true);
    } else {
      reject(false);
    }
  });
};
