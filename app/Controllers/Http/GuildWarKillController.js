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
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildWarKillController.create", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const data = request.except(['publicCode', 'token'])

            const guildwar_kills = await Database.table('guildwar_kills').where(where).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildWarKillController.edit", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const guildwar_kills = await Database.table('guildwar_kills').where(where).delete()

            if(guildwar_kills == 0) throw {status: 400, message: "GuildWar kill não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "GuildWar deletado com sucesso"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildWarKillController.delete", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const guildwar_kills = await Database.select('*').from('guildwar_kills').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guildwar_kills})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildWarKillController.show", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token', 'id'])
            const guildwar_kills = await Database.select('*').from('guildwar_kills').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guildwar_kills})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildWarKillController.showAll", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = GuildWarKillController
