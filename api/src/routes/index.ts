import { Router } from 'express'
import { CollectController } from '../controllers/CollectController'
import { AuthController } from '../controllers/AuthController'

const routes = Router()

routes.post('/collect', CollectController.create)

routes.get('/list', CollectController.getByToken)

routes.post('/auth', AuthController.create)

export { routes }