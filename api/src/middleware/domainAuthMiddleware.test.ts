import { jest, describe, it, expect, beforeEach } from '@jest/globals'
import request from 'supertest'
import express from 'express'
import { authMiddleware } from '../middleware/domainAuthMiddleware'
import { AuthFactory } from '../factories/AuthFactory'
import { verifyJwtToken } from '../utils/authUtils'

jest.mock('../factories/AuthFactory')
jest.mock('../utils/authUtils')

const app = express()
app.use(express.json())
app.post('/collect', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Acesso permitido' })
})

describe('Auth Middleware', () => {
  let authServiceMock: any

  beforeEach(() => {
    authServiceMock = {
      getTokenByDomain: jest.fn(),
      verifyTokenExist: jest.fn(),
      saveTokenForDomain: jest.fn(),
    };
    
    (AuthFactory.getInstance as jest.Mock).mockReturnValue(authServiceMock);
    (verifyJwtToken as jest.Mock).mockReset()
  })

  it('retorna erro 400 se o domínio não for informado', async () => {
    const response = await request(app)
      .post('/collect')
      .send({})

    expect(response.status).toBe(400)
    expect(response.body).toEqual({ error: 'Domínio não informado' })
  })

  it('retorna erro 401 se não houver token e o domínio não tiver um ativo', async () => {
    authServiceMock.getTokenByDomain.mockResolvedValue({ active: false })

    const response = await request(app)
      .post('/collect')
      .send({ origin: 'example.com' })

    expect(response.status).toBe(401)
    expect(response.body).toEqual({ error: true, message: 'Insira um token!' })
  })

  it('retorna erro 400 se o token já foi usado', async () => {
    authServiceMock.getTokenByDomain.mockResolvedValue({ active: false })
    authServiceMock.verifyTokenExist.mockResolvedValue({ token: 'alreadyUsedToken' })

    const response = await request(app)
      .post('/collect')
      .set('Authorization', 'Bearer invalid-token')
      .send({ origin: 'example.com' })

    expect(response.status).toBe(400)
    expect(response.body).toEqual({ error: true, message: 'Token inválido!' })
  })

  // TODO[Erik] - Fazer um mock para testar o retorno do jwtwebtoken
  // it('retorna erro 400 se o token for inválido', async () => {
  //   authServiceMock.getTokenByDomain.mockResolvedValue({ active: false })
  //   authServiceMock.verifyTokenExist.mockResolvedValue(null)
  //   (verifyJwtToken as jest.Mock).mockResolvedValue({ error: true, message: 'Token inválido!' })

  //   const response = await request(app)
  //     .post('/collect')
  //     .set('Authorization', 'Bearer invalid-token')
  //     .send({ origin: 'example.com' })

  //   expect(response.status).toBe(400)
  //   expect(response.body).toEqual({ error: true, message: 'Token inválido!' })
  // })

  // TODO[Erik] - Fazer um mock para testar o retorno do jwtwebtoken
  // it('retorna sucesso se o token for válido e salvo corretamente', async () => {
  //   authServiceMock.getTokenByDomain.mockResolvedValue({ active: false })
  //   authServiceMock.verifyTokenExist.mockResolvedValue(null)
  //   (verifyJwtToken as jest.Mock).mockResolvedValue()
  //   authServiceMock.saveTokenForDomain.mockResolvedValue({ success: true })

  //   const response = await request(app)
  //     .post('/collect')
  //     .set('Authorization', 'Bearer valid-token')
  //     .send({ origin: 'example.com' })

  //   expect(response.status).toBe(200)
  //   expect(response.body).toEqual({ message: 'Acesso permitido' })
  // })

  it('permite acesso direto se o domínio já tem um token ativo', async () => {
    authServiceMock.getTokenByDomain.mockResolvedValue({ active: true, token: 'active-token' })

    const response = await request(app)
      .post('/collect')
      .send({ origin: 'example.com' })

    expect(response.status).toBe(200)
    expect(response.body).toEqual({ message: 'Acesso permitido' })
  })
})