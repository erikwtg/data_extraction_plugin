import { IAuthRepository } from "./IAuthRepository"
import { AuthEntity } from "../entities/AuthEntity"
import { DomainEntity } from "../entities/DomainEntity"
import { db } from "../database/config"
import { sanitizeJwtToken } from "../utils/authUtils"

export class AuthRepository implements IAuthRepository<AuthEntity> {
  async saveTokenForDomain(domain: string, tokenData: AuthEntity): Promise<AuthEntity | { error: boolean, message: string }> {
    const token = sanitizeJwtToken(tokenData.token) 
    const tokenRef = await db.ref(`tokens/${token}`)
    const tokenRefId = db.ref(`tokens`).push()
    const tokenId = tokenRefId.key ?? undefined

    if (!tokenId) {
      return { error: true, message: "Não foi possível criar o token"}
    }

    Object.assign( tokenData, {
        id: tokenId,
        token: token
      }
    )

    await tokenRef.set(tokenData)

    const domainRef = await db.ref(`domains/${domain}`)
    const domainRefId = domainRef.push()
    const domainId = domainRefId.key ?? undefined
    const domainData = new DomainEntity({
      id: domainId,
      token: tokenData.token,
      token_id: tokenId
    })
    await db.ref(`domains/${domain}`).set(domainData)

    return tokenData
  }

  async getTokenByDomain(domain: string): Promise<AuthEntity | { error: boolean, message: string }> {
    try {
      const domainRef = await db.ref(`domains/${domain}`).get()
    
      if (!domainRef.exists()) {
        return { error: true, message:"Não foram encontrados domínios informados"}
      }

      const domainData = domainRef.val() as DomainEntity
      const token = domainData.token

      if (!token) {
        return { error: true, message:"Não foram encontrados tokens vinculados ao domínio informado"}
      }

      const tokenRef = await db.ref(`tokens/${token}`).get()

      if (!tokenRef.exists()) {
        return { error: true, message:"Não foram encontrados tokens informados"}
      }

      const tokenData = tokenRef.val() as AuthEntity

      return tokenData
    } catch (error) {
      throw error
    }
  }

  async getTokenByToken(token: string): Promise<AuthEntity | { error: boolean, message: string}> {
    const parseToken = await sanitizeJwtToken(token)
    const tokenRef = await db.ref(`tokens/${parseToken}`).get()

    if (!tokenRef.exists()) {
      return { error: true, message: "Não foram encontrados tokens informados"}
    }

    const tokenData = tokenRef.val() as AuthEntity

    return tokenData
  }

  async suspendDomainToken(domain: string): Promise<{ error: boolean, message: string } | undefined> {
    const domainRef = await db.ref(`domains/${domain}`).get()

    if (!domainRef.exists()) {
      return { error: true, message:"Não foram encontrados domínios informados"}
    }

    const domainData = domainRef.val() as DomainEntity
    const tokenId = domainData?.token

    if (!tokenId) {
      return { error: true, message:"Não foram encontrados tokens vinculados ao domínio informado"}
    }

    await db.ref(`domains/${domain}`).update({
      active: false,
      updatedAt: new Date().toISOString()
    })

    await db.ref(`suspensed_domains/${tokenId}`).set({
      suspensedAt: new Date().toISOString(),
      reason: "Token suspenso"
    })
  }
}