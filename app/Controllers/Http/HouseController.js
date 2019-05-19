'use strict'

const Database = use('Database')

class HouseController 
{
    async create ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const house = await Database.table('houses').insert(data)

            response.send({status: 200, messagem: "House criada com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "HouseController.create", messagem: e.message}}
            response.send(error)
        }
    }

    async edit ({ request, response }) 
    {
        try
        {
            const data = request.except(['publicCode', 'token'])

            const house = await Database.table('houses').where('id', data.id).update(data)

            response.send({status: 200, messagem: "Dados alterados com sucesso!"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "HouseController.edit", messagem: e.message}}
            response.send(error)
        }
    }

    async delete ({ request, response }) 
    {
        try
        {
            const data = request.only(['id'])

            const house = await Database.table('houses').where('id', data.id).delete()

            if(house == 0) throw {status: 400, message: "House não foi encontrada com os dados informados"}
            
            response.send({status: 200, messagem: "House deletada com sucesso"})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "HouseController.delete", message: e.message}}
            response.send(error)
        }
    }

    async show ({ request, response }) 
    {
        try
        {
            const data = request.only(['id', 'name'])
            const filter = (data.id) ? {id: data.id} : {name: data.name}
            const house = await Database.select('*').from('houses').where(filter)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: house})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "HouseController.show", message: e.message}}
            response.send(error)
        }
    }

    async showAllGuilds ({ request, response }) 
    {
        try
        {
            const data = request.only(['ownerid'])
            const house = await Database.select('*').from('houses').where("ownerid", data.ownerid)
            response.send({status: 200, messagem: "Pesquisa realizada. Dados encontrados:", data: house})
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível atender à requisição", error: {code: "HouseController.show", message: e.message}}
            response.send(error)
        }
    }
}

module.exports = HouseController
