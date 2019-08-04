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

      response.send({status: 200, messagem: "Conta criada com sucesso!"})
    }
    catch(e)
    {
      // RETORNA ALGUM POSSÍVEL ERRO
      const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountController.create", message: e.message}}
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

      const account = await Database.table('accounts').where('publicCode', publicCode).update(data)

      if(account == 0) throw {status: 200, messagem: "Conta não foi encontrada com os dados informados"}
      
      response.send({status: 200, messagem: "Dados alterados com sucesso"})
    }
    catch(e)
    {
      // RETORNA ALGUM POSSÍVEL ERRO
      const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountController.edit", message: e.message}}
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

      if(account == 0) throw {status: 200, messagem: "Conta não foi encontrada com os dados informados"}
      
      response.send({status: 200, messagem: "Conta deletada com sucesso"})
    }
    catch(e)
    {
      // RETORNA ALGUM POSSÍVEL ERRO
      const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountController.delete", message: e.message}}
      response.send(error)
    }
  }

  // MÉTODO QUE BUSCA INFORMAÇÕES DE USUÁRIOS
  async show ({ request, response })
  {
    try
    {
      const where = request.all()
      const account = await Database.select('id', 'name', 'email', 'password', 'premdays', 'type', 'publicCode', 'token').from('accounts').where(where)
      response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: account})
    }
    catch(e)
    {
      // RETORNA ALGUM POSSÍVEL ERRO
      const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountController.show", messagem: e.message}}
      response.send(error)
    }
  }

  // MÉTODO QUE ALTERA A SENHA DO USUÁRIO
  async password ({ request, response })
  {
    try
    {
      const data = request.except(['publicCode'])
      const { publicCode } = request.only(['publicCode'])

      if(data.password) data.password = await Hash.make(data.password)

      const account = await Database.table('accounts').where('publicCode', publicCode).update(data)

      if(account == 0) throw {status: 400, messagem: "Não foi possível alterar a senha com os dados informados"}
      
      response.send({status: 200, messagem: "Senha alterada com sucesso"})

    }
    catch(e)
    {
      // RETORNA ALGUM POSSÍVEL ERRO
      const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountController.password", messagem: e.message}}
      return error
    }
  }

  async get(where)
  {
    try
    {
      const account = await Database.select('name', 'email', 'password', 'premdays', 'type', 'publicCode', 'token').from('accounts').where(where)
      return {status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: account}
    }
    catch(e)
    {
      // RETORNA ALGUM POSSÍVEL ERRO
      const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountController.get", messagem: e.message}}
      return error
    }
  }

  async set(data)
  {
    try
    {
      const { publicCode } = data
      delete data.publicCode

      const account = await Database.table('accounts').where('publicCode', publicCode).update(data)

      if(account == 0) throw {status: 200, messagem: "Conta não foi encontrada com os dados informados"}
      
      return {status: 200, messagem: "Token adicionado com sucesso"}
    }
    catch(e)
    {
      // RETORNA ALGUM POSSÍVEL ERRO
      const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "AccountController.set", message: e.message}}
      return error
    }
  }
}

module.exports = AccountController