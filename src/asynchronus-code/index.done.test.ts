import { returnAsyncBoolean } from './';

describe('returnAsyncBoolean', () => {
  it('resolves', async done => {
    returnAsyncBoolean(true).then(result => {
      expect(result).toBe(true);

      done();
    });
  });

  it('rejects', async done => {
    returnAsyncBoolean().catch(err => {
      expect(err).toBe(false);

      done();
    });
  });
});
