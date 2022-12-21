import Failure from 'src/common/errors/Failure';

class LongUrlNotFound extends Failure {
  constructor(givenCode: string) {
    super(`Url under code '${givenCode}' not found`);
  }
}

export { LongUrlNotFound };
