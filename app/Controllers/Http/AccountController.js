'use strict'

const Database = use('Database')

class AccountController {
  async index ({ request, response }) 
  {
  }
  
  // MÉTODO QUE CRIA UMA NOVA CONTA
  async create ({ request, response }) 
  {
    try
    {
      const data = request.only(['name','password','secret','type','premdays','lastday','email','creation'])

      const account = await Database.table('accounts').insert({
        name: data.name,
        email: data.email,
        password: data.password,
      })

      response.send(account)
    }
    catch(e)
    {
        // RETORNA ALGUM POSSÍVEL ERRO
        const error = {status: 400, message: "Não foi possível executar o script", error: e}
        response.send(error)
    }
  }
  
  async store ({ request, response }) 
  {
  }
  
  async show ({ request, response }) 
  {
  }
  
  async edit ({ request, response }) 
  {
  }
  
  async update ({ request, response }) 
  {
  }

  async destroy ({ request, response }) 
  {
  }
}

module.exports = AccountController