'use strict'

const Database = use('Database')
const server_error = use('App/Controllers/Http/ServerLogErrorController')

class PlayerNameLockController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const player_namelocks = await Database.table('player_namelocks').insert(data)

            response.send({status: 200, messagem: "Player namelock adicionado com sucesso!"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("PlayerNameLockController.create", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const where = request.only(['player_id'])

            const player_namelocks = await Database.table('player_namelocks').where(where).delete()

            if(player_namelocks == 0) throw {status: 400, message: "Player namelock não foi encontrado com os dados informados"}
            
            response.send({status: 200, messagem: "Player namelock deletado com sucesso"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("PlayerNameLockController.delete", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
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
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("PlayerNameLockController.show", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async showAll ({ request, response }) 
    {
        try
        {
            const where = request.except(['publicCode', 'token'])
            const player_namelocks = await Database.select('*').from('player_namelocks').where(where)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: player_namelocks})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("PlayerNameLockController.showAll", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = PlayerNameLockController
