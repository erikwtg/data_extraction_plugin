import { AuthRepository } from '../repositories/AuthRepository'
import { AuthService } from '../services/AuthService'

export class AuthFactory {
  constructor() {}

  static getInstance() {
    const authRepository = new AuthRepository()
    const authService = new AuthService(authRepository)
    return authService
  }
} 