'use strict'

const Database = use('Database')

class GuildInviteController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const guild_invites = await Database.table('guild_invites').insert(data)

            response.send({status: 200, messagem: "Convite de guilda criada com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildInviteController.create", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'guild_id'])

            const guild_invites = await Database.table('guild_invites').where(where).delete()

            if(guild_invites == 0) throw {status: 400, message: "Guilda não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Convite de guilda deletada com sucesso"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildInviteController.delete", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'guild_id'])
            const guild_invites = await Database.select('*').from('guild_invites').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild_invites})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildInviteController.show", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token'])
            const guild_invites = await Database.select('*').from('guild_invites').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild_invites})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildInviteController.showAll", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = GuildInviteController