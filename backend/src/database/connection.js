const knex = require('knex'); // tras para a connection o knex
const configuration = require('../../knexfile'); // Tras para o arquivo connection as configurações do knexfile

 const connection = knex(configuration.development); // cria a conexão passando como parametro a conexão de desenvolvimento que está no knexfile

module.exports = connection; //exporta a conexão de dentro deste arquivo a connection