const knex = require('../database');

module.exports = {
    async index(request, response, next){
        try{
            const { user_id, page = 1 } = request.query
          
            const query = knex('projects').limit(5).offset((page - 1) * 5)

            const countObj = knex('projects').count()

            if(user_id){
                query
                 .where({ user_id })
                 .join('users', 'users.id', '=','projects.user_id')
                 .select('projects.*', 'users.username')   
                 .where('users.deleted_at', null)  
                 
                 countObj.where({ user_id })
            }

            const count = await countObj
            const [ countNumber ] = count

            response.header('X-Total-Count', countNumber['count(*)'])

            const results = await query

            return response.json(results)
        }
        catch(error){
            next(error)
        }
    },
    async create(request, response, next){
        const { user_id, title } = request.body

        try{
            await knex('projects').insert({
                user_id,
                title
            })

            return response.status(201).send()
        }
        catch(error){
            next(error)
        }
    },
    async update(request, response, next){
        const { title } = request.body;
        const { id } = request.params;

        try{
            await knex('projects').update({ 
                title 
            }).where({ id })

            return response.send()
        }
        catch(error){
            next(error)
        }

    },
    async delete(request, response, next){
        const { id } = request.params;

        try{
            await knex('projects').where({ 
                id
             }).del()

            return response.send()
        }
        catch(error){
            next(error)
        }
    }
}