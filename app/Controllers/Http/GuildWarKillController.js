'use strict'

const Database = use('Database')

class GuildWarKillController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const guildwar_kills = await Database.table('guildwar_kills').insert(data)

            response.send({status: 200, messagem: "GuildWar kill adicionado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarKillController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const id = request.only(['id'])
            const data = request.except(['publicCode', 'token'])

            const guildwar_kills = await Database.table('guildwar_kills').where('id', id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarKillController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const id = request.only(['id'])
            const guildwar_kills = await Database.table('guildwar_kills').where('id', id).delete()

            if(guildwar_kills == 0) throw {status: 400, message: "GuildWar kill não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "GuildWar deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarKillController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const id = request.only(['id'])
            const guildwar_kills = await Database.select('*').from('guildwar_kills').where(id)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guildwar_kills})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarKillController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllIPs ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token', 'id'])
            const guildwar_kills = await Database.select('*').from('guildwar_kills').where(data)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guildwar_kills})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildWarKillController.showAllIPs", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = GuildWarKillController
