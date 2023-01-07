import Failure from 'src/common/errors/Failure';
import AuthFailure from './AuthFailure';

class UserNotCreated extends AuthFailure {
  constructor(public readonly details?: object) {
    super('User not created.', details);
  }
}
