import { returnAsyncBoolean } from './';

describe('returnAsyncBoolean', () => {
  it('resolves', () => {
    expect(returnAsyncBoolean(true)).resolves.toBe(true);
  });

  it('rejects', () => {
    expect(returnAsyncBoolean()).rejects.toBe(false);
  });
});
