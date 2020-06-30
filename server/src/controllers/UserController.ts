import {Request, Response} from 'express'
import knex from '../database/connection'
import CryptoJS from 'crypto-js';

class UserController {
    async create( req:Request, res:Response ){

        const {
            name,
            email,
            password,
            number,
            type,
        } = req.body
        const hash = CryptoJS.SHA256(password).toString(CryptoJS.enc.Base64)

        const user = {
            name,
            email,
            password: hash,
            number,
            type,
        };
        
        await knex('users').insert(user)
    
        return res.json(user)
    }
    async index(req: Request,res:Response) {
        const user = await knex('users').select('*');
    
        const serializedUser = user.map( user => {
            return {
                id: user.id,
                name:user.name,
                email:user.email,
                password: user.password,
                number: user.number,
                type: user.type,
            };
        });
        return res.json(serializedUser)
    }
}

export default UserController;

