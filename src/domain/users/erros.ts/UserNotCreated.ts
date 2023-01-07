import Failure from 'src/common/errors/Failure';
import AuthFailure from './AuthFailure';

class UserNotCreated extends AuthFailure {
  constructor(public readonly details?: any) {
    super('User not created.', details);
  }
}

export default UserNotCreated;
