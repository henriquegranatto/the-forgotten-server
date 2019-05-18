'use strict'

const Database = use('Database')

class PlayerController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const player = await Database.table('players').insert(data)

            response.send({status: 200, messagem: "Player criado com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['account_id', 'publicCode', 'token'])

            const player = await Database.table('players').where('id', data.id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const data = request.only(['id'])

            const player = await Database.table('players').where('id', data.id).delete()

            if(player == 0) throw {status: 400, message: "Player não foi encontrado com os dados informados"}
            
            response.send({status: 200, messagem: "Player deletado com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const data = request.only(['id', 'name'])
            const filter = (data.id) ? {id: data.id} : {name: data.name}
            const player = await Database.select('*').from('players').where(filter)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllPlayers ({ request, response }) 
    {
        try
        {
            const data = request.only(['account_id'])
            const player = await Database.select('*').from('players').where("account_id", data.account_id)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "PlayerController.show", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = PlayerController
