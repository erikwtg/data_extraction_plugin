import { Request, Response, NextFunction } from 'express'

import { verifyJwtToken } from '../utils/authUtils'

import { AuthFactory } from '../factories/AuthFactory'

export async function authMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
  try {
    const domain = req.body.origin
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
        res.status(401).json({ error: true, message: 'Insira um token!'})
        return
      }

      const existToken = await authService.verifyTokenExist(token)
      const isTokenUsed = existToken && 'token' in existToken

      if (isTokenUsed) {
        res.status(400).json({ error: true, message: 'Token inválido!' })
        return
      }

      try {
        const isValidToken = await verifyJwtToken(token)

        if ('error' in isValidToken) {
          res.status(400).json({ error: true, message: isValidToken.message })
          return
        }

        const response = await authService.saveTokenForDomain(domain, token)

        if (response && 'error' in response) {
          res.status(400).json({ error: true, message: response.message })
          return
        }
      } catch (error) {
        res.status(400).json({ error: true, message: 'Token inválido!' })
        return
      }

      return next()
    }

    return next()
  } catch (error) {
    console.log("ERROR: ", error)
    res.status(500).json({ error: true, message: 'Falha na autenticação' })
  }
}
