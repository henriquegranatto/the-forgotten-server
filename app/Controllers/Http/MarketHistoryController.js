'use strict'

const Database = use('Database')

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
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketHistoryController.create", messagem: e.message}}
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
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketHistoryController.edit", messagem: e.message}}
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
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketHistoryController.delete", message: e.message}}
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
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketHistoryController.show", message: e.message}}
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
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketHistoryController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = MarketHistoryController
