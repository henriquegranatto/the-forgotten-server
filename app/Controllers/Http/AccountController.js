'use strict'

const Hash = use('Hash')
const Database = use('Database')

class AccountController 
{  
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
        const error = {status: 400, message: "Falha na requisição", error: e}
        response.send(error)
    }
  }
  
  // MÉTODO QUE EDITA AS INFORMAÇÕES DE UMA CONTA
  async edit ({ request, response }) 
  {
    try
    {
      const data = request.except(['publicCode'])
      const { publicCode } = request.only(['publicCode'])

      if(data.password) data.password = await Hash.make(data.password)

      const account = await Database.table('accounts').where('publicCode', publicCode).update(data)

      response.send(account)
    }
    catch(e)
    {
        // RETORNA ALGUM POSSÍVEL ERRO
        const error = {status: 400, message: "Falha na requisição", error: e}
        response.send(error)
    }
  }

  // MÉTODO QUE DELETA UM USUÁRIO
  async delete ({ request, response }) 
  {
    try
    {
      const { publicCode } = request.only(['publicCode'])

      const account = await Database.table('accounts').where('publicCode', publicCode).delete()

      response.send(account)
    }
    catch(e)
    {
        // RETORNA ALGUM POSSÍVEL ERRO
        const error = {status: 400, message: "Falha na requisição", error: e}
        response.send(error)
    }
  }

  async show ({ request, response })
  {
    try
    {
      const data = request.all()
      const account = await Database.select('name', 'email', 'password', 'premdays', 'type', 'publicCode', 'token').from('accounts').where(data)
      response.send(account)
    }
    catch(e)
    {

    }
  }
}

module.exports = AccountController