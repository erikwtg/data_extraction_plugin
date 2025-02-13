import { Router } from 'express'

import { CollectController } from '../controllers/CollectController'
import { AuthController } from '../controllers/AuthController'

import { authMiddleware } from '../middleware/domainAuthMiddleware'

const routes = Router()

routes.post('/collect', authMiddleware, CollectController.create)

routes.get('/list', CollectController.getByToken)

routes.post('/auth', AuthController.create)

export { routes }