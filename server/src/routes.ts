import express from 'express'

import UserController from './controllers/UserController'
import ToolsController from './controllers/ToolsController'
import ServiceOrderController from './controllers/ServiceOrderController'
import loginController from './controllers/LoginController'

const routes = express.Router()
const userController = new UserController();
const toolsController = new ToolsController();


routes.get('/users', userController.index)
routes.post('/users', userController.create)

routes.get('/tools', toolsController.index)
routes.post('/tools', toolsController.create)



export default routes