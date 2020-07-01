const knex = require('../database');

module.exports = {
    async index(request, response, next) {
            try{
                const results = await knex('users').where('deleted_at', null)
                return response.json(results);
            }
            catch(error){
                next(error)
            }

        },

    async create(request, response, next) {
        const { username } = request.body;

        try{
            await knex('users').insert({
                username
            })

           return response.status(201).send()
        } 
        catch(error){
            next(error)
        }
     
    },

    async update(request, response, next){
        const { username } = request.body;
        const { id } = request.params;

        try{
            await knex('users').update({
                username
            }).where({ id })

            return response.send()
        } 
        catch(error){
            next(error)
        }
    },

    async delete(request, response, next){
        const { id } = request.params;
        const data = new Date();

        try{
            await knex('users').where({
                id
            }).update('deleted_at', data)/*.del()*/

            return response.send()
        }
        catch(error){
            next(error)
        }
    }

}
