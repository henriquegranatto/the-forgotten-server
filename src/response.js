// FUNÇÃO QUE RETORNA O OBJETO RESPONSE
const newResponse = () =>
{
    // TEMPLATE DO OBJETO RESPONSE
    const response = 
    {
        status: null,
        message: null, 
        data: null,

        // FUNÇÃO QUE VERIFICA E ARMAZENA OS DADOS DO RETORNO
        setResponse: function(prmStatus, prmMessage, prmData)
        {
            try
            {
                //VALIDADORES DOS DADOS PASSADOS POR PARÂMETRO
                if(!prmMessage) throw {error: null, message: "Response message nao pode ser vazio"};
                if(!prmStatus) throw {error: null, message: "Response status nao pode ser vazio"};
                if(typeof prmStatus != "number") throw {error: null, message: "Response status deve ser um numero"};
                if(typeof prmMessage != "string") throw {error: null, message: "Response status deve ser uma string"};
                if(!prmData) data = null

                //ARMAZENA OS DADOS NOS ATRIBUTOS
                this.status = prmStatus;
                this.message = prmMessage;
                this.data = prmData;

                //DELETE A FUNÇÃO ANTES DE RETORNAR O OBJETO
                delete this.setResponse

                //RETORNA O OBJETO MODIFICADO
                return this
            }
            catch(error)
            {
                //RETORNA CATCH ERROR
                throw {error: null, message: error};
            }
        }
    }

    //RETORNA O OBJETO TEMPLATE
    return response;
}