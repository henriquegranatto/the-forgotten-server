'use strict'

const Database = use('Database')
const server_error = use('App/Controllers/Http/ServerLogErrorController')

class AccountVipListController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const account_viplist = await Database.table('account_viplist').insert(data)

            response.send({status: 200, messagem: "Vip adicionado com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("AccountVipListController.create", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const where = request.only(['account_id'])
            const data = request.except(['publicCode', 'token', 'account_id'])

            const account_viplist = await Database.table('account_viplist').where(where).update(data)

            if(account_viplist == 0) throw {status: 200, messagem: "Conta não foi encontrada com os dados informados"}

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("AccountVipListController.edit", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['account_id'])
            const account_viplist = await Database.table('account_viplist').where(where).delete()

            if(account_viplist == 0) throw {status: 400, message: "Vip não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Vip deletado com sucesso"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("AccountVipListController.delete", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['account_id', 'player_id'])
            const account_viplist = await Database.select('*').from('account_viplist').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: account_viplist})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("AccountVipListController.show", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token', 'account_id', 'player_id'])
            const account_viplist = await Database.select('*').from('account_viplist').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: account_viplist})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("AccountVipListController.showAll", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = AccountVipListController
