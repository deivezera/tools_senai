import {Request, Response} from 'express'
import knex from '../database/connection'

class ServiceOrderController {
    async create(req: Request, res: Response) {
        const {
            price,
            nf,
            description,
        } = req.body
        const {
            id
        } = req.headers
    
        const trx = await knex.transaction();
        const tool = {
            price,
            nf,
            description,
        };
        await trx('tools').insert(tool)
    
        return res.json(tool)
    }
}

export default ServiceOrderController;