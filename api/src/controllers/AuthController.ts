import { Request, Response } from 'express'

export class AuthController {
  static create(req: Request, res: Response) {
    res.json({ message: 'Para ser implementada rota de autenticação de token' })
  }

  static release(req: Request, res: Response) {
    res.json({ message: 'Para ser implementada a rota de suspensão de token' })
  }
}