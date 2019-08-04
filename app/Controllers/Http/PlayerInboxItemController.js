'use strict'

const Database = use('Database')

class PlayerInboxItemController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const player_inboxitems = await Database.table('player_inboxitems').insert(data)

            response.send({status: 200, messagem: "Player inbox item adicionado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerInboxItemController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'sid', 'pid'])
            const data = request.except(['player_id', 'sid', 'pid', 'publicCode', 'token'])

            const player_inboxitems = await Database.table('player_inboxitems').where(where).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerInboxItemController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'sid', 'pid'])

            const player_inboxitems = await Database.table('player_inboxitems').where(where).delete()

            if(player_inboxitems == 0) throw {status: 400, message: "Player inbox item não foi encontrado com os dados informados"}
            
            response.send({status: 200, messagem: "Player inbox item deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerInboxItemController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'sid', 'pid'])
            const player_inboxitems = await Database.select('*').from('player_inboxitems').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_inboxitems})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerInboxItemController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token'])
            const player_inboxitems = await Database.select('*').from('player_inboxitems').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_inboxitems})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerInboxItemController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = PlayerInboxItemController
