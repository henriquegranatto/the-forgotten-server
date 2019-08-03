'use strict'

const Database = use('Database')

class PlayerNameLockController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const player_namelocks = await Database.table('player_namelocks').insert(data)

            response.send({status: 200, messagem: "Player item adicionado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerNameLockController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id'])

            const player_namelocks = await Database.table('player_namelocks').where(where).delete()

            if(player_namelocks == 0) throw {status: 400, message: "Player inbox item não foi encontrado com os dados informados"}
            
            response.send({status: 200, messagem: "Player item deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerNameLockController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id'])
            const player_namelocks = await Database.select('*').from('player_namelocks').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_namelocks})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerNameLockController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllPlayers ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token'])
            const player_namelocks = await Database.select('*').from('player_namelocks').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_namelocks})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerNameLockController.show", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = PlayerNameLockController
