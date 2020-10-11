import * as dependencies from '../common/dependencies';
import { callDependencies } from '../common/call-dependencies';

describe('callDependencies', () => {
  it('calls dependencies', () => {
    const firstSpy = jest.spyOn(dependencies, 'firstDependency');
    const secondSpy = jest.spyOn(dependencies, 'secondDependency');

    callDependencies(1);

    expect(firstSpy).toHaveBeenCalledTimes(1);
    expect(firstSpy).toHaveBeenCalledWith(1 / 2);

    expect(secondSpy).toHaveBeenCalledTimes(1);
  });
});
