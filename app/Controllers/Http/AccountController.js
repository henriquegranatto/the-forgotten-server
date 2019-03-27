'use strict'

const Hash = use('Hash')
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
      const data = request.only(['name', 'email', 'password'])

      const account = await Database.table('accounts').insert({
        name: data.name,
        email: data.email,
        password: await Hash.make(data.password),
        publicCode: await  Hash.make(Date.now().toString())
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
    try
    {
      const data = request.except(['publicCode'])
      const { publicCode } = request.only(['publicCode'])

      const account = await Database.table('accounts').where('publicCode', publicCode).update(data)

      response.send(account)
    }
    catch(e)
    {
        // RETORNA ALGUM POSSÍVEL ERRO
        const error = {status: 400, message: "Não foi possível executar o script", error: e}
        response.send(error)
    }
  }
  
  async update ({ request, response }) 
  {
  }

  async destroy ({ request, response }) 
  {
  }
}

module.exports = AccountController