import { IsEmail, IsNotEmpty } from 'class-validator';

class LoginRequest {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
}

export default LoginRequest;
