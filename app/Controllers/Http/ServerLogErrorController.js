'use strict'

const Database = use('Database')

class ServerLogErrorController 
{
    async register (method, payload, error) 
    {
        try
        {
            const date = new Date()

            const data = 
            {
                date: `${date.toLocaleString()}`,
                method: `${method}`,
                payload: `${payload}`,
                error: `${error}`,
            }

            const server_error = await Database.table('server_error').insert(data)

            return server_error[0]
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const data = 
            {
                date: `${date.toLocaleString()}`,
                method: `ServerLogErrorController.register`,
                payload: `${JSON.stringify({ date: `${date.toLocaleString()}`, method: `${method}`, payload: `${payload}`, error: `${error}` })}`,
                error: `${error.toString()}`,
            }

            const server_error = await Database.table('server_error').insert(data)

            return server_error[0]
        }
    }
}

module.exports = ServerLogErrorController
