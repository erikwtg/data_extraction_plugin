import { IAuthServices } from "./IAuthService"
import { IAuthRepository } from "../repositories/IAuthRepository"
import { AuthEntity } from "../entities/AuthEntity"

export class AuthService implements IAuthServices<AuthEntity | { error: boolean, message: string }> {
  constructor(private authRepository: IAuthRepository<AuthEntity>) {}

  async saveTokenForDomain(domain: string, token: string): Promise<AuthEntity | { error: boolean, message: string }> {
    const tokenData = {
      token: token,
      active: true,
      domain
    }

    try {
      return await this.authRepository.saveTokenForDomain(domain, tokenData as unknown as AuthEntity)
    } catch (error) {
      return { error: true, message: 'Erro ao salvar token' }
    }
  }

	async getTokenByDomain(domain: string): Promise<AuthEntity | { error: boolean, message: string }> {
    const tokenData = await this.authRepository.getTokenByDomain(domain)

    if ('error' in tokenData) {
      return { error: true, message: tokenData.message }
    }

    return tokenData
  }

  async verifyTokenExist(token: string): Promise<AuthEntity | { error: boolean, message: string }> {
    const tokenData = await this.authRepository.getTokenByToken(token)

    if ('error' in tokenData) {
      return { error: true, message: tokenData.message }
    }

    return tokenData
  }

	async suspendDomainToken(domain: string): Promise<void> {
    await this.authRepository.suspendDomainToken(domain)
  }
}
