import Failure from 'src/common/errors/Failure';

abstract class AuthFailure extends Failure {
  protected constructor(error: string, public readonly details?: object) {
    super(error);
  }
}

export default AuthFailure;
