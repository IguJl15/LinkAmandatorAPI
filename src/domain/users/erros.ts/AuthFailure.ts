import Failure from 'src/common/errors/Failure';

abstract class AuthFailure extends Failure {
  protected constructor(error: string, public readonly details?: any) {
    super(error);
  }
}

export default AuthFailure;
