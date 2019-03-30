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
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AuthController.login", messagem: e.message}}
            return error
        }
    }
}

module.exports = AuthController
