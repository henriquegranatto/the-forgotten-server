'use strict'

const Database = use('Database')

class AccountVipListController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const town = await Database.table('account_viplist').insert(data)

            response.send({status: 200, messagem: "Vip adicionado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountVipListController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const account_id = request.only(['account_id'])
            const data = request.except(['publicCode', 'token', 'account_id'])

            const town = await Database.table('account_viplist').where('account_id', account_id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountVipListController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const account_id = request.only(['account_id'])
            const town = await Database.table('account_viplist').where('account_id', account_id).delete()

            if(town == 0) throw {status: 400, message: "Vip não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Vip deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountVipListController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['account_id', 'player_id'])
            const town = await Database.select('*').from('account_viplist').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: town})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountVipListController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllIPs ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token', 'account_id', 'player_id'])
            const town = await Database.select('*').from('account_viplist').where(data)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: town})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountVipListController.showAllIPs", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = AccountVipListController
