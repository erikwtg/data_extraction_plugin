export interface IAuthRepository<T> {
  getTokenByDomain(domain: string): Promise<T | { error: boolean, message: string }>
  saveTokenForDomain(domain: string, tokenData: T): Promise<T | { error: boolean, message: string }>
  suspendDomainToken(domain: string): Promise<{ error: boolean, message: string } | undefined>
  getTokenByToken(token: string): Promise<T | { error: boolean, message: string }>
}