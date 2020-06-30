import {Request, Response} from 'express'
import knex from '../database/connection'

class ServiceOrderController {
    async login(req: Request, res: Response) {
        //req.body = login/email, senha
        // senha vai virar hash
        // email/ senha vai ser usado como parametro de busca no banco de dados para checar se existe aquele usuário
        const token = {
            token: "",
            expire: ""
        }
        //gerar token e data de expiração do token +o- 10min de expiração
        return
    }
}

export default ServiceOrderController;