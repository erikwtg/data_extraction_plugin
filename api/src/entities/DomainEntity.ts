export class DomainEntity {
  id?: string
  token_id?: string
  token: string
  authenticated?: boolean
  createdAt?: string
  updatedAt?: string

  constructor({
    id,
    token_id,
    token,
    authenticated,
    createdAt,
    updatedAt,
  }: {
    id?: string
    token_id?: string
    token: string
    authenticated?: boolean
    createdAt?: string
    updatedAt?: string
  }) {
    if (!token_id) {
      throw new Error("Token ID é obrigatório.")
    }

    this.id = id
    this.token_id = token_id
    this.token = token
    this.authenticated = authenticated ?? true

    this.createdAt = createdAt ?? new Date().toISOString()
    this.updatedAt = updatedAt ?? new Date().toISOString()
  }

  suspend() {
    this.updatedAt = new Date().toISOString()
  }

  activate() {
    this.updatedAt = new Date().toISOString()
  }
}
