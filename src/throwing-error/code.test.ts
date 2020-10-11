import { throwError } from './code';

describe('throwError', () => {
  it('throws error', () => {
    expect(() => throwError(true)).toThrow();
    expect(() => throwError(true)).toThrowError('Error thrown');
  });

  it('does not throw error', () => {
    expect(() => throwError()).not.toThrow();
  });
});
