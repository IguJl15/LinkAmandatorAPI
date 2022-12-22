/* eslint-disable @typescript-eslint/no-inferrable-types */

abstract class EmailValidator {
  static isValid(email: string): boolean {
    email = email.trim();

    if (email.length === 0) return false;

    const filter: RegExp =
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    const naoPassaNaRegex = filter.test(email) == false;

    if (naoPassaNaRegex) return false;

    return true;
  }
}

export default EmailValidator;
