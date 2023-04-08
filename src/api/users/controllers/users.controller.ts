import {
  Body,
  Controller,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import UsersService from 'src/domain/users/Users.service';
import User from 'src/domain/users/entities/User';
import LoginRequest from '../dto/LoginRequest';
import Failure from 'src/common/errors/Failure';
import InvalidAuthRequest from 'src/domain/users/erros.ts/InvalidAuthRequest';
import UserNotFound from 'src/domain/users/erros.ts/UserNotFound';
import RegisterRequest from '../dto/RegisterRequest';
import UserNotCreated from 'src/domain/users/erros.ts/UserNotCreated';
import LoginParameters from 'src/domain/users/dto/LoginParameters';
import RegisterParameters from 'src/domain/users/dto/RegisterParameters';

@Controller('/login')
class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('')
  async login(@Body() loginRequest: LoginRequest): Promise<User> {
    const loginModel = new LoginParameters(
      loginRequest.email,
      loginRequest.password,
    );
    const result = await this.usersService.login(loginModel);

    if (result instanceof InvalidAuthRequest)
      throw new HttpException(result.error, HttpStatus.UNAUTHORIZED);
    if (result instanceof UserNotFound)
      throw new HttpException(result.error, HttpStatus.UNAUTHORIZED);
    if (result instanceof Failure)
      throw new HttpException(result.error, HttpStatus.INTERNAL_SERVER_ERROR);

    return result;
  }

  @Post('/register')
  async register(@Body() registerReq: RegisterRequest) {
    const registerModel = new RegisterParameters(
      registerReq.name,
      registerReq.email,
      registerReq.password,
      registerReq.passwordConfirmation,
    );
    const user = await this.usersService.register(registerModel);


    if (user instanceof InvalidAuthRequest)
      throw new HttpException(`${user.error}. ${(user.details as string[]).join(", ")}`, HttpStatus.UNAUTHORIZED);
    if (user instanceof UserNotCreated)
      throw new HttpException(user.error, HttpStatus.INTERNAL_SERVER_ERROR);
    if (user instanceof Failure)
      throw new HttpException(user.error, HttpStatus.INTERNAL_SERVER_ERROR);

    return user;
  }
}

export default UsersController;
