'use strict'

// export const cep =() =>{

// }

//o retornod e toda asnyc e uma promessa
export const pesquisarCep = async (cep) =>{
    const url = `https://viacep.com.br/ws/${cep}/json/`

    const response = await fetch(url)
    const data = await response.json()

    return {
        muncipio: data.localidade, 
        estado: data.uf,
        bairro: data.bairro,
        cidade: data.cidade,
        logradouro: data.logradouro

    }
}

