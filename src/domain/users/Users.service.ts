import * as UuidProvider from 'uuid';
import LoginParameters from './dto/LoginParameters';
import RegisterParameters from './dto/RegisterParameters';
import User from './entities/User';
import AuthFailure from './erros.ts/AuthFailure';
import InvalidAuthenticationRequest from './erros.ts/InvalidAuthRequest';
import UserAlreadyExists from './erros.ts/UserAlreadyExists';
import UserNotCreated from './erros.ts/UserNotCreated';
import UserNotFound from './erros.ts/UserNotFound';
import UserRepository from './UserRepository';
import { Inject } from '@nestjs/common';

class UsersService {
  constructor(
    @Inject('UserRepository') private readonly repository: UserRepository,
  ) {}

  async login(loginRequest: LoginParameters): Promise<User | AuthFailure> {
    const errors = loginRequest.validate();
    if (errors != null) return new InvalidAuthenticationRequest(errors);

    const user = await this.repository.findByEmail(loginRequest.email);

    if (user == null) return new UserNotFound(); // nenhum usuário com este email encontrado
    if (user.password !== loginRequest.password) return new UserNotFound(); // senha incorreta

    return user;
  }

  async register(
    registerModel: RegisterParameters,
  ): Promise<User | AuthFailure> {
    const validate = registerModel.validate();
    if (validate != null) return new InvalidAuthenticationRequest(validate);

    console.log( this.repository);
    
    if (this.repository.findByEmail(registerModel.email) != null)
      return new UserAlreadyExists();

    const newUser = new User(
      UuidProvider.v4(),
      registerModel.name,
      registerModel.email,
      registerModel.password,
      new Date(),
    );

    const createdUser = await this.repository.save(newUser);

    if (createdUser == null)
      return new UserNotCreated('Erro ao criar usuário.');

    return createdUser;
  }
}

export default UsersService;
