import { firstDependency, secondDependency } from './dependencies';

type CallDependencies = (firstArgument: number) => void;

export const callDependencies: CallDependencies = firstArgument => {
  firstDependency(firstArgument / 2);

  secondDependency(firstArgument);
};
