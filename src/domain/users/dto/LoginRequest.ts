import EmailValidator from "src/domain/validators/EmailValidator";
import PasswordValidator from "src/domain/validators/PasswordValidator";

class LoginRequest {
  email: string;
  password: string;

  validate(): null | string[] {
    const validEmail = EmailValidator.isValid(this.email);
    const validPassword = PasswordValidator.isValid(this.password);

    const erros: string[] = []
    
    if(!validEmail) erros.push("Email inválido");
    if(!validPassword) erros.push("Senha inválida");

    return erros.length > 0 ? erros : null;
  }
}

export default LoginRequest;
