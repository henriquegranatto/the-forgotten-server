'use strict'

let account = require('./AccountController')
account = new account()

class AuthController 
{
    async login({ request, response, auth })
    {
        try
        {
            const { email, password } = request.all()

            const token = await auth.attempt(email, password)

            const user = await account.get({email: email})

            if(token.token && user.status == 200) 
            {
                const res = await account.set({publicCode: user.data[0].publicCode, token: token.token})

                response.send({status: 200, messagem: "Login realizado com sucesso", data: {publicCode: user.data[0].publicCode, token: token.token}})
            }
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("AuthController.login", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    async logout({ request, response })
    {
        try
        {
            const { publicCode, token } = request.all()
            const res = await account.set({publicCode: publicCode, token: null})
            response.send({status: 200, messagem: "Logout realizado com sucesso"})
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("AuthController.logout", JSON.stringify(data), e.toString(), `${__dirname}/${__filename}`)
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = AuthController
