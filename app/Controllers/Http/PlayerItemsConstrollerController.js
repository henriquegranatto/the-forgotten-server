'use strict'

const Database = use('Database')

class PlayerItemsConstrollerController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const player_items = await Database.table('player_items').insert(data)

            response.send({status: 200, messagem: "Player item adicionado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerItemsConstrollerController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'sid', 'pid'])

            const player_items = await Database.table('player_items').where(where).delete()

            if(player_items == 0) throw {status: 400, message: "Player item não foi encontrado com os dados informados"}
            
            response.send({status: 200, messagem: "Player item deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerItemsConstrollerController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'sid', 'pid'])
            const player_items = await Database.select('*').from('player_items').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_items})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerItemsConstrollerController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllPlayers ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token'])
            const player_items = await Database.select('*').from('player_items').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_items})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerItemsConstrollerController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = PlayerItemsConstrollerController
