export interface IAuthServices<T> {
  getTokenByDomain(domain: string): Promise<T | { error: boolean, message: string }>
  saveTokenForDomain(domain: string, token: string): Promise<T | { error: boolean, message: string }>
  suspendDomainToken(domain: string): Promise<void>
  verifyTokenExist(token: string): Promise<T | { error: boolean, message: string }>
} 