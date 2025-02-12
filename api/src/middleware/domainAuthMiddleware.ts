import { Request, Response, NextFunction } from 'express'

import { verifyJwtToken } from '../utils/authUtils'

import { AuthFactory } from '../factories/AuthFactory'

export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const domain = req.headers.host || req.body.domain
    const token = req.headers['authorization']?.split(' ')[1] || ''

    if (!domain) {
      res.status(400).json({ error: 'Domínio não informado' })
      return
    }

    const authService = AuthFactory.getInstance()
    const tokenDomainData = await authService.getTokenByDomain(domain)

    const existActiveDomainToken = ('token' in tokenDomainData) && tokenDomainData.active

    if (!existActiveDomainToken) {

      if (!token) {
        res.status(401).json({ error: 'Insira um token!'})
        return
      }

      const existToken = await authService.verifyTokenExist(token)
      const isTokenUsed = existToken && 'token' in existToken

      if (isTokenUsed) {
        res.status(400).json({ error: 'Token inválido!' })
        return
      }

      const validateToken = await verifyJwtToken(token)
      if ('error' in validateToken) {
        res.status(400).json({ error: validateToken.message })
      }

      const response = await authService.saveTokenForDomain(domain, token)

      if (response && 'error' in response) {
        res.status(400).json({ error: response.message })
        return
      }

      return next()
    }

    return next()
  } catch (error) {
    console.log("ERROR: ", error)
    res.status(500).json({ error: 'Falha na autenticação' })
  }
}
