import { IAuthRepository } from "./IAuthRepository"
import { AuthEntity } from "../entities/AuthEntity"

export class AuthRepository implements IAuthRepository<AuthEntity> {}