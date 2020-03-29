const express = require('express');
const cors = require('cors'); // variavel cors recebe as funcionalidades de cors. Cors é uma classe de segurança
const routes = require('./routes'); // aqui foi colocado o caminho para pegar as rotas do arquivo routes.js */

const app = express();

/**
* Esse comando é para informar para o app que o trafego de informação para o comando http post será do tipo JSON
* e também para alterar o formato json para o formato que o JS interprete
 */

app.use(cors());
app.use(express.json());
app.use(routes); // a partir deste momento as rotas estão definidas 

app.listen(3333);