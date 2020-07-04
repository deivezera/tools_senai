import {Request, Response} from 'express'
import knex from '../database/connection'
import CryptoJS from 'crypto-js';

class ServiceOrderController {
    async login(req: Request, res: Response) {
        const {
            email,
            password,
        } = req.body
        const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64)
        const userData = {
            email: knex('users').where({
                email
            }),
            password: knex('users').where({
                hash
            })
        }
        const token = {
            token: `${Math.random()}.F1284178989#()#&*$&¨@*.${Math.random}`,
            expire: new Date
        }
        const err = {
            error: "E-mail ou senha não encontrados"
        }
        if(userData.password && userData.email){
            return res.json(token)
        }else{
            return res.json(err)
        }        
    }
}

export default ServiceOrderController;