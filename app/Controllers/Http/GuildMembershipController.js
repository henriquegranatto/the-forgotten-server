'use strict'

const Database = use('Database')

class GuildMembershipController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const guild_membership = await Database.table('guild_membership').insert(data)

            response.send({status: 200, messagem: "Membro de guilda de dicionado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildMembershipController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'guild_id'])
            const data = request.except(['publicCode', 'token'])

            const guild_membership = await Database.table('guild_membership').where(where).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildMembershipController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'guild_id'])
            const guild_membership = await Database.table('guild_membership').where(where).delete()

            if(guild_membership == 0) throw {status: 400, message: "Membro da guilda não foi encontrado com os dados informados"}
            
            response.send({status: 200, messagem: "Membro da guilda retirado deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildMembershipController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'guild_id'])
            const guild_membership = await Database.select('*').from('guild_membership').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild_membership})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildMembershipController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token'])
            const guild_membership = await Database.select('*').from('guild_membership').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild_membership})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildMembershipController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = GuildMembershipController