export class AuthEntity {
  id?: string
  active: boolean
  domain: string
  token: string
  createdAt?: number
  updatedAt?: number

  constructor({
    id,
    active = true,
    domain,
    token,
    createdAt,
    updatedAt
  }: {
    id?: string
    active?: boolean
    domain: string
    token: string
    createdAt?: number
    updatedAt?: number
  }) {
    if (!domain) {
      throw new Error("O domínio é obrigatório para criar um token.")
    }

    this.id = id
    this.active = active
    this.domain = domain
    this.token = token
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
  }

  suspend() {
    this.active = false;
    this.updatedAt = new Date().toISOString()
  }

  activate() {
    this.active = true;
    this.updatedAt = new Date().toISOString()
  }
}
