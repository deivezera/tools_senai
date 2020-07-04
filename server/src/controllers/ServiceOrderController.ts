import {Request, Response} from 'express'
import knex from '../database/connection'

class ServiceOrderController {
    async create(req: Request, res: Response) {
        const {
            price,
            nf,
            description,
            toolId,
        } = req.body
        const {
            id,
        } = req.headers
    
        const trx = await knex.transaction();
        const service = {
            price,
            nf,
            description,
            user_id: trx('users').where({
                id
            }).select('id'),
            tool_id: trx('tools').where({
                toolId
            })
        };
        await trx('service').insert(service)
    
        return res.json(service)
    }
}

export default ServiceOrderController;