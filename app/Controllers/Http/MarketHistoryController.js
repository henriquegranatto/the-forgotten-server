'use strict'

const Database = use('Database')
const server_error = use('App/Controllers/Http/ServerLogErrorController')

class MarketHistoryController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const market_history = await Database.table('market_history').insert(data)

            response.send({status: 200, messagem: "Registro salvo com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("MarketHistoryController.create", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const market_history = await Database.table('market_history').where('id', data.id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("MarketHistoryController.edit", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])

            const market_history = await Database.table('market_history').where(where).delete()

            if(market_history == 0) throw {status: 400, message: "Registro não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Registro deletado com sucesso"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("MarketHistoryController.delete", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const market_history = await Database.select('*').from('market_history').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: market_history})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("MarketHistoryController.show", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token', 'id'])
            const market_history = await Database.select('*').from('market_history').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: market_history})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("MarketHistoryController.showAll", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = MarketHistoryController
