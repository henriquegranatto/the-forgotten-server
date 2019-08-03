'use strict'

const Database = use('Database')

class AccountBanHistoryController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const account_ban_history = await Database.table('account_ban_history').insert(data)

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
            const where   = request.only(['id'])
            const data = request.except(['publicCode', 'token', 'account_id'])

            const account_ban_history = await Database.table('account_ban_history').where(where).update(data)

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
            const where   = request.only(['id'])
            const account_ban_history = await Database.table('account_ban_history').where(where).delete()

            if(account_ban_history == 0) throw {status: 400, message: "Histórico de banimento não foi encontrada com os dados informados"}
            
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
            const where = request.only(['id'])
            const account_ban_history = await Database.select('*').from('account_ban_history').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: account_ban_history})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanHistoryController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token', 'id'])
            const account_ban_history = await Database.select('*').from('account_ban_history').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: account_ban_history})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanHistoryController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = AccountBanHistoryController