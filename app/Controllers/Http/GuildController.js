'use strict'

const Database = use('Database')

class GuildController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const guild = await Database.table('guilds').insert(data)

            response.send({status: 200, messagem: "Guilda criada com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const guild = await Database.table('guilds').where('id', data.id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const data = request.only(['id'])

            const guild = await Database.table('guilds').where('id', data.id).delete()

            if(guild == 0) throw {status: 400, message: "Guilda não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Guilda deletada com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const data = request.only(['id', 'name'])
            const filter = (data.id) ? {id: data.id} : {name: data.name}
            const guild = await Database.select('*').from('guilds').where(filter)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllGuilds ({ request, response }) 
    {
        try
        {
            const data = request.only(['ownerid'])
            const guild = await Database.select('*').from('guilds').where("ownerid", data.ownerid)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "GuildController.show", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = GuildController
