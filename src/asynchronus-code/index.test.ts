import { returnAsyncBoolean } from './';

describe('returnAsyncBoolean', () => {
  describe.each([true, false])('', value => {
    it(`${value ? 'resolves' : 'rejects'}`, async () => {
      try {
        const result = await returnAsyncBoolean(value);
        expect(result).toBe(true);
      } catch (err) {
        expect(err).toBe(false);
      }
    });
  });
});
