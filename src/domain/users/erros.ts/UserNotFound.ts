import Failure from 'src/common/errors/Failure';
import AuthFailure from './AuthFailure';

class UserNotFound extends AuthFailure {
  constructor(public readonly details?: any) {
    super('User not found', details);
  }
}

export default UserNotFound;
