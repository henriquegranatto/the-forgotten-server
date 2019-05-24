'use strict'

const Database = use('Database')

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
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "TownController.create", messagem: e.message}}
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
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "TownController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const data = request.only(['id'])

            const town = await Database.table('towns').where('id', data.id).delete()

            if(town == 0) throw {status: 400, message: "Town não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Town deletada com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "TownController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const data = request.only(['id'])
            const town = await Database.select('*').from('towns').where(data)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: town})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "TownController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllIPs ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token', 'id'])
            const town = await Database.select('*').from('towns').where(data)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: town})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "TownController.showAllIPs", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = TownController
