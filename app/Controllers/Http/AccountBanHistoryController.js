'use strict'

const Database = use('Database')

class AccountBanHistoryController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const town = await Database.table('account_ban_history').insert(data)

            response.send({status: 200, messagem: "Histórico de banimento criado efetuado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanHistoryController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const id   = request.only(['id'])
            const data = request.except(['publicCode', 'token', 'account_id'])

            const town = await Database.table('account_ban_history').where('id', id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanHistoryController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const id   = request.only(['id'])
            const town = await Database.table('account_ban_history').where('id', id).delete()

            if(town == 0) throw {status: 400, message: "Histórico de banimento não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Banimento de conta deletada com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanHistoryController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const id = request.only(['id'])
            const town = await Database.select('*').from('account_ban_history').where(id)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: town})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanHistoryController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllIPs ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token', 'id'])
            const town = await Database.select('*').from('account_ban_history').where(data)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: town})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanHistoryController.showAllIPs", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = AccountBanHistoryController