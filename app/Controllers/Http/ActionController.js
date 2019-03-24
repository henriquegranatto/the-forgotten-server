'use strict'

// BUSCA A LISTA DE ACTIONS SCRIPTS
const scripts = require('../../../data/actions/actions.json')

class ActionController 
{
    // MÉTODO QUE BUSCA E EXECUTA O SCRIPT SOLICITADO 
    async execute({ request, response }) 
    {
        try
        {
            // PEGA OS DADOS DA REQUISIÇÃO (NOME DO SCRIPT E DADOS ADICIONAIS)
            const {action, data} = request.only(['action', 'data'])

            // BUSCA O CAMINHO DO SCRIPT E GUARDA O RESULTADO 
            let script = this.findScript(action)

            // VALIDA OS DADOS
            this.validate(action, data, script)

            // TENTA INCLUIR O ARQUIVO COM O SCRIPT  
            script = require(`../../../data/actions/${script}`)

            // TENTA EXECUTA O SCRIPT
            script = await script.execute(data)

            // RETORNA A RESPOSTA
            response.send(script)
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            const error = {status: 400, message: "Não foi possível executar o script", error: e}
            response.send(error)
        }
    }

    // MÉTODOS QUE VALIDA OS DADOS REPASSADOS NA REQUISIÇÃO E SE O SCRIPT FOI ENCONTRADO
    validate(action, data, script)
    {
        try
        {
            // VALIDA OS DADOS NECESSÁRIOS PARA RODAR O SCRIPT
            if(!data) throw {code: 400, message: 'Argumento data não informado na requisição'} 
            if(!action) throw {code: 400, message: 'Argumento action não informado na requisição'} 
            if(!script) throw {code: 400, message: 'Script não encontrado'} 
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            throw {code: "ActionController.validate", messagem: e.message}
        }
    }

    // MÉTODO QUE BUSCA O CAMINHO PARA O SCRIPT
    findScript(action)
    {
        try
        {
            // VARIÁVEL QUE GUARDA O CAMINHO PARA O SCRIPT
            let response

            // BUSCA NO JSON O CAMINHO PARA O SCRIPT SELECIONADO
            Object.keys(scripts).filter(function() 
            {
                response = scripts[action]
            })

            // RETORNA O RESULTADO
            return response
        }
        catch(e)
        {
            // RETORNA ALGUM POSSÍVEL ERRO
            throw {code: "ActionController.findScript", messagem: e.message}
        }
    }
}

module.exports = ActionController