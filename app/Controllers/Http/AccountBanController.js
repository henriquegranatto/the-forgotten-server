'use strict'

const Database = use('Database')

class AccountBanController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const account_bans = await Database.table('account_bans').insert(data)

            response.send({status: 200, messagem: "Banimento de conta efetuado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token', 'account_id'])
            const where = request.only(['account_id'])

            const account_bans = await Database.table('account_bans').where(where).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['account_id'])

            const account_bans = await Database.table('account_bans').where(where).delete()

            if(account_bans == 0) throw {status: 400, message: "Conta banida não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Banimento de conta deletada com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['account_id'])
            const account_bans = await Database.select('*').from('account_bans').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: account_bans})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token', 'account_id'])
            const account_bans = await Database.select('*').from('account_bans').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: account_bans})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountBanController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = AccountBanController
