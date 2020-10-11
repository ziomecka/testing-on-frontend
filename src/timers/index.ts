type LogWithDelay = (delay?: number) => void;

export const logWithDelay: LogWithDelay = (delay = 1) => {
  setTimeout(() => console.log('async console log'), delay);
};
