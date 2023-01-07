import AuthFailure from './AuthFailure';

class UserAlreadyExists extends AuthFailure {
  constructor() {
    super('There is already an existing user with this email address.');
  }
}

export default UserAlreadyExists;
