const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const {  page = 1 } = request.query; //variavel page recebe o parametro page da REQUEST.QUERY para verifica qual a pagina, se não houver parametro ele recebe por default 1.

        const [count] = await connection('incidents').count(); // variavel count recebe a quantidade de registros na tabela para passar para o Front para saber o número de paginações que pode ser feita

        const incidents = await connection('incidents')
        .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
        .limit(5) //limite para trazer somente 5 registros por vez na paginação
        .offset((page -1) * 5) //calculo para trazer sempre os próximos 5 registros
        .select([
            'incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.city',
            'ongs.uf'
        ]);

        response.header('X-Total-Count', count['count(*)']) // O valor de count está sendo atribuido a variavel X-Total-Count e disponibilizado no header do body da requisição

        return response.json(incidents);                
    },

    async create(request, response) {
       const { title, description, value} = request.body; //*não se deve colocar o ID no body por não ter segurança
       const ong_Id = request.headers.authorization; //*As informações como ID, idioma

       const [id] = await connection('incidents').insert({ //* existem ao menos duas formas de se receber o resultado utilizando uma variavel com um nome qq ex: result onde ela tera o valor retornado ou da maneira como está que é desestruturando e trasendo somente o necessário que é o ID o primeiro vetor do array [id]
           title,
           description,
           value,
           ong_Id,
       })

       return response.json({ id }) // Enviando com chaves junto para enviar o nome junto para o front saber o que é    }
    },
     
    async delete(request, response) {
        try {
            debugger
            const { id } = request.params; // Recebe o id vindo do front end para ser deletado
            const ong_id = request.headers.authorization; // Essa variavel ong_id serve para validar se o ID que será deletado foi criado pelo mesmo ID. É uma validação de segurança
            
            const incident = await connection('incidents')
                .where('id', id)
                .select('ong_id')
                .first();
                    
            if (incident.ong_id != ong_id) {
    
                return response.status(401).json({ error: 'Operação não autorizada.'});
            }
    
            await connection('incidents').where('id', id).delete();
            
            return response.status(204).send('Item deletado');
        }   catch (error) {
            return response.status(500).send(error.message);
        } 
    }
}