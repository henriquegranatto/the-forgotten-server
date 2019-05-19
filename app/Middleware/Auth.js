'use strict'

const Hash = use('Hash')

let account = require('../Controllers/Http/AccountController')
account = new account()

class Auth 
{
  async handle ({ request, response, auth }, next) 
  {    
    try
    {
      const user = await account.get({publicCode: request.body.publicCode, token: request.body.token})
      if(user.status == 400) throw user
      if(!user.data) throw {status: 400, messagem: "Falha na autenticação"} 
      if(user.data.length != 1) throw {status: 400, messagem: "Falha na autenticação"} 
      await next()
    }
    catch(e)
    {
        // RETORNA ALGUM POSSÍVEL ERRO
        const error = {status: 400, message: "Falha na autenticação", error: {code: "AuthMiddleware.auth", message: e}}
        response.send(error)
    }
  }
}

module.exports = Auth
