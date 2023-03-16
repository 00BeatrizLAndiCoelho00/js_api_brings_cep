'use strict'

import { pesquisarCep } from "./viacep.js"

//console.log(cep)


//console.log(pesquisarCep('06606270'))

const preencherFormulario = async () =>{
    //console.log("a")
    const cepDigitado = document.getElementById('cep').value
    const cep = await pesquisarCep(cepDigitado)
    document.getElementById('endereco').value =  cep.logradouro
    document.getElementById('bairro').value =  cep.bairro
    document.getElementById('cidade').value =  cep.muncipio
    document.getElementById('estado').value =  cep.estado
}

document.getElementById('cep').addEventListener('blur', preencherFormulario)
