import Failure from 'src/common/errors/Failure';
import UserRepository from './UserRepository';
import User from './entities/User';
import UserNotFound from './erros.ts/UserNotFound';
import LoginRequest from './dto/LoginRequest';
import InvalidLoginRequest from './erros.ts/InvalidLoginRequest';

// Data transfer object

class UsersService {
  constructor(private readonly repository: UserRepository) {}

  async login(params: LoginRequest): Promise<User | Failure> {
    const validate = params.validate();
    if(validate != null ) return new InvalidLoginRequest(validate.join("\n"));

    const user = await this.repository.findByEmail(params.email);

    if (user == null) return new UserNotFound(); // nenhum usuário com este email encontrado
    if (user.password !== params.password) return new UserNotFound(); // senha incorreta

    return user;
  }

  register(): void {

  }
}
