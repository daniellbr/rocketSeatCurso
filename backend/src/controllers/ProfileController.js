const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const ong_id = request.headers.authorization;
        
        const incidents = await connection('incidents')
            .where('ong_id', ong_id) //busca TODOS os incidentes da Ong que está na requisição a partir da Authorization que está no header da requisição
            .select('*');
        
        return response.json(incidents);
    }
}