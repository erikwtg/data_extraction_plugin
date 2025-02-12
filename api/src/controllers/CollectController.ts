import { Request, Response } from 'express'

import { AuthFactory } from '../factories/AuthFactory'
import { CollectEntity } from '../entities/CollectEntity'
import { CollectFactory } from '../factories/CollectFactory'

export class CollectController {
  static async create(req: Request, res: Response) {
    const domain = req.headers.host || req.body.origin

    try {
      const authService = AuthFactory.getInstance()
      const tokenDomainData = await authService.getTokenByDomain(domain)

      const collectData = new CollectEntity(req.body)
      const collectService = CollectFactory.getInstance()

      const response =  await collectService.createCollect(collectData, tokenDomainData?.token)

      if ('error' in response) {
        res.status(400).json({ error: response?.message })
        return
      }

      res.status(201).json(collectData)

    } catch (error) {
      console.log(error)
      res.status(400).json({ error: 'Erro ao coletar dados' })
      return
    }
  }

  static async getByToken(req: Request, res: Response) {
    const domain = req.headers.host || req.body.origin

    try {
      const authService = AuthFactory.getInstance()
      const tokenDomainData = await authService.getTokenByDomain(domain)

      const collectService = CollectFactory.getInstance()
      const response = await collectService.getByToken(tokenDomainData.token)

      if ('error' in response) {
        res.status(400).json({ error: response?.message })
        return
      }

      res.status(200).json(response)
    } catch (error) {
      console.log(error)
      res.status(400).json({ error: 'Erro ao listar coleta' })
      return
    }
  }
}