'use strict'

const Database = use('Database')

class GuildRankController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const guild_ranks = await Database.table('guild_ranks').insert(data)

            response.send({status: 200, messagem: "Guilda adicionada com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildRankController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const guild_ranks = await Database.table('guild_ranks').where(where).delete()

            if(guild_ranks == 0) throw {status: 400, message: "Guild rank não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Guilda retirada do rank com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildRankController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const guild_ranks = await Database.select('*').from('guild_ranks').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild_ranks})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildRankController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllIPs ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token', 'id'])
            const guild_ranks = await Database.select('*').from('guild_ranks').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild_ranks})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildRankController.showAllIPs", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = GuildRankController
