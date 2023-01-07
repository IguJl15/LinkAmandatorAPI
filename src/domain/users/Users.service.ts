import Failure from 'src/common/errors/Failure';
import UserRepository from './UserRepository';
import User from './entities/User';
import UserNotFound from './erros.ts/UserNotFound';
import LoginRequest from './dto/LoginRequest';
import InvalidAuthenticationRequest from './erros.ts/InvalidAuthRequest';
import RegisterModel from './dto/RegisterModel';
import * as UuidProvider from 'uuid';
import UserAlreadyExists from './erros.ts/UserAlreadyExists';

// Data transfer object

class UsersService {
  constructor(private readonly repository: UserRepository) {}

  async login(params: LoginRequest): Promise<User | Failure> {
    const validate = params.validate();
    if (validate != null) return new InvalidAuthenticationRequest(validate);

    const user = await this.repository.findByEmail(params.email);

    if (user == null) return new UserNotFound(); // nenhum usuário com este email encontrado
    if (user.password !== params.password) return new UserNotFound(); // senha incorreta

    return user;
  }

  async register(registerModel: RegisterModel): Promise<User | Failure> {
    const validate = registerModel.validate();
    if (validate != null) return new InvalidAuthenticationRequest(validate);

    if (this.repository.findByEmail(registerModel.email) != null)
      return new UserAlreadyExists();

    const newUser = new User(
      UuidProvider.v4(),
      registerModel.name,
      registerModel.email,
      registerModel.password,
      new Date(),
    );

    const createdUser = this.repository.save(newUser);

    return createdUser;
  }
}
