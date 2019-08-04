'use strict'

const Database = use('Database')

class MarketOfferController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const market_offers = await Database.table('market_offers').insert(data)

            response.send({status: 200, messagem: "Item criado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketOfferController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const market_offers = await Database.table('market_offers').where('id', data.id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketOfferController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])

            const market_offers = await Database.table('market_offers').where(where).delete()

            if(market_offers == 0) throw {status: 400, message: "Registro não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Item deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketOfferController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['id'])
            const market_offers = await Database.select('*').from('market_offers').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: market_offers})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketOfferController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token', 'id'])
            const market_offers = await Database.select('*').from('market_offers').where(data)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: market_offers})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "MarketOfferController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = MarketOfferController
