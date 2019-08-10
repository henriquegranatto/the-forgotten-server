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
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildController.create", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const guild = await Database.table('guilds').where('id', data.id).update(data)

            if(guild == 0) throw {status: 400, message: "Guilda não foi encontrada com os dados informados"}

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildController.edit", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])

            const guild = await Database.table('guilds').where(where).delete()

            if(guild == 0) throw {status: 400, message: "Guilda não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Guilda deletada com sucesso"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildController.delete", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const data = request.only(['id', 'name'])
            const where = (data.id) ? {id: data.id} : {name: data.name}
            const guild = await Database.select('*').from('guilds').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildController.show", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.only(['ownerid'])
            const guild = await Database.select('*').from('guilds').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: guild})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("GuildController.showAll", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = GuildController
