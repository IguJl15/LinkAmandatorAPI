import Failure from 'src/common/errors/Failure';
import AuthFailure from './AuthFailure';

class InvalidAuthenticationRequest extends AuthFailure {
  constructor(invalidFields: string[]) {
    super('Bad credentials values', invalidFields);
  }
}

export default InvalidAuthenticationRequest;