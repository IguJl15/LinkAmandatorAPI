import { IsEmail, IsNotEmpty } from 'class-validator';

class RegisterRequest {
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  password: string;
  @IsNotEmpty()
  passwordConfirmation: string;

}

export default RegisterRequest;
