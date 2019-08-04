'use strict'

const Database = use('Database')

class PlayerDeathController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const player_deaths = await Database.table('player_deaths').insert(data)

            response.send({status: 200, messagem: "Player death criada com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDeathController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'time', 'level', 'killed_by'])
            const data = request.except(['player_id', 'time', 'level', 'killed_by', 'publicCode', 'token'])

            const player_deaths = await Database.table('player_deaths').where(where).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDeathController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'time', 'level', 'killed_by'])

            const player_deaths = await Database.table('player_deaths').where(where).delete()

            if(player_deaths == 0) throw {status: 400, message: "Player death não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "Player death deletada com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDeathController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id', 'time', 'level', 'killed_by'])
            const player_deaths = await Database.select('*').from('player_deaths').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_deaths})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDeathController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token'])
            const player_deaths = await Database.select('*').from('player_deaths').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_deaths})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerDeathController.showAll", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = PlayerDeathController
