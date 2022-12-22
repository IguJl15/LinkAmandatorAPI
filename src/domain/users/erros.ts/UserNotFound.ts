import Failure from 'src/common/errors/Failure';

class UserNotFound extends Failure {
  constructor() {
    super('User not found');
  }
}

export default UserNotFound;
