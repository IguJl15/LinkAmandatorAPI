abstract class PasswordValidator {
    static isValid(password: string): boolean {
        password = password.trim();

        if (password.length < 6) return false;

        const filter: RegExp =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{6,}$/

        const naoPassaNaRegex = filter.test(password) == false;

        if (naoPassaNaRegex) return false;

        return true;

    }
}

export default PasswordValidator;
