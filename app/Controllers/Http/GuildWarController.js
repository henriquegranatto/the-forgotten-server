'use strict'

const Database = use('Database')

class GuildWarController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const guild_wars = await Database.table('guild_wars').insert(data)

            response.send({status: 200, messagem: "Dados da guerra adicionada com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const guild_wars = await Database.table('guild_wars').where(where).delete()

            if(guild_wars == 0) throw {status: 400, message: "Guerra não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Dados da guerra deletados com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const guild_wars = await Database.select('*').from('guild_wars').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild_wars})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token', 'id'])
            const guild_wars = await Database.select('*').from('guild_wars').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild_wars})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = GuildWarController
