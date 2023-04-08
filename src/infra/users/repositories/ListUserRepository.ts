import User from "src/domain/users/entities/User";
import UserRepository from "src/domain/users/UserRepository";

export class ListUserRepository implements UserRepository {
    private readonly usersList: User[] = []

    findById(id: string): PromiseOr<User | null> {
        return this.usersList.filter((user) => user.id === id)[0] || null;
    }

    findByEmail(email: string): PromiseOr<User | null> {
        return this.usersList.filter((user) => user.email === email)[0] || null;
    }

    save(user: User): PromiseOr<User | null> {
        const existingIndex = this.usersList.indexOf(user);

        if (existingIndex == -1) this.usersList.push(user)
        else this.usersList[existingIndex] = user

        return user
    }

    delete(id: string): PromiseOr<boolean> {
        for (let i = 0; i < this.usersList.length; i++) {
            if (this.usersList[i].id === id) {
                this.usersList.splice(i, 1)
                return true
            }
        }

        return false
    }

}