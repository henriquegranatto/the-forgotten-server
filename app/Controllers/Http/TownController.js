'use strict'

const Database = use('Database')
const server_error = use('App/Controllers/Http/ServerLogErrorController')

class TownController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const town = await Database.table('towns').insert(data)

            response.send({status: 200, messagem: "Town criada com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("TownController.create", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const town = await Database.table('towns').where('id', data.id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("TownController.edit", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])

            const town = await Database.table('towns').where(where).delete()

            if(town == 0) throw {status: 400, message: "Town não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Town deletada com sucesso"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("TownController.delete", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const town = await Database.select('*').from('towns').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: town})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("TownController.show", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token', 'id'])
            const town = await Database.select('*').from('towns').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: town})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("TownController.showAll", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = TownController
