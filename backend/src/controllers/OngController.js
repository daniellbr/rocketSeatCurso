const express = require('express');
const crypto = require('crypto');

const connection = require('../database/connection')

module.exports = {

    async index(request, response) {
        const ongs = await connection('ongs').select('*'); //Aqui está fazendo uma conexão assincrona e buscando todos os regs da tabela ongs
    
        return response.json(ongs);
    },

    async create(request, response){ // o async serve para informar que a requisição será assincrona
        const { name, email, whatsapp, city, uf } = request.body;
    
        const id = crypto.randomBytes(4).toString('HEX');
    
        await connection('ongs').insert({ // o await é para informar que o node deve aguardar o retorno da requisicao para inserir
          id,
          name,
          email,
          whatsapp,
          city,      
          uf,
        })
        return response.json({ id }); //* só retorna o ID pq quando ela se cadastra ela precisa por ser um numero unico e é o que ela utiliza para se cadastrar 
    }
}