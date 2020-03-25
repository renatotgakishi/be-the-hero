const connection = require('../database/conection');

module.exports = {
    async create(request, response) {
        const ong_id = request.hearders.autorization;

        const ong = await connection('ong').where('ong_id',ong_id).select('name').first();
        if (! ong){
            return response.status(401).json({ erro: 'ONG not found'})
        }
        return response.json(ong);
    }
}