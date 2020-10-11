import { callDependencies } from '../common';

interface Scenario {
  value: number;
  result: 'odd' | 'even' | null;
}

const scenarios: Scenario[] = [
  { value: 1, result: 'odd' },
  { value: 2, result: 'even' },
  { value: -1, result: null },
];

describe.each(scenarios)('callDependencies logs', ({ value, result }) => {
  it(`${result} when called with ${value}`, () => {
    const spy = jest.spyOn(console, 'log');

    callDependencies(value);

    if (result) {
      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy).toHaveBeenCalledWith(result);
    } else {
      expect(spy).not.toHaveBeenCalled();
    }
  });
});
