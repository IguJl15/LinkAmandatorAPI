

import PasswordValidator from "./PasswordValidator";

describe("Password Validator", () => {
    it("should return false at short passwords", () => {
        //arranjo
        const password1 = "1234"
        const password2 = "bfA2#"
        const password3 = ""

        //act
        const result1 = PasswordValidator.isValid(password1);
        const result2 = PasswordValidator.isValid(password2);
        const result3 = PasswordValidator.isValid(password3);

        //assert

        expect(result1).toBe(false)
        expect(result2).toBe(false)
        expect(result3).toBe(false)
        
    })


})