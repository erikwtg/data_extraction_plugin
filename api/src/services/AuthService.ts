import { IAuthServices } from "./IAuthService"
import { IAuthRepository } from "../repositories/IAuthRepository"
import { AuthEntity } from "../entities/AuthEntity"

export class AuthService implements IAuthServices<AuthEntity | { error: boolean, message: string }> {
  constructor(private authRepository: IAuthRepository<AuthEntity>) {}
}
