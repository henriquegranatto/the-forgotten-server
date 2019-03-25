'use strict'

//      MODELO DA ESTRUTURA PADRÃO DE UM SCRIPT      *\
//      PARA QUE O SCRIPT FUNCIONE CORRETAMENTE      *\
//      INFORME NO CAMPO DATA DA SUA REQUISIÇÃO      *\
//         OS PARÂMETROS INFORMADOS ABAIXO.          *\

exports.execute = async ({cid, item, fromPosition, itemEx, toPosition, isHotkey}) =>
{

    // TODOS OS SCRIPTS DEVEM RETORNAR ALGUMA INFORMAÇÃO.
    return {status: 200, messagem: "Modelo de Creature Script Executado com sucesso"}
}