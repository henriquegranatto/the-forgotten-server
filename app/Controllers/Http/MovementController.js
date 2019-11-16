'use strict'

// BUSCA A LISTA DE ACTIONS SCRIPTS
const scripts = require('../../../data/movements/movements.json')

class MovementController 
{
    // MÉTODO QUE BUSCA E EXECUTA O SCRIPT SOLICITADO 
    async execute({ request, response }) 
    {
        try
        {
            // PEGA OS DADOS DA REQUISIÇÃO (NOME DO SCRIPT E DADOS ADICIONAIS)
            const {name, data} = request.only(['name', 'data'])

            // BUSCA O CAMINHO DO SCRIPT E GUARDA O RESULTADO 
            let script = this.findScript(name)

            // VALIDA OS DADOS
            this.validate(name, data, script)

            // TENTA INCLUIR O ARQUIVO COM O SCRIPT  
            script = require(`../../../data/movements/${script}`)

            // TENTA EXECUTA O SCRIPT
            script = await script.execute(data)

            // RETORNA A RESPOSTA
            response.send(script)
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("MovementController.execute", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    // MÉTODOS QUE VALIDA OS DADOS REPASSADOS NA REQUISIÇÃO E SE O SCRIPT FOI ENCONTRADO
    validate(name, data, script)
    {
        try
        {
            // VALIDA OS DADOS NECESSÁRIOS PARA RODAR O SCRIPT
            if(!data) throw {code: 400, message: 'Argumento data não informado na requisição'} 
            if(!name) throw {code: 400, message: 'Argumento name não informado na requisição'} 
            if(!script) throw {code: 400, message: 'Script não encontrado'} 
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("MovementController.validate", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }

    // MÉTODO QUE BUSCA O CAMINHO PARA O SCRIPT
    findScript(name)
    {
        try
        {
            // VARIÁVEL QUE GUARDA O CAMINHO PARA O SCRIPT
            let response

            // BUSCA NO JSON O CAMINHO PARA O SCRIPT SELECIONADO
            Object.keys(scripts).filter(function() 
            {
                response = scripts[name]
            })

            // RETORNA O RESULTADO
            return response
        }
        catch(e)
        {
            // REGISTRA O ERRO NO BANCO DE DADOS E RETORNA A REQUISIÇÃO
            const data = request.all()
            const code = await server_error.register("MovementController.findScript", JSON.stringify(data), e.toString())
            const error = {status: 400, message: "Não foi possível atender à requisição", error: code}
            response.send(error)
        }
    }
}

module.exports = MovementController