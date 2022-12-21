import Failure from '../errors/Failure';

interface UseCase<TParam, TReturn> {
  execute(param: TParam): PromiseOr<TReturn | Failure>;
}

export default UseCase;
