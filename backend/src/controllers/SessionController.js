const connection = require('../database/connection');
 
module.exports = {
    async create(request, response) {
        const { id } = request.body; //Recebe o ID enviado no corpo da requisição 

        const ong = await connection('ongs') // Vai fazer a consulta no banco a apartir do ID 
            .where('id', id)
            .select('name')
            .first();
        
        if (!ong) {
            return response.status(400).json ({ error: 'Não existe Ong com este ID.'})
        }
        return response.json(ong);
    }
}