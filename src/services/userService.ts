import { User, CreateUserRequest } from "../types/user";

export class UserService {
  async createUser(req: CreateUserRequest): Promise<User> {
    if (!req.email.includes("@")) {
      throw new Error("Invalid email format");
    }

    return {
      id: crypto.randomUUID(),
      name: req.name,
      email: req.email,
      createdAt: new Date(),
    };
  }
}
