import {Request, Response} from 'express'
import knex from '../database/connection'

class ToolsController {
    async create(req: Request, res: Response) {
        const {
            image,
            title,
            description,
            price,
            id, //ID DO USUÁRIO
            tool//ID DA PEÇA
        } = req.body
        
    
        const trx = await knex.transaction();
        const service = {
            image,
            title,
            description,
            price,
            user_id: trx('users').where({
                id
            }).select('id'),
            tool_id: trx('tools').where({
                tool
            })
        };
        await trx('tools').insert(service)
    
        return res.json(service)
    }
    async index(req: Request,res:Response) {
        const tools = await knex('tools').select('*');
    
        const serializedTools = tools.map( tool => {
            return {
                id: tool.id,
                image: `http://localhost:3333/uploads/${tool.image}`,
                title: tool.title,
                description: tool.description,
                price: tool.price,
            };
        });
        return res.json(serializedTools)
    }
}

export default ToolsController;