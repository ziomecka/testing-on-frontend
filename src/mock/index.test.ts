import { callDependencies, firstDependency, secondDependency } from '../common';

jest.mock('../common/dependencies', () => {
  const firstMock = jest.fn();
  const secondMock = jest.fn();

  return {
    ...jest.requireActual('../common'),
    firstDependency: firstMock,
    secondDependency: secondMock,
  };
});

describe('callDependencies', () => {
  it('calls dependencies', () => {
    callDependencies(1);

    expect(firstDependency).toHaveBeenCalledTimes(1);
    expect(firstDependency).toHaveBeenCalledWith(1 / 2);

    expect(secondDependency).toHaveBeenCalledTimes(1);
  });
});
