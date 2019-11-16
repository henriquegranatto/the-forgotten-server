'use strict'

const Database = use('Database')
const server_error = use('App/Controllers/Http/ServerLogErrorController')

class PlayerHelper 
{
    async getPlayer (request)
    {
        try
        {
            const player = await Database.select('*').from('accounts').where({id: request.id})
            return {status: 200, data: player}
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const code = await server_error.register("PlayerHelper.getPlayer", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            return {status: 400, message: "Não foi possível atender à requisição", error: code}
        }
    }

    async editPlayer(request)
    {
        try
        {
            const where = {id: request.id}
            delete request.id

            const player = await Database.table('accounts').where(where).update(request)
            return {status: 200}
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const code = await server_error.register("PlayerHelper.editPlayer", JSON.stringify(request), e.toString(), `${__dirname}/${__filename}`)
            return {status: 400, message: "Não foi possível atender à requisição", error: code}
        }
    }
}

module.exports = new PlayerHelper()