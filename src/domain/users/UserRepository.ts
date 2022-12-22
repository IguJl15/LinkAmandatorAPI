import User from "./entities/User";

interface UserRepository {
  findById(id: string): PromiseOr<User | null>;

  findByEmail(email: string): PromiseOr<User | null>;

  save(user: User): PromiseOr<User>;

  delete(id: string): PromiseOr<boolean>
}

export default UserRepository;
