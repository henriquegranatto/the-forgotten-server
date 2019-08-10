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
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all(])
            const code = await server_error.register("PlayerController.create", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
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
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all(])
            const code = await server_error.register("PlayerController.edit", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
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
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all(])
            const code = await server_error.register("PlayerController.delete", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
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
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all(])
            const code = await server_error.register("PlayerController.show", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const data = request.only(['account_id'])
            const player = await Database.select('*').from('players').where("account_id", data.account_id)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all(])
            const code = await server_error.register("PlayerController.showAll", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = PlayerController
