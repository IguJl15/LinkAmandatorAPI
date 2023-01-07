import EmailValidator from "src/domain/validators/EmailValidator";
import PasswordValidator from "src/domain/validators/PasswordValidator";

class RegisterModel {
    constructor(
        public name: string,
        public email: string,
        public password: string,
        public passwordConfirmation: string,
    ) { }
    
    validate(): null | string[] {
        const erros: string[] = []
        
        const validEmail = EmailValidator.isValid(this.email);
        const validPassword = PasswordValidator.isValid(this.password);
        
        if(!validEmail) erros.push("Email inválido");
        if(!validPassword) erros.push("Senha fraca");
        if(this.password !== this.passwordConfirmation) erros.push("Senhas não conferem");
        if(this.name.length < 3) erros.push("Nome deve ter no mínimo 3 caracteres");
        if(this.name.length > 50) erros.push("Nome deve ter no máximo 50 caracteres");
    
        return erros.length > 0 ? erros : null;
      }
    }

export default RegisterModel;
