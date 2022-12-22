import Failure from 'src/common/errors/Failure';

class InvalidLoginRequest extends Failure {
  constructor(public readonly error: string) {
    super(error);
  }
}

export default InvalidLoginRequest;
