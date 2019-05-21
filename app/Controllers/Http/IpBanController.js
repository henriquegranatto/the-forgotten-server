'use strict'

const Database = use('Database')

class IpBanController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const ipban = await Database.table('ip_bans').insert(data)

            response.send({status: 200, messagem: "Banimento realizado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "IPBanController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const ipban = await Database.table('ip_bans').where('ip', data.ip).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "IPBanController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const data = request.only(['ip'])

            const ipban = await Database.table('ip_bans').where('ip', data.ip).delete()

            if(ipban == 0) throw {status: 400, message: "IP banido não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Banimento desfeito com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "IPBanController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const data = request.only(['ip'])
            const ipban = await Database.select('*').from('ip_bans').where(data)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: ipban})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "IPBanController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllIPs ({ request, response }) 
    {
        try
        {
            const data = request.only(['banned_by'])
            const ipban = await Database.select('*').from('ip_bans').where("banned_by", data.banned_by)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: ipban})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "IPBanController.showAllIPs", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = IpBanController
