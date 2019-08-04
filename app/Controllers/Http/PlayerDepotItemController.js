'use strict'

const Database = use('Database')

class PlayerDepotItemController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const player_depotitems = await Database.table('player_depotitems').insert(data)

            response.send({status: 200, messagem: "Player depot item adicionado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDepotItemController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'sid', 'pid'])
            const data = request.except(['player_id', 'sid', 'pid', 'publicCode', 'token'])

            const player_depotitems = await Database.table('player_depotitems').where(where).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDepotItemController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'sid', 'pid'])

            const player_depotitems = await Database.table('player_depotitems').where(where).delete()

            if(player_depotitems == 0) throw {status: 400, message: "Player depot item não foi encontrado com os dados informados"}
            
            response.send({status: 200, messagem: "Player depot item deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDepotItemController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'sid', 'pid'])
            const player_depotitems = await Database.select('*').from('player_depotitems').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_depotitems})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDepotItemController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token'])
            const player_depotitems = await Database.select('*').from('player_depotitems').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_depotitems})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDepotItemController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = PlayerDepotItemController
