
const express = require('express'); // importando o express para dentro do router para tirar esse serviço de dentro do index

const OngController = require('./controllers/OngController'); // Passa o controle do controller para a variavel criada OngController
const IncidentController = require('./controllers/IncidentController'); // Passa o controle do controller para a variavel criada OngController
const ProfileController = require('./controllers/ProfileController'); // Passa o controle do controller para a variavel criada ProfileController
const SessionController = require('./controllers/SessionController'); // Passa o controle do controller para a variavel criada SessionController

const routes = express.Router(); // criando uma variavel routes tirando o modulo de rotas do express e colocando dentro do routes


routes.post('/session', SessionController.create); //Esta roda é para o login da pagina ela é criada por convensão na SessionController onde deverá ficar ativa em quanto estiver logado

routes.get('/ongs', OngController.index); // Esta rota vai criar a conexão dentro do OngController e vai chamar o metodo index para faze-lo
routes.post('/ongs', OngController.create); // Esta rota vai criar a conexão dentro do OngController e vai chamar o metodo create para faze-lo

//Esta rota é consultar e trazer todas as Incident cadastradas na tabela
routes.get('/profile', ProfileController.index); // Esta rota vai criar a conexão dentro do IncidentController e vai chamar o metodo index para faze-lo


routes.get('/incidents', IncidentController.index); // Esta rota vai criar a conexão dentro do IncidentController e vai chamar o metodo index para faze-lo
routes.post('/incidents', IncidentController.create); // Esta roda vai criar a conexão dentro do OnController e vai chamar o metodo create Incidents para faze-lo
routes.delete('/incidents/:id', IncidentController.delete); // Esta roda vai criar a conexão dentro do OnController e vai chamar o metodo delete Incidents para faze-lo

// desta forma que se exporta uma varial para dentro de um outro arquivo
module.exports = routes;

/**
 * Rota e recurso  
 * Rota é todo o caminho atá o barra ex localhost:3333
 * Recurso é a extensão pos / ex /users
 **/ 

 /**
  * Metodos HTTP
  * 
  * GET: Buscar/listar a informação do back-end
  * POST: Criar uma informação no back-end 
  * PUT : Metodo para alteração no back-end
  * DELETE: Metodo para deletar  
  **/

  /**
   * Tipos de parametros
   * 
   * Query params: São parametros nomeados na rota apos ? que enviamos dentro da URL para listar, deletar 
   * ou consultar ex usuarios (filtros ou paginação)
   *
   * Route params: São parametros para identifar um UNICO recurso um exemplo apos o users/:id isso quer dizer que tudo 
   * que vem apos o : é refernciado como o id ou users/1 ele vai retornar o usuario com o ID 1
   * 
   * Resquest Body: Corpo da requisição utilizado para criar ou alterar recursos
   */