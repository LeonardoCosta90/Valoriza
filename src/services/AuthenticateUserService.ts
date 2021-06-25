import { getCustomRepository } from "typeorm"
import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { UsersRepositories } from "../repositories/UsersRepositories"



interface IAuthenticatedRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {

  async execute({ email, password }: IAuthenticatedRequest) {
    const usersRepositories = getCustomRepository(UsersRepositories);

    const user = await usersRepositories.findOne({ email });

    if (!user) {
      throw new Error("Email/Password incorrect");
    }

    const passwordMath = await compare(password, user.password);

    if (!passwordMath) {
      throw new Error("Email/Password incorrect");
    }

    const token = sign({
      email: user.email
    }, "5a944ad990c08a29ce2432b09b75a6a3", {
      subject: user.id,
      expiresIn: "1d"
    })

    return token;

  }
}

export { AuthenticateUserService }