import { logWithDelay } from './';

jest.useFakeTimers();

describe('logWithDelay', () => {
  it('throws error', () => {
    const spy = jest.spyOn(console, 'log');

    logWithDelay();

    jest.runAllTimers();

    expect(spy).toHaveBeenCalledTimes(1);
  });
});
