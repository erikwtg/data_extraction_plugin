import { Request, Response } from 'express'

import { AuthFactory } from '../factories/AuthFactory'

export class CollectController {
  static async create(req: Request, res: Response) {
    const domain = req.headers.host || req.body.origin

    try {
      const authService = AuthFactory.getInstance()
      const tokenDomainData = await authService.getTokenByDomain(domain)

      console.log(tokenDomainData)

      res.status(201).json(tokenDomainData)

    } catch (error) {
      console.log(error)
      res.status(400).json({ error: 'Erro ao coletar dados' })
      return
    }
  }

  static async getByToken(req: Request, res: Response) {
  }
}